import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { Quote } from "lucide-react";

const faculty = [
  {
    name: "Miss Sara",
    designation: "Founder & Academic Head",
    quote: "Education is not the filling of a pail, but the lighting of a fire.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Prof. Rajesh Mehta",
    designation: "Head of Science (NEET/JEE)",
    quote: "Conceptual clarity is the foundation of competitive success.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Ananya Shah",
    designation: "Senior Faculty - Mathematics",
    quote: "Numbers tell a story; we teach students how to read it.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Prof. Vikram Singh",
    designation: "Head of Commerce & BMS",
    quote: "Building professional excellence through practical mentorship.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Ms. Neha Kulkarni",
    designation: "Coordinator - Foundational Section",
    quote: "Strong roots lead to magnificent fruits in the future.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
];

const FacultyCard = ({ member, index }: { member: typeof faculty[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative min-w-[300px] md:min-w-[400px] group snap-center"
    >
      <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-700 group-hover:border-primary/40 group-hover:shadow-[0_0_40px_rgba(161,98,7,0.15)]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
        </div>

        <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
          <div className="relative">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute -top-6 left-0 h-px bg-gradient-to-r from-primary to-transparent" 
            />

            <div className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase mb-2">
              {member.designation}
            </div>
            <h3 className="text-4xl font-serif font-black text-white mb-6 tracking-tighter leading-none">
              {member.name}
            </h3>
            
            <div className="relative pt-6 border-t border-white/10">
              <Quote className="absolute -top-3 -left-2 w-8 h-8 text-primary/20" />
              <p className="text-lg font-serif italic text-foreground/60 leading-relaxed group-hover:text-foreground/90 transition-colors duration-500">
                "{member.quote}"
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export const FacultyGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const totalWidth = containerRef.current?.scrollWidth || 0;
    const viewportWidth = containerRef.current?.offsetWidth || 0;

    controls.start({
      x: [0, -(totalWidth - viewportWidth)],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 30,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block mb-4 px-4 py-1 border border-primary/20 rounded-full bg-primary/5 text-primary font-mono text-[10px] tracking-[0.3em] uppercase"
            >
              Our Leadership
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter mb-6">Expert Mentorship</h2>
            <p className="text-foreground/40 font-serif italic text-lg leading-relaxed">
              Meet the visionaries and educators who shape the future of our students through personalized guidance and academic rigor.
            </p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden w-full">
        <motion.div 
          ref={containerRef}
          animate={controls}
          className="flex gap-8 px-[5vw]"
        >
          {faculty.map((member, i) => (
            <FacultyCard key={i} member={member} index={i} />
          ))}
          {faculty.map((member, i) => (
            <FacultyCard key={i + faculty.length} member={member} index={i} />
          ))}
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};
