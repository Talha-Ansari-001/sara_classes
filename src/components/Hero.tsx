import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Magnetic } from "./Magnetic";

const words = ["Future", "Career", "Success"];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
      
      {/* Morphing Gold Gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 100, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
          x: [0, -100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" 
      />

      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-sm text-primary font-mono text-[10px] tracking-[0.2em] uppercase"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Sara Classes Bhiwandi
        </motion.div>
        
        <h1 className="text-6xl md:text-8xl font-serif font-black mb-8 leading-[0.9] tracking-tighter">
          Shape Your{" "}
          <div className="inline-block relative h-[1.1em] min-w-[240px] text-primary align-bottom overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 right-0 text-center"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
          <br />
          with Sara Classes.
        </h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/50 max-w-2xl mx-auto mb-12 font-serif italic leading-relaxed"
        >
          Elevating education from Jr.KG to Graduation. Experience a legacy of academic excellence and professional coaching in the heart of Bhiwandi.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Magnetic>
            <button className="px-10 py-4 bg-primary text-white font-mono text-[10px] font-bold rounded-xl hover:shadow-[0_0_40px_rgba(161,98,7,0.3)] transition-all border border-primary/50 uppercase tracking-[0.2em]">
              Explore Courses
            </button>
          </Magnetic>
          <Magnetic>
            <button className="px-10 py-4 border border-primary/20 bg-white/5 backdrop-blur-sm rounded-xl font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
};

