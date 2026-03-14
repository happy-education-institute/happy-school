import { useState } from "react";
import { Menu, X } from "lucide-react";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="font-heading text-2xl text-foreground">
          {/* Happy Public School<span className="text-secondary">.</span> */}
          <img className="h-12" src="logo.svg"/>
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
          <Button
            asChild
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 text-sm font-bold"
          >
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
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
