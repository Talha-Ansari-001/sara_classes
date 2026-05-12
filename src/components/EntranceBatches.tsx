import { motion, useMotionValue, useTransform } from "framer-motion";
import { Sparkles, Target, Zap } from "lucide-react";
import type { MouseEvent } from "react";
import { cn } from "../utils/cn";


const batches = [
  {
    name: "MHT CET",
    focus: "State Level Entrance",
    details: "Specialized coaching for Engineering and Pharmacy entrance in Maharashtra.",
    icon: <Zap className="w-8 h-8" />,
    glowColor: "rgba(79, 70, 229, 0.4)", // Indigo
    borderColor: "border-indigo-500/20",
    tagColor: "text-indigo-400 bg-indigo-500/10",
  },
  {
    name: "NEET",
    focus: "Medical Excellence",
    details: "Intensive biology and chemistry focus for aspiring medical professionals.",
    icon: <Target className="w-8 h-8" />,
    glowColor: "rgba(16, 185, 129, 0.4)", // Emerald
    borderColor: "border-emerald-500/20",
    tagColor: "text-emerald-400 bg-emerald-500/10",
  },
  {
    name: "IIT-JEE",
    focus: "Premier Engineering",
    details: "Advanced physics and mathematics batches for top-tier engineering institutes.",
    icon: <Sparkles className="w-8 h-8" />,
    glowColor: "rgba(14, 165, 233, 0.4)", // Sky Blue
    borderColor: "border-sky-500/20",
    tagColor: "text-sky-400 bg-sky-500/10",
  },
];

const EvervaultCard = ({ batch, index }: { batch: typeof batches[0], index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const maskImage = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, ${batch.glowColor}, transparent)`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative rounded-2xl border bg-white/5 p-8 overflow-hidden transition-all duration-300",
        batch.borderColor
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: maskImage,
        }}
      />
      
      <div className="relative z-10">
        <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">{batch.icon}</div>
        <h3 className="text-3xl font-serif font-bold mb-2">{batch.name}</h3>
        <div className={cn("inline-block px-2 py-1 rounded-md font-mono text-[10px] uppercase tracking-wider mb-4", batch.tagColor)}>
          {batch.focus}
        </div>
        <p className="text-foreground/60 text-sm leading-relaxed mb-8">{batch.details}</p>
        
        <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6" />
        
        <div className="flex justify-between items-center">
          <span className="text-xs font-mono text-foreground/40 italic">New Batches Starting</span>
          <button className="text-primary text-sm font-bold hover:underline">View Schedule</button>
        </div>
      </div>
    </motion.div>
  );
};

export const EntranceBatches = () => {
  return (
    <section id="entrance" className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block mb-4 px-4 py-1 border border-primary/20 rounded-full bg-primary/5 text-primary font-mono text-[10px] tracking-[0.2em] uppercase"
            >
              Elite Coaching
            </motion.div>
            <h2 className="text-5xl font-serif font-black mb-6 tracking-tighter">Entrance Excellence</h2>
            <p className="text-foreground/40 font-serif italic text-lg leading-relaxed">
              Our flagship programs designed for high-stakes examinations. Intensive training with a focus on problem-solving speed and conceptual depth.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-primary/10 border border-primary/20 px-8 py-3 rounded-2xl text-primary font-mono text-[10px] font-bold tracking-[0.1em] shadow-lg shadow-primary/5"
          >
            ADMISSIONS OPEN 2026-27
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {batches.map((batch, i) => (
            <EvervaultCard key={i} batch={batch} index={i} />
          ))}
        </div>
      </div>
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" 
        />
      </div>
    </section>
  );
};
