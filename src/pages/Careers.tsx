import { useState, useRef, FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  Heart,
  Send,
  ChevronLeft,
  Briefcase,
  Users,
  Star,
  CheckCircle2,
  XCircle,
  Loader2,
  FileText,
  UploadCloud,
  X,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── Types ──────────────────────────────────────────────────
type FormState = "idle" | "loading" | "success" | "error";

// ─── Static data ────────────────────────────────────────────
const positions = [
  "Mathematics Teacher",
  "Science Teacher (Physics)",
  "Science Teacher (Chemistry)",
  "Science Teacher (Biology)",
  "English Teacher",
  "Hindi Teacher",
  "Social Studies Teacher",
  "Computer Science Teacher",
  "Physical Education Teacher",
  "Art & Craft Teacher",
  "Primary Class Teacher (1–5)",
  "Middle School Teacher (6–8)",
  "Other",
];

const qualifications = [
  "B.Ed (Bachelor of Education)",
  "M.Ed (Master of Education)",
  "Graduate + B.Ed",
  "Post-Graduate + B.Ed",
  "Graduate (without B.Ed)",
  "Post-Graduate (without B.Ed)",
  "Diploma in Education (D.El.Ed)",
  "Other",
];

const benefits = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Growth & Learning",
    desc: "Continuous professional development workshops, training sessions, and access to modern teaching resources.",
    bg: "bg-primary",
    textColor: "text-primary-foreground",
    subtextColor: "text-primary-foreground/70",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Nurturing Environment",
    desc: "A warm, collaborative school culture where every teacher's contribution is celebrated and valued.",
    bg: "bg-secondary",
    textColor: "text-secondary-foreground",
    subtextColor: "text-secondary-foreground/70",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Supportive Community",
    desc: "Join a family of passionate educators dedicated to shaping bright futures for every student.",
    bg: "bg-school-olive",
    textColor: "text-primary-foreground",
    subtextColor: "text-primary-foreground/70",
  },
];

// ─── Shared label text wrapper — keeps * on same line ───────
const FieldLabel = ({
  children,
  required = false,
}: {
  children: React.ReactNode;
  required?: boolean;
}) => (
  <span className="flex items-center gap-1">
    {children}
    {required && <span className="text-red-300 font-bold">*</span>}
  </span>
);

