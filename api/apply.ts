import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const {
    name,
    phone,
    email,
    position,
    qualification,
    experience,
    coverLetter,
    resumeBase64,
    resumeFilename,
  } = req.body || {};

  // Validation
  if (!name || !phone || !email || !position || !qualification || !experience || !coverLetter) {
    return res.status(400).json({ error: "All required fields must be filled." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.RECIPIENT_EMAIL;

  if (!apiKey || !recipientEmail) {
    return res.status(500).json({ error: "Email service is not configured." });
  }

  // ── HTML email body ────────────────────────────────────────
  const hasResume = !!resumeBase64;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #f9f5f0; border-radius: 16px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #7c4c28 0%, #c2621a 100%); padding: 32px 40px; text-align: center;">
        <h1 style="color: #fdf8f2; margin: 0; font-size: 26px; font-weight: 800;">📚 New Job Application</h1>
        <p style="color: rgba(253,248,242,0.75); margin: 8px 0 0; font-size: 14px;">Happy Public Senior Secondary School — Careers Portal</p>
      </div>
      <div style="padding: 32px 40px;">
        <div style="background: #fff; border-radius: 12px; padding: 24px; border: 1px solid #e8ddd4; margin-bottom: 20px;">
          <h2 style="margin: 0 0 16px; color: #7c4c28; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">Applicant Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #8a7060; font-size: 13px; font-weight: 600; width: 40%;">Full Name</td><td style="padding: 8px 0; color: #3d2010; font-size: 14px; font-weight: 700;">${name}</td></tr>
            <tr style="border-top: 1px solid #f0e8e0;"><td style="padding: 8px 0; color: #8a7060; font-size: 13px; font-weight: 600;">Phone</td><td style="padding: 8px 0; color: #3d2010; font-size: 14px; font-weight: 700;">${phone}</td></tr>
            <tr style="border-top: 1px solid #f0e8e0;"><td style="padding: 8px 0; color: #8a7060; font-size: 13px; font-weight: 600;">Email</td><td style="padding: 8px 0; font-size: 14px; font-weight: 700;"><a href="mailto:${email}" style="color: #c2621a;">${email}</a></td></tr>
            <tr style="border-top: 1px solid #f0e8e0;"><td style="padding: 8px 0; color: #8a7060; font-size: 13px; font-weight: 600;">Position / Subject</td><td style="padding: 8px 0; color: #3d2010; font-size: 14px; font-weight: 700;">${position}</td></tr>
            <tr style="border-top: 1px solid #f0e8e0;"><td style="padding: 8px 0; color: #8a7060; font-size: 13px; font-weight: 600;">Qualification</td><td style="padding: 8px 0; color: #3d2010; font-size: 14px; font-weight: 700;">${qualification}</td></tr>
            <tr style="border-top: 1px solid #f0e8e0;"><td style="padding: 8px 0; color: #8a7060; font-size: 13px; font-weight: 600;">Experience</td><td style="padding: 8px 0; color: #3d2010; font-size: 14px; font-weight: 700;">${experience} year(s)</td></tr>
            <tr style="border-top: 1px solid #f0e8e0;"><td style="padding: 8px 0; color: #8a7060; font-size: 13px; font-weight: 600;">Resume Attached</td><td style="padding: 8px 0; color: #3d2010; font-size: 14px; font-weight: 700;">${hasResume ? `✅ ${resumeFilename || "resume.pdf"}` : "❌ Not provided"}</td></tr>
          </table>
        </div>
        <div style="background: #fff; border-radius: 12px; padding: 24px; border: 1px solid #e8ddd4;">
          <h2 style="margin: 0 0 12px; color: #7c4c28; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">Cover Letter</h2>
          <p style="margin: 0; color: #3d2010; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${coverLetter}</p>
        </div>
      </div>
      <div style="background: #3d2010; padding: 20px 40px; text-align: center;">
        <p style="margin: 0; color: rgba(253,248,242,0.5); font-size: 12px;">Sent automatically from the Happy Public Senior Secondary School careers portal.</p>
      </div>
    </div>
  `;

  // ── Build Resend payload ───────────────────────────────────
  type ResendPayload = {
    from: string;
    to: string[];
    reply_to: string;
    subject: string;
    html: string;
    attachments?: { filename: string; content: string }[];
  };

  const payload: ResendPayload = {
    from: "Careers Portal <onboarding@resend.dev>",
    to: [recipientEmail],
    reply_to: email,
    subject: `New Teaching Application — ${position} — ${name}`,
    html: htmlBody,
  };

  if (hasResume && resumeBase64) {
    payload.attachments = [
      {
        filename: resumeFilename || "resume.pdf",
        content: resumeBase64,
      },
    ];
  }

  // ── Call Resend ────────────────────────────────────────────
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();

    if (!response.ok) {
      // Log the full Resend error so it appears in Vercel function logs
      console.error("Resend API error:", JSON.stringify(responseData, null, 2));
      const resendMessage =
        responseData?.message || responseData?.error || "Resend rejected the request.";
      return res.status(502).json({ error: `Email delivery failed: ${resendMessage}` });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Unexpected error calling Resend:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
}
