import { Globe, Share2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Academic Programs", href: "#courses" },
  { name: "Entrance Batches", href: "#entrance" },
  { name: "Teacher Training", href: "#courses" },
  { name: "Contact Us", href: "#contact" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  },
};

export const Footer = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1C1917] border-t border-primary/10 py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 relative z-10">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-serif font-black text-white text-2xl shadow-lg shadow-primary/20">S</div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-2xl tracking-tight leading-none">Sara Classes</span>
              <span className="font-mono text-[9px] text-primary tracking-[0.2em] uppercase">Premium Education</span>
            </div>
          </div>
          <p className="text-foreground/40 max-w-sm mb-10 font-serif italic text-lg leading-relaxed">
            Empowering students in Bhiwandi through dedicated coaching and mentorship. From foundational school years to professional degree programs.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 hover:bg-primary hover:text-white transition-all duration-500 hover:shadow-xl hover:shadow-primary/20">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 hover:bg-primary hover:text-white transition-all duration-500 hover:shadow-xl hover:shadow-primary/20">
              <Share2 className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 hover:bg-primary hover:text-white transition-all duration-500 hover:shadow-xl hover:shadow-primary/20">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase mb-8 text-primary font-bold">Quick Navigation</h4>
          <motion.ul 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 text-sm font-serif italic"
          >
            {quickLinks.map((link) => (
              <motion.li key={link.name} variants={itemVariants}>
                <a 
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-foreground/40 hover:text-primary transition-all duration-500 block py-1 group flex items-center"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-primary mr-0 group-hover:mr-3 transition-all duration-500" />
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div>
          <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase mb-8 text-primary font-bold">Office Hours</h4>
          <ul className="space-y-6 text-sm font-serif italic text-foreground/40">
            <li className="flex justify-between items-center border-b border-white/5 pb-2">
              <span>Mon - Sat</span> 
              <span className="text-foreground/60 font-mono text-[10px]">10:00 AM - 08:00 PM</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Sunday</span> 
              <span className="text-primary font-mono text-[10px]">Special Batches</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-mono text-foreground/20 uppercase tracking-[0.3em]">
          &copy; 2026 Sara Classes Bhiwandi. Heritage Excellence.
        </p>
        <div className="flex gap-10 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/20">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};
