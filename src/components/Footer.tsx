import { Facebook, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container mx-auto px-4">
      {/* Top links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 text-sm">
        <div>
          <h4 className="font-bold mb-3 text-primary-foreground/80">School</h4>
          <div className="space-y-2">
            <a href="#about" className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors">About Us</a>
            <a href="#academics" className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors">Programs</a>
            <a href="#facilities" className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors">Facilities</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-primary-foreground/80">Admissions</h4>
          <div className="space-y-2">
            <a href="#admission" className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors">Apply Now</a>
            <a href="#contact" className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors">Contact Us</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-primary-foreground/80">Contact</h4>
          <div className="space-y-2">
            <a href="tel:9602805710" className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors">9602805710</a>
            <a href="tel:8890655123" className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors">8890655123</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-primary-foreground/80">Location</h4>
          <p className="text-primary-foreground/50">Sangariya, Rajasthan</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-heading text-xl">
          <a href="#home" className="font-heading text-2xl text-foreground">
          {/* Happy Public School<span className="text-secondary">.</span> */}
          <img className="h-12" src="logo.svg"/>
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
        <p className="text-xs text-primary-foreground/40 italic">Educating minds, shaping futures.</p>
        <p className="text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} Happy Public Secondary School. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
