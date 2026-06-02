import { motion, useMotionValue, useTransform } from "framer-motion";
import { BookOpen, GraduationCap, School, Users, Star } from "lucide-react";
import { cn } from "../utils/cn";
import { Magnetic } from "./Magnetic";
import type { MouseEvent } from "react";

interface BentoItem {
  title?: string;
  description?: string;
  header?: string;
  icon?: React.ReactNode;
  className: string;
  type?: string;
  name?: string;
  achievement?: string;
  testimonial?: string;
  image?: string;
}

const items: BentoItem[] = [
  {
    title: "Foundational Excellence",
    description: "Comprehensive coaching from Jr.KG to 10th (All subjects). Building strong roots for every student.",
    header: "K-10 Education",
    icon: <School className="w-6 h-6" />,
    className: "md:col-span-2",
  },
  {
    type: "success",
    name: "Aryan Sheikh",
    achievement: "98.4% in SSC 2025",
    testimonial: "The personalized mentorship at Apex Academy completely changed my approach to learning.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
    className: "md:col-span-1",
  },
  {
    title: "Pre-University",
    description: "Junior College (11th-12th) Science, Arts, and Commerce streams with expert faculty.",
    header: "Junior College",
    icon: <BookOpen className="w-6 h-6" />,
    className: "md:col-span-1",
  },
  {
    title: "Career Launch",
    description: "B.com, BMS, BA, and Bsc. Higher education support to kickstart your professional journey.",
    header: "Graduation",
    icon: <GraduationCap className="w-6 h-6" />,
    className: "md:col-span-1",
  },
  {
    title: "Teacher Training",
    description: "Special arrangements for B.ed, D.ed, and Bsc IT. Shaping the educators of tomorrow.",
    header: "Specialty Courses",
    icon: <Users className="w-6 h-6" />,
    className: "md:col-span-1",
  },
];

const SuccessCard = ({ item, index }: { item: BentoItem, index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const maskImage = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(250px circle at ${x}px ${y}px, rgba(161, 98, 7, 0.4), transparent)`
  );

  return (
    <Magnetic>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        onMouseMove={handleMouseMove}
        className={cn(
          "group relative rounded-3xl border border-primary/20 bg-[#1C1917] overflow-hidden h-full transition-all duration-500 hover:border-primary/40 shadow-xl shadow-primary/5",
          item.className
        )}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 z-10"
          style={{ background: maskImage }}
        />
        
        {/* Student Photo */}
        <div className="absolute inset-0 z-0">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/40 to-transparent" />
        </div>

        <div className="relative z-20 p-10 h-full flex flex-col justify-end">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4 border border-primary/30">
            <Star className="w-5 h-5 fill-primary" />
          </div>
          <div className="font-mono text-[8px] text-primary tracking-[0.3em] uppercase mb-1">Student Success</div>
          <h3 className="text-2xl font-serif font-black text-white mb-2">{item.name}</h3>
          <div className="inline-block bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-lg font-mono text-[10px] mb-4">
            {item.achievement}
          </div>
          <p className="text-sm font-serif italic text-foreground/60 leading-relaxed">
            "{item.testimonial}"
          </p>
        </div>
      </motion.div>
    </Magnetic>
  );
};

export const BentoAcademic = () => {
  return (
    <section id="courses" className="py-32 px-4 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4 px-4 py-1 border border-primary/20 rounded-full bg-primary/5 text-primary font-mono text-[10px] tracking-[0.2em] uppercase"
          >
            Academic Programs
          </motion.div>
          <h2 className="text-5xl font-serif font-black mb-6 tracking-tighter">Academic Excellence</h2>
          <p className="text-foreground/40 max-w-xl mx-auto font-serif italic text-lg">
            "Education is the most powerful weapon which you can use to change the world."
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 auto-rows-[22rem]">
          {items.map((item, i) => {
            if (item.type === "success") {
              return <SuccessCard key={i} item={item} index={i} />;
            }

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-10 flex flex-col justify-between hover:bg-white/[0.08] transition-all duration-500 hover:border-primary/30",
                  item.className
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-lg shadow-primary/5">
                    {item.icon}
                  </div>
                  <div className="font-mono text-[10px] text-primary/60 mb-3 uppercase tracking-[0.2em] group-hover:text-primary transition-colors">{item.header}</div>
                  <h3 className="text-3xl font-serif font-bold mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-foreground/40 text-sm leading-relaxed font-serif italic group-hover:text-foreground/60 transition-colors">{item.description}</p>
                </div>
                
                <div className="relative z-10 mt-6 flex items-center text-[10px] font-mono font-bold text-primary/60 tracking-[0.2em] uppercase group-hover:text-primary transition-colors">
                  Explore Curriculum 
                  <span className="ml-3 transform group-hover:translate-x-2 transition-transform duration-500">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
