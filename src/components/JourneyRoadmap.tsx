import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School, Trophy } from "lucide-react";
import { cn } from "../utils/cn";

const roadmapItems = [
  {
    title: "Foundational Excellence",
    level: "Jr.KG - 10th Grade",
    description: "Building unbreakable roots with concept-driven learning. We focus on nurturing curiosity and academic discipline from the very beginning.",
    icon: <School className="w-6 h-6" />,
    align: "left",
  },
  {
    title: "Competitive Edge",
    level: "11th - 12th | NEET | JEE",
    description: "Intensive preparation for high-stakes entrance exams. Specialized batches designed to master problem-solving speed and conceptual depth.",
    icon: <Trophy className="w-6 h-6" />,
    align: "right",
  },
  {
    title: "Professional Launch",
    level: "Degree & Specialty Courses",
    description: "Transitioning into professional excellence with B.Com, BMS, and specialty teacher training. Shaping the leaders of tomorrow's workforce.",
    icon: <GraduationCap className="w-6 h-6" />,
    align: "left",
  },
];

const RoadmapNode = ({ item, index }: { item: typeof roadmapItems[0], index: number }) => {
  return (
    <div className={cn(
      "relative flex items-center justify-between mb-32 md:mb-48 last:mb-0",
      item.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
    )}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: item.align === "left" ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "w-full md:w-[42%] bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] relative group hover:border-primary/30 transition-colors duration-500",
          item.align === "right" ? "text-right" : "text-left"
        )}
      >
        <div className={cn(
          "inline-block mb-4 font-mono text-[10px] text-primary tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-primary/10 border border-primary/20",
        )}>
          Phase 0{index + 1}
        </div>
        <h3 className="text-3xl font-serif font-black mb-4 tracking-tight leading-none group-hover:text-primary transition-colors duration-500">{item.title}</h3>
        <p className="font-mono text-[10px] text-foreground/40 mb-6 tracking-widest">{item.level}</p>
        <p className="text-lg text-foreground/50 font-serif italic leading-relaxed group-hover:text-foreground/70 transition-colors duration-500">
          {item.description}
        </p>
      </motion.div>

      {/* Node Icon on Center Line */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-14 h-14 rounded-full bg-[#1C1917] border-2 border-primary flex items-center justify-center text-primary shadow-[0_0_20px_rgba(161,98,7,0.3)] group-hover:scale-110 transition-transform duration-500"
        >
          {item.icon}
        </motion.div>
      </div>

      {/* Spacer for empty side */}
      <div className="hidden md:block w-[42%]" />
    </div>
  );
};

export const JourneyRoadmap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4 px-4 py-1 border border-primary/20 rounded-full bg-primary/5 text-primary font-mono text-[10px] tracking-[0.3em] uppercase"
          >
            Success Path
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter mb-6">The Journey to Excellence</h2>
          <p className="text-foreground/40 max-w-2xl mx-auto font-serif italic text-lg leading-relaxed">
            From first steps in Jr.KG to launching professional careers, we guide our students through every milestone with precision and care.
          </p>
        </div>

        {/* The Golden Thread */}
        <div className="absolute left-1/2 top-48 bottom-0 w-px -translate-x-1/2 hidden md:block">
          {/* Static Background Line */}
          <div className="absolute inset-0 w-full h-full bg-white/10" />
          
          {/* Animated Golden Thread */}
          <motion.div 
            style={{ scaleY }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-primary to-transparent origin-top z-10"
          />
        </div>

        {/* Mobile Line (Left Aligned) */}
        <div className="absolute left-4 top-48 bottom-0 w-px md:hidden">
          <div className="absolute inset-0 w-full h-full bg-white/10" />
          <motion.div 
            style={{ scaleY }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary to-transparent origin-top z-10"
          />
        </div>

        {/* Roadmap Items */}
        <div className="relative z-10 md:px-0 px-8">
          {roadmapItems.map((item, index) => (
            <RoadmapNode 
              key={index} 
              item={item} 
              index={index} 
            />
          ))}
        </div>
      </div>

      {/* Atmospheric Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-30" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-30" />
      </div>
    </section>
  );
};