// ─── Component ──────────────────────────────────────────────
const Careers = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setPosition("");
    setQualification("");
    setExperience("");
    setCoverLetter("");
    setResumeFile(null);
  };

  const handleFileChange = (file: File | null) => {
    if (!file) return;
    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file only.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be under 5 MB.");
      return;
    }
    setResumeFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFileChange(e.dataTransfer.files[0] ?? null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formState === "loading") return;

    setFormState("loading");
    setErrorMsg("");

    try {
      // Build multipart form data so the PDF travels with the request
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("position", position);
      formData.append("qualification", qualification);
      formData.append("experience", experience);
      formData.append("coverLetter", coverLetter);
      if (resumeFile) formData.append("resume", resumeFile);

      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
        // Do NOT set Content-Type — browser sets it with boundary automatically
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setFormState("success");
      resetForm();
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setFormState("error");
    }
  };

  // ── Styling helpers ────────────────────────────────────────
  // White bg + dark text so native <option> elements are readable cross-browser
  const inputCls =
    "w-full rounded-xl border border-white/30 bg-white/90 text-gray-800 px-4 py-2.5 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/80 transition-all shadow-sm";

  const selectCls =
    "w-full rounded-xl border border-white/30 bg-white/90 text-gray-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-white/80 transition-all shadow-sm appearance-none cursor-pointer";

  return (
    <div className="min-h-screen bg-background">
      {/* ── Shared Navbar ──────────────────────────────── */}
      <Navbar />

      {/* ── Hero ───────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--school-olive)) 50%, hsl(var(--school-green)) 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-primary-foreground/70 hover:text-primary-foreground text-sm font-semibold mb-8 transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="max-w-2xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur text-primary-foreground font-bold text-xs px-4 py-2 rounded-full border border-white/20 mb-6">
              <Briefcase className="w-3.5 h-3.5" />
              We're Hiring!
            </span>

            <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground leading-tight mb-4">
              Shape Tomorrow's
              <br />
              <span className="italic">Leaders</span>
            </h1>
            <p className="text-primary-foreground/75 text-lg leading-relaxed max-w-lg">
              Join our passionate team at Happy Public Senior Secondary School and inspire the next
              generation of thinkers, dreamers, and achievers.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { icon: <Star className="w-4 h-4" />, label: "25+ Years of Excellence" },
                { icon: <Users className="w-4 h-4" />, label: "1200+ Students" },
                { icon: <BookOpen className="w-4 h-4" />, label: "Expert Faculty" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 text-primary-foreground/85 text-sm font-semibold"
                >
                  <span className="text-primary-foreground/60">{s.icon}</span>
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Join Us ────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-muted text-muted-foreground font-bold text-xs px-4 py-1.5 rounded-full mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
              A School Where Teachers Thrive
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className={`${b.bg} rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 rounded-full" />
                <div className={`${b.textColor} mb-4 opacity-90`}>{b.icon}</div>
                <h3 className={`font-heading text-2xl mb-3 ${b.textColor} leading-tight`}>
                  {b.title}
                </h3>
                <p className={`text-sm leading-relaxed ${b.subtextColor}`}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Form ────────────────────────────── */}
      <section id="apply" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-[2rem] p-8 md:p-12 text-secondary-foreground relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-4 right-8 text-5xl opacity-20">🎓</div>
            <div className="absolute bottom-4 left-8 w-14 h-14 bg-secondary-foreground/10 rounded-full" />

            <div className="grid lg:grid-cols-5 gap-10 relative">
              {/* Left: info panel */}
              <div className="lg:col-span-2 space-y-6">
                <span className="inline-block bg-secondary-foreground/20 text-secondary-foreground font-bold text-xs px-4 py-1.5 rounded-full">
                  APPLY NOW
                </span>
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-3">
                    Start Your
                    <br />
                    Application
                  </h2>
                  <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                    Fill in the form and our team will reach out within 3–5 working days to discuss
                    next steps.
                  </p>
                </div>

                {/* Checklist */}
                <ul className="space-y-3">
                  {[
                    "Competitive salary package",
                    "Health & wellness benefits",
                    "Paid leaves & holidays",
                    "Professional development",
                    "Supportive leadership team",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-secondary-foreground/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Contact note */}
                <div className="bg-secondary-foreground/10 border border-secondary-foreground/20 rounded-2xl p-5 text-sm">
                  <p className="font-bold mb-1">Questions?</p>
                  <p className="text-secondary-foreground/70 leading-relaxed">
                    Call us at{" "}
                    <a href="tel:9602805710" className="font-bold hover:underline">
                      +91 9602805710
                    </a>{" "}
                    or email us directly.
                  </p>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3">
                <div className="bg-white/15 border border-secondary-foreground/20 rounded-2xl p-6 md:p-8 backdrop-blur">
                  {/* Success state */}
                  {formState === "success" ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
                      <div className="w-20 h-20 bg-green-400/20 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-green-300" />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl mb-2">Application Sent!</h3>
                        <p className="text-secondary-foreground/70 text-sm leading-relaxed max-w-xs mx-auto">
                          Thank you for applying. Our team will review your application and contact
                          you within 3–5 working days.
                        </p>
                      </div>
                      <button
                        onClick={() => setFormState("idle")}
                        className="mt-2 px-6 py-2.5 bg-secondary-foreground/20 hover:bg-secondary-foreground/30 text-secondary-foreground font-semibold rounded-xl text-sm transition-all"
                      >
                        Submit Another Application
                      </button>
                    </div>
                  ) : (
                    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                      {/* Row 1: Name + Phone */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <label className="flex flex-col gap-1.5 text-sm font-semibold text-secondary-foreground">
                          <FieldLabel required>Full Name</FieldLabel>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={inputCls}
                            placeholder="e.g. Priya Sharma"
                          />
                        </label>
                        <label className="flex flex-col gap-1.5 text-sm font-semibold text-secondary-foreground">
                          <FieldLabel required>Phone Number</FieldLabel>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={inputCls}
                            placeholder="+91 98765 43210"
                          />
                        </label>
                      </div>

                      {/* Row 2: Email */}
                      <label className="flex flex-col gap-1.5 text-sm font-semibold text-secondary-foreground">
                        <FieldLabel required>Email Address</FieldLabel>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={inputCls}
                          placeholder="priya@example.com"
                        />
                      </label>

                      {/* Row 3: Position + Qualification */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <label className="flex flex-col gap-1.5 text-sm font-semibold text-secondary-foreground">
                          <FieldLabel required>Position / Subject</FieldLabel>
                          <select
                            required
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            className={selectCls}
                          >
                            <option value="" disabled>
                              Select position…
                            </option>
                            {positions.map((p) => (
                              <option key={p} value={p}>
                                {p}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className="flex flex-col gap-1.5 text-sm font-semibold text-secondary-foreground">
                          <FieldLabel required>Qualification</FieldLabel>
                          <select
                            required
                            value={qualification}
                            onChange={(e) => setQualification(e.target.value)}
                            className={selectCls}
                          >
                            <option value="" disabled>
                              Select qualification…
                            </option>
                            {qualifications.map((q) => (
                              <option key={q} value={q}>
                                {q}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>

                      {/* Row 4: Experience */}
                      <label className="flex flex-col gap-1.5 text-sm font-semibold text-secondary-foreground">
                        <FieldLabel required>Years of Experience</FieldLabel>
                        <input
                          type="number"
                          required
                          min={0}
                          max={50}
                          value={experience}
                          onChange={(e) => setExperience(e.target.value)}
                          className={inputCls}
                          placeholder="e.g. 3"
                        />
                      </label>

                      {/* Row 5: Cover Letter */}
                      <label className="flex flex-col gap-1.5 text-sm font-semibold text-secondary-foreground">
                        <FieldLabel required>Cover Letter / Message</FieldLabel>
                        <textarea
                          required
                          value={coverLetter}
                          onChange={(e) => setCoverLetter(e.target.value)}
                          className={`${inputCls} min-h-[130px] resize-y`}
                          placeholder="Tell us why you'd be a great fit for our school…"
                        />
                      </label>

                      {/* Row 6: Resume Upload */}
                      <div className="flex flex-col gap-1.5">
                        <span className="text-sm font-semibold text-secondary-foreground flex items-center gap-1">
                          Resume / CV <span className="text-secondary-foreground/50 font-normal text-xs">(PDF, max 5 MB)</span>
                        </span>

                        {resumeFile ? (
                          /* File selected — show pill */
                          <div className="flex items-center justify-between bg-white/90 border border-white/30 rounded-xl px-4 py-3 shadow-sm">
                            <div className="flex items-center gap-3 min-w-0">
                              <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="text-sm font-semibold text-gray-800 truncate">
                                {resumeFile.name}
                              </span>
                              <span className="text-xs text-gray-400 flex-shrink-0">
                                {(resumeFile.size / 1024).toFixed(0)} KB
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => { setResumeFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                              className="ml-3 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                              aria-label="Remove file"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          /* Drop zone */
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={() => fileInputRef.current?.click()}
                            onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
                            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                            onDragLeave={() => setDragOver(false)}
                            onDrop={handleDrop}
                            className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-8 cursor-pointer transition-all ${
                              dragOver
                                ? "border-white bg-white/25 scale-[1.01]"
                                : "border-white/40 bg-white/10 hover:bg-white/20 hover:border-white/70"
                            }`}
                          >
                            <UploadCloud className="w-8 h-8 text-secondary-foreground/60" />
                            <p className="text-sm font-semibold text-secondary-foreground">
                              Drag & drop your PDF here
                            </p>
                            <p className="text-xs text-secondary-foreground/60">
                              or{" "}
                              <span className="underline underline-offset-2 font-bold">
                                click to browse
                              </span>
                            </p>
                          </div>
                        )}

                        {/* Hidden file input */}
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="application/pdf"
                          className="hidden"
                          onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
                        />
                      </div>

                      {/* Error banner */}
                      {formState === "error" && (
                        <div className="flex items-start gap-3 bg-red-500/20 border border-red-400/30 rounded-xl px-4 py-3 text-sm">
                          <XCircle className="w-4 h-4 text-red-300 mt-0.5 flex-shrink-0" />
                          <span className="text-secondary-foreground">{errorMsg}</span>
                        </div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={formState === "loading"}
                        className="w-full inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-semibold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0"
                      >
                        {formState === "loading" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting…
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Submit Application
                          </>
                        )}
                      </button>

                      <p className="text-xs text-secondary-foreground/60 text-center">
                        By submitting, you agree that your information will be reviewed by school
                        administration.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────── */}
      <Footer />
    </div>
  );
};

export default Careers;
