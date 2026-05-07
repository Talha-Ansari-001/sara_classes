import { motion } from "framer-motion";
import { BookOpen, GraduationCap, School, Users } from "lucide-react";
import { cn } from "../utils/cn";

const items = [
  {
    title: "Foundational Excellence",
    description: "Comprehensive coaching from Jr.KG to 10th (All subjects). Building strong roots for every student.",
    header: "K-10 Education",
    icon: <School className="w-6 h-6" />,
    className: "md:col-span-2",
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
    className: "md:col-span-2",
  },
];

export const BentoAcademic = () => {
  return (
    <section id="courses" className="py-24 px-4 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Academic Excellence</h2>
          <p className="text-foreground/60 max-w-xl mx-auto font-serif italic">
            "Education is the most powerful weapon which you can use to change the world."
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[20rem]">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "group relative rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between hover:bg-white/[0.08] transition-all duration-300",
                item.className
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="font-mono text-xs text-primary mb-2 uppercase tracking-widest">{item.header}</div>
                <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
              </div>
              
              <div className="mt-4 flex items-center text-sm font-mono text-primary/80 group-hover:text-primary transition-colors">
                Learn more 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
