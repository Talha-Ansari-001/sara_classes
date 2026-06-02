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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between backdrop-blur-md border rounded-2xl px-6 py-3 transition-all duration-500",
          scrolled 
            ? "bg-[#1C1917]/80 border-primary/20 shadow-[0_0_30px_rgba(161,98,7,0.1)]" 
            : "bg-white/5 border-white/10"
        )}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center font-serif font-black text-white shadow-lg shadow-primary/20">S</div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl tracking-tight leading-none">Apex Academy</span>
            <span className="font-mono text-[8px] text-primary tracking-[0.2em]">Premium Education</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 font-mono text-[10px] tracking-[0.15em]">
          {navLinks.map((link) => (
            <Magnetic key={link.name}>
              <a
                href={link.href}
                className={cn(
                  "hover:text-primary transition-colors relative py-1",
                  activeSection === link.href.slice(1) ? "text-primary" : "text-foreground/60"
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
            </Magnetic>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Magnetic>
            <a 
              href="tel:8600272278" 
              className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-mono text-[10px] font-bold hover:shadow-lg hover:shadow-primary/30 transition-all border border-primary/50"
            >
              <Phone className="w-3.5 h-3.5" />
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
