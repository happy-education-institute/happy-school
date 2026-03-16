import { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#academics" },
  { label: "Facilities", href: "#facilities" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isHindi, setIsHindi] = useState(false);

  useEffect(() => {
    setIsHindi(document.cookie.includes("googtrans=/en/hi"));
  }, []);

  const toggleLanguage = () => {
    const newLang = isHindi ? "en" : "hi";
    document.cookie = `googtrans=/en/${newLang}; path=/`;
    document.cookie = `googtrans=/en/${newLang}; domain=${window.location.hostname}; path=/`;
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img className="h-12 drop-shadow-sm transition-transform hover:scale-105" src="logo.svg" alt="Happy Public Senior Secondary School Logo" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-sm font-bold text-foreground bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 transition-colors px-3 py-2 rounded-full shadow-sm"
              title="Toggle Language"
            >
              <Languages className="w-4 h-4 text-secondary" />
              {isHindi ? "English" : "हिंदी"}
            </button>
            <Button
              asChild
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 text-sm font-bold"
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-xs font-bold text-foreground bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 transition-colors px-2.5 py-1.5 rounded-full shadow-sm"
            title="Toggle Language"
          >
            <Languages className="w-4 h-4 text-secondary" />
            {isHindi ? "EN" : "HI"}
          </button>
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-bold py-2 text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}

          <Button
            asChild
            className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full font-bold"
          >
            <a href="#admission" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
