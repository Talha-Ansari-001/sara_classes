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
      ease: "easeOut"
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
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-serif font-bold text-background text-xl">S</div>
            <span className="font-serif font-bold text-2xl tracking-tight">Sara Classes</span>
          </div>
          <p className="text-foreground/40 max-w-sm mb-8 leading-relaxed">
            Empowering students in Bhiwandi through dedicated coaching and mentorship. From foundational school years to professional degree programs.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background transition-all">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background transition-all">
              <Share2 className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background transition-all">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif font-bold text-lg mb-6 text-primary">Quick Links</h4>
          <motion.ul 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 md:space-y-3 text-sm text-foreground/60"
          >
            {quickLinks.map((link) => (
              <motion.li key={link.name} variants={itemVariants}>
                <a 
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="hover:text-primary transition-colors duration-300 block py-2 md:py-1"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div>
          <h4 className="font-serif font-bold text-lg mb-6 text-primary">Office Hours</h4>
          <ul className="space-y-4 text-sm text-foreground/60">
            <li className="flex justify-between"><span>Mon - Sat</span> <span>8:00 AM - 8:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>Special Batches</span></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-foreground/20 font-mono uppercase tracking-widest">
          &copy; 2026 Sara Classes Bhiwandi. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest text-foreground/20">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
