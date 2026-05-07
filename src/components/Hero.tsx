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
      {/* Dot Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#FAFAFA 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-4 px-3 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary font-mono text-sm"
        >
          Sara Classes Bhiwandi
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Shape Your{" "}
          <div className="inline-block relative h-[1.2em] min-w-[200px] text-primary align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
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
          className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 font-serif"
        >
          Foundational Excellence from Jr.KG to Graduation. Empowering students with quality education and competitive coaching in the heart of Bhiwandi.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Magnetic>
            <button className="px-8 py-3 bg-primary text-background font-bold rounded-lg hover:brightness-110 transition-all">
              Explore Courses
            </button>
          </Magnetic>
          <Magnetic>
            <button className="px-8 py-3 border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors">
              Contact Us
            </button>
          </Magnetic>
        </motion.div>
      </div>
      
      {/* Ambient Glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
    </section>
  );
};

