import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { wrap } from "framer-motion";
import { useRef } from "react";

function ParallaxText({ children, baseVelocity = 100 }: { children: React.ReactNode, baseVelocity: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden tracking-tighter leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div className="font-serif font-black uppercase text-5xl md:text-7xl flex flex-nowrap gap-12 whitespace-nowrap" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export const SuccessMarquee = () => {
  const items = [
    "100% Result in 10th Board",
    "Special Batch for NEET 2026",
    "Bhiwandi's Top Rated Coaching",
    "Admissions Open for 2026-27"
  ];

  return (
    <section className="py-24 bg-primary/[0.02] overflow-hidden border-y border-primary/10 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      <ParallaxText baseVelocity={-3}>
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            {item} <span className="mx-12 text-primary opacity-50">✦</span>
          </span>
        ))}
      </ParallaxText>
      <div className="h-10" />
      <ParallaxText baseVelocity={3}>
        {items.map((item, i) => (
          <span key={i} className="flex items-center text-primary/40 italic">
            {item} <span className="mx-12 text-primary/20">✦</span>
          </span>
        ))}
      </ParallaxText>
    </section>
  );
};
