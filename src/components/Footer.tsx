import { Facebook, Instagram } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container mx-auto px-4">
      {/* Top links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 text-sm">
        <div>
          <h4 className="font-bold mb-3 text-primary-foreground/80">{t('footer', 'school')}</h4>
          <div className="space-y-2">
            <a href="#about" className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors">{t('footer', 'aboutUs')}</a>
            <a href="#academics" className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors">{t('footer', 'programs')}</a>
            <a href="#facilities" className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors">{t('footer', 'facilities')}</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-primary-foreground/80">{t('footer', 'admissions')}</h4>
          <div className="space-y-2">
            <a href="#admission" className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors">{t('footer', 'applyNow')}</a>
            <a href="#contact" className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors">{t('footer', 'contactUs')}</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-primary-foreground/80">{t('footer', 'contact')}</h4>
          <div className="space-y-2">
            <a href="tel:9602805710" className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors">9602805710</a>
            <a href="tel:8890655123" className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors">8890655123</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-primary-foreground/80">{t('footer', 'location')}</h4>
          <p className="text-primary-foreground/50">Udaipur Road, Sangariya, Block - Barisadri, Rajasthan - 312404</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-heading text-xl">
          <a href="#home" className="flex items-center gap-3">
            <img className="h-12 drop-shadow-sm transition-transform hover:scale-105" src="logo.svg" alt="Happy Public Senior Secondary School Logo" />
          </a>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <a
            href="https://www.instagram.com/happypublicschoolsangariya/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
          <span className="text-primary-foreground/30">•</span>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <Facebook className="w-4 h-4" />
            Facebook
          </a>
        </div>
        <div className="text-secondary font-heading text-lg tracking-wide text-center">
          {t('footer', 'inspire')}
        </div>
        <p className="text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} {t('footer', 'rights')}
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
