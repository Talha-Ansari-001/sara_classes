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

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={ref} className="relative group">
      <motion.div 
        style={{ y }}
        className="absolute -left-12 top-0 text-8xl font-serif font-bold text-white/5 group-hover:text-primary/10 transition-colors pointer-events-none"
      >
        0{index + 1}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pl-8"
      >
        <h4 className="text-2xl font-serif font-bold mb-6 text-foreground/90">{item.title}</h4>
        <p className="text-lg text-foreground/50 leading-relaxed font-serif max-w-2xl">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
};

export const Philosophy = () => {
  return (
    <section id="philosophy" className="py-32 px-4 bg-black relative overflow-hidden scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Our Core Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">Bridging the Gap Between <br /> Learning and Excellence</h3>
        </motion.div>

        <div className="space-y-32">
          {content.map((item, i) => (
            <NumberItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>


      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
    </section>
  );
};
