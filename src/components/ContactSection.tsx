import { useState, FormEvent } from "react";
import { Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      alert("Please fill in Name, Phone, and Message before sending.");
      return;
    }

    const whatsappNumber = "919602805710"; // include country code for WhatsApp deep link
    const rawText = `Hello, this is ${name}.\nPhone: ${phone}${email ? `\nEmail: ${email}` : ""}\n\nMessage:\n${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rawText)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="bg-secondary rounded-[2rem] p-8 md:p-12 text-secondary-foreground relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 right-8 text-4xl opacity-30">🌍</div>
          <div className="absolute bottom-4 left-8 w-12 h-12 bg-secondary-foreground/10 rounded-full" />

          <div className="grid lg:grid-cols-2 gap-10 relative">
            <div className="space-y-6">
              <span className="inline-block bg-secondary-foreground/20 text-secondary-foreground font-bold text-xs px-4 py-1.5 rounded-full">
                Get in Touch
              </span>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl mb-2 leading-tight">
                  Building children
                  <br />one at a time
                </h2>
                <p className="text-secondary-foreground/70 text-sm">
                  Ceaseless flows from the fountains of knowledge.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-secondary-foreground/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1">Address</div>
                    <p className="text-sm text-secondary-foreground/70">
                      Happy Public Secondary School
                      <br />
                      Sangariya, Rajasthan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-secondary-foreground/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1">Phone</div>
                    <a href="tel:9602805710" className="block text-sm hover:underline font-semibold">
                      📞 9602805710
                    </a>
                    <a href="tel:8890655123" className="block text-sm hover:underline font-semibold">
                      📞 8890655123
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-secondary-foreground/20 shadow-inner bg-secondary-foreground/10">
                <iframe
                  title="Happy Public School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6571.787470988954!2d74.42000951781063!3d24.4843905130606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3966380e2eab1213%3A0x6e81806c6c731a52!2sHappy%20Public%20School%20Sangariya!5e1!3m2!1sen!2sin!4v1773481575533!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64 md:h-72"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="bg-white/15 border border-secondary-foreground/20 rounded-2xl p-6 backdrop-blur">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2 text-sm font-semibold">
                    Name<span className="text-red-100">*</span>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-secondary-foreground/30 bg-secondary-foreground/10 px-3 py-2 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/70"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold">
                    Phone<span className="text-red-100">*</span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-secondary-foreground/30 bg-secondary-foreground/10 px-3 py-2 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/70"
                      placeholder="e.g. 9602805710"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Email
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-secondary-foreground/30 bg-secondary-foreground/10 px-3 py-2 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/70"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Message<span className="text-red-100">*</span>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-secondary-foreground/30 bg-secondary-foreground/10 px-3 py-3 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/70 min-h-[120px]"
                    placeholder="How can we help?"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send via WhatsApp
                </button>
                <p className="text-xs text-secondary-foreground/70 text-center">
                  Clicking send opens WhatsApp with your message prefilled.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
