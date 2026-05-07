import { motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Magnetic } from "./Magnetic";
import { cn } from "../utils/cn";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "Entrance", href: "#entrance" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ["home", "courses", "entrance", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="max-w-7xl mx-auto flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-serif font-bold text-background">S</div>
          <span className="font-serif font-bold text-xl tracking-tight">Sara Classes</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-foreground/70">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "hover:text-primary transition-colors relative py-1",
                activeSection === link.href.slice(1) && "text-primary"
              )}
            >
              {link.name}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Magnetic>
            <a href="tel:8600272278" className="hidden md:flex items-center gap-2 bg-primary text-background px-4 py-2 rounded-xl font-bold text-sm hover:brightness-110 transition-all">
              <Phone className="w-4 h-4" />
              86002 72278
            </a>
          </Magnetic>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.div>


      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-24 left-6 right-6 bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-xl font-serif",
                activeSection === link.href.slice(1) ? "text-primary" : "text-foreground"
              )}
            >
              {link.name}
            </a>
          ))}
          <a href="tel:8600272278" className="flex items-center justify-center gap-2 bg-primary text-background py-4 rounded-xl font-bold">
            <Phone className="w-5 h-5" />
            Call Miss Sara
          </a>
        </motion.div>
      )}
    </nav>
  );
};
