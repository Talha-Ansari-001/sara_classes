import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export const FloatingCall = () => {
  return (
    <motion.a
      href="tel:8600272278"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] md:hidden w-16 h-16 bg-primary text-background rounded-full flex items-center justify-center shadow-2xl shadow-primary/20 border border-white/20"
    >
      <Phone className="w-8 h-8" />
    </motion.a>
  );
};
