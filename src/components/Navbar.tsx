import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../context/LanguageContext";

const navLinksData = [
  { key: "about", href: "#about" },
  { key: "programs", href: "#academics" },
  { key: "facilities", href: "#facilities" },
  { key: "leadership", href: "#leadership" },
  { key: "contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const isHindi = language === "hi";

  const toggleLanguage = () => {
    setLanguage(isHindi ? "en" : "hi");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img className="h-12 drop-shadow-sm transition-transform hover:scale-105" src="logo.svg" alt="Happy Public Senior Secondary School Logo" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinksData.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('navbar', l.key)}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-sm font-bold text-foreground bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 transition-colors px-3 py-2 rounded-full shadow-sm"
              title="Toggle Language"
            >
              <Languages className="w-4 h-4 text-secondary" />
              {isHindi ? t('navbar', 'switchShort') : t('navbar', 'switchShort')}
            </button>
            <Link
              to="/careers"
              className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              Careers
            </Link>
            <Button
              asChild
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 text-sm font-bold"
            >
              <a href="#contact">{t('navbar', 'getStarted')}</a>
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
            {isHindi ? t('navbar', 'switchShort') : t('navbar', 'switchShort')}
          </button>
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t px-4 pb-4 space-y-3">
          {navLinksData.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-bold py-2 text-muted-foreground hover:text-foreground"
            >
              {t('navbar', l.key)}
            </a>
          ))}

          <Link
            to="/careers"
            onClick={() => setOpen(false)}
            className="block text-sm font-bold py-2 text-muted-foreground hover:text-foreground"
          >
            Careers
          </Link>

          <Button
            asChild
            className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full font-bold"
          >
            <a href="#admission" onClick={() => setOpen(false)}>
              {t('navbar', 'getStarted')}
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
