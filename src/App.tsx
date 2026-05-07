import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SuccessMarquee } from "./components/SuccessMarquee";
import { BentoAcademic } from "./components/BentoAcademic";
import { Philosophy } from "./components/Philosophy";
import { EntranceBatches } from "./components/EntranceBatches";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingCall } from "./components/FloatingCall";
import { BackToTop } from "./components/BackToTop";
import { motion, useScroll, useSpring } from "framer-motion";

import { useEffect } from "react";
import Lenis from "lenis";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-background">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        
        <SuccessMarquee />
        
        <div className="relative">
          {/* Subtle separator */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent z-10" />
          
          <BentoAcademic />
          
          <Philosophy />
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <EntranceBatches />
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <ContactSection />
        </div>
      </main>

      <Footer />
      <FloatingCall />
    </div>

  );
}

export default App;

