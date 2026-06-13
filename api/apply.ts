import type { VercelRequest, VercelResponse } from "@vercel/node";
import formidable from "formidable";
import fs from "fs";
import path from "path";

// Tell Vercel NOT to parse the body — formidable handles it
export const config = {
  api: {
    bodyParser: false,
  },
};

// ── Parse multipart form using formidable ─────────────────────
function parseForm(
  req: VercelRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  return new Promise((resolve, reject) => {
    const form = formidable({
      uploadDir: "/tmp",
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // 5 MB
      filter: ({ mimetype }) => mimetype === "application/pdf",
    });

    form.parse(req as unknown as Parameters<typeof form.parse>[0], (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

// ── Main handler ──────────────────────────────────────────────
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // ── Parse ──────────────────────────────────────────────────
  let fields: formidable.Fields;
  let files: formidable.Files;

  try {
    ({ fields, files } = await parseForm(req));
  } catch (err) {
    console.error("Form parse error:", err);
    return res.status(400).json({ error: "Could not parse form data." });
  }

  // Helper to extract first string value from formidable field
  const field = (key: string): string => {
    const val = fields[key];
    return Array.isArray(val) ? (val[0] ?? "") : (val ?? "");
  };

  const name = field("name");
  const phone = field("phone");
  const email = field("email");
  const position = field("position");
  const qualification = field("qualification");
  const experience = field("experience");
  const coverLetter = field("coverLetter");

  // Validation
  if (!name || !phone || !email || !position || !qualification || !experience || !coverLetter) {
    return res.status(400).json({ error: "All required fields must be filled." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.RECIPIENT_EMAIL;

  if (!apiKey || !recipientEmail) {
    return res.status(500).json({ error: "Email service is not configured." });
  }

  // ── Build PDF attachment (if provided) ─────────────────────
  type ResendAttachment = { filename: string; content: string };
  const attachments: ResendAttachment[] = [];

  const resumeRaw = files["resume"];
  const resumeFile = Array.isArray(resumeRaw) ? resumeRaw[0] : resumeRaw;

  if (resumeFile && resumeFile.filepath) {
    try {
      const fileBuffer = fs.readFileSync(resumeFile.filepath);
      const originalName = resumeFile.originalFilename ?? "resume.pdf";
      attachments.push({
        filename: originalName,
        content: fileBuffer.toString("base64"),
      });
    } catch (err) {
      console.warn("Could not read uploaded resume file:", err);
      // Non-fatal: proceed without attachment
    }
  }

  // ── Build HTML email ───────────────────────────────────────
  const hasResume = attachments.length > 0;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #f9f5f0; border-radius: 16px; overflow: hidden;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #7c4c28 0%, #c2621a 100%); padding: 32px 40px; text-align: center;">
        <h1 style="color: #fdf8f2; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">
          📚 New Job Application
        </h1>
        <p style="color: rgba(253,248,242,0.75); margin: 8px 0 0; font-size: 15px;">
          Happy Public Senior Secondary School — Careers Portal
        </p>
      </div>

      <!-- Body -->
      <div style="padding: 32px 40px;">
        <div style="background: #fff; border-radius: 12px; padding: 24px; border: 1px solid #e8ddd4; margin-bottom: 20px;">
          <h2 style="margin: 0 0 16px; color: #7c4c28; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">Applicant Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #8a7060; font-size: 13px; font-weight: 600; width: 40%;">Full Name</td><td style="padding: 8px 0; color: #3d2010; font-size: 14px; font-weight: 700;">${name}</td></tr>
            <tr style="border-top: 1px solid #f0e8e0;"><td style="padding: 8px 0; color: #8a7060; font-size: 13px; font-weight: 600;">Phone</td><td style="padding: 8px 0; color: #3d2010; font-size: 14px; font-weight: 700;">${phone}</td></tr>
            <tr style="border-top: 1px solid #f0e8e0;"><td style="padding: 8px 0; color: #8a7060; font-size: 13px; font-weight: 600;">Email</td><td style="padding: 8px 0; font-size: 14px; font-weight: 700;"><a href="mailto:${email}" style="color: #c2621a;">${email}</a></td></tr>
            <tr style="border-top: 1px solid #f0e8e0;"><td style="padding: 8px 0; color: #8a7060; font-size: 13px; font-weight: 600;">Position / Subject</td><td style="padding: 8px 0; color: #3d2010; font-size: 14px; font-weight: 700;">${position}</td></tr>
            <tr style="border-top: 1px solid #f0e8e0;"><td style="padding: 8px 0; color: #8a7060; font-size: 13px; font-weight: 600;">Qualification</td><td style="padding: 8px 0; color: #3d2010; font-size: 14px; font-weight: 700;">${qualification}</td></tr>
            <tr style="border-top: 1px solid #f0e8e0;"><td style="padding: 8px 0; color: #8a7060; font-size: 13px; font-weight: 600;">Experience</td><td style="padding: 8px 0; color: #3d2010; font-size: 14px; font-weight: 700;">${experience} year(s)</td></tr>
            <tr style="border-top: 1px solid #f0e8e0;"><td style="padding: 8px 0; color: #8a7060; font-size: 13px; font-weight: 600;">Resume Attached</td><td style="padding: 8px 0; color: #3d2010; font-size: 14px; font-weight: 700;">${hasResume ? "✅ Yes — " + (attachments[0]?.filename ?? "resume.pdf") : "❌ Not provided"}</td></tr>
          </table>
        </div>

        <div style="background: #fff; border-radius: 12px; padding: 24px; border: 1px solid #e8ddd4;">
          <h2 style="margin: 0 0 12px; color: #7c4c28; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">Cover Letter</h2>
          <p style="margin: 0; color: #3d2010; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${coverLetter}</p>
        </div>
      </div>

      <!-- Footer -->
      <div style="background: #3d2010; padding: 20px 40px; text-align: center;">
        <p style="margin: 0; color: rgba(253,248,242,0.5); font-size: 12px;">
          Sent automatically from the Happy Public Senior Secondary School careers portal.
        </p>
      </div>
    </div>
  `;

  // ── Send via Resend REST API ───────────────────────────────
  try {
    const payload: Record<string, unknown> = {
      from: "Careers Portal <onboarding@resend.dev>",
      to: [recipientEmail],
      reply_to: email,
      subject: `New Teaching Application — ${position} — ${name}`,
      html: htmlBody,
    };

    if (attachments.length > 0) {
      payload.attachments = attachments;
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API error:", errorData);
      return res.status(502).json({ error: "Failed to send email. Please try again." });
    }

    // Clean up the temp file from /tmp
    if (resumeFile?.filepath) {
      try { fs.unlinkSync(resumeFile.filepath); } catch { /* ignore */ }
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
}
