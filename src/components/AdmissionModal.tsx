import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Calendar, X } from "lucide-react";

const computeAcademicYear = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-based
  return month >= 3 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
};

const AdmissionModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const timerRef = useRef<number | null>(null);
  const academicYear = useMemo(computeAcademicYear, []);

  useEffect(() => {
    // Auto-open after page load (5s). Keep timer stable across rerenders/StrictMode.
    timerRef.current = window.setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  const handleEnquire = () => {
    setIsOpen(false);
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#contact";
    }
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        aria-label={isOpen ? "Close admission form" : "Open admission form"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Calendar className="w-6 h-6" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden animate-scaleIn grid md:grid-cols-2">
            {/* Left side: Image */}
            <div className="hidden md:block relative">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
                alt="Happy Students"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold tracking-tight">
                  Join Our Family
                </h3>
                <p className="text-lg mt-1">
                  Your journey to excellence starts here.
                </p>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-md transition-all duration-300 hover:scale-110"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-yellow-200 text-yellow-800 font-semibold px-3 py-1 rounded-full text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  Admissions Open for {academicYear}
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-3 tracking-tight">
                  Secure Your Child's Future!
                </h2>

                <p className="font-bold text-red-600 text-xl mb-6 animate-pulse">
                  Limited Seats Available!
                </p>

                <form
                  className="w-full space-y-3 text-left"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!name.trim() || !phone.trim()) {
                      alert("Please provide both name and phone number.");
                      return;
                    }
                    const whatsappNumber = "919602805710";
                    const rawText = `Hello!\nI am interested in admission for the ${academicYear} session.\nName: ${name}\nPhone: ${phone}`;
                    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rawText)}`;
                    window.open(url, "_blank");
                    handleClose();
                  }}
                >
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all shadow-sm"
                  />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all shadow-sm"
                  />
                  
                  <div className="flex flex-col gap-2 pt-2">
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground font-bold text-lg px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <span>Send via WhatsApp</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleEnquire}
                      className="w-full bg-white text-secondary font-bold text-lg px-8 py-3.5 rounded-xl border border-secondary hover:bg-secondary/5 transition-all duration-300 text-center shadow-sm"
                    >
                      Enquire Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdmissionModal;
