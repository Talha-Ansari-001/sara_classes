import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const content = [
  {
    title: "Personalized Mentorship",
    description: "Every student's journey is unique. Miss Sara provides direct oversight and personalized guidance to ensure no child is left behind.",
  },
  {
    title: "Rigorous Foundation",
    description: "We believe in building unbreakable foundations from Jr.KG. Concept clarity is our priority over rote learning.",
  },
  {
    title: "Future-Ready Skills",
    description: "Beyond textbooks, we prepare students for competitive landscapes with specialized entrance batch training and mental fortitude.",
  },
];

const NumberItem = ({ item, index }: { item: typeof content[0], index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div ref={ref} className="relative group">
      <motion.div 
        style={{ y }}
        className="absolute -left-16 -top-12 text-[12rem] font-serif font-black text-primary/5 group-hover:text-primary/10 transition-all duration-700 pointer-events-none italic"
      >
        {index + 1}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pl-12 relative z-10"
      >
        <h4 className="text-3xl font-serif font-black mb-6 text-foreground tracking-tight group-hover:text-primary transition-colors duration-500">{item.title}</h4>
        <p className="text-xl text-foreground/40 leading-relaxed font-serif italic max-w-2xl group-hover:text-foreground/60 transition-colors duration-500">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
};

export const Philosophy = () => {
  return (
    <section id="philosophy" className="py-32 px-4 bg-background relative overflow-hidden scroll-mt-24">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <div className="inline-block mb-4 px-4 py-1 border border-primary/20 rounded-full bg-primary/5 text-primary font-mono text-[10px] tracking-[0.3em] uppercase">
            Our Core Philosophy
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-black tracking-tighter leading-none">
            Bridging the Gap Between <br /> 
            <span className="text-primary italic">Learning and Excellence.</span>
          </h2>
        </motion.div>

        <div className="space-y-40">
          {content.map((item, i) => (
            <NumberItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>


      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 via-transparent to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-30" />
    </section>
  );
};
