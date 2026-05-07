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

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
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

  /**
   * This is a magic number to determine how much to wrap the text around.
   * By setting it to -20% and -45% it helps to keep the text in view at all times.
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll based on scroll velocity
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be enough to fill the screen
   * and allow for a seamless loop.
   */
  return (
    <div className="overflow-hidden tracking-[-2px] leading-[0.8] m-0 white-space-nowrap flex flex-nowrap">
      <motion.div className="font-serif font-black uppercase text-6xl flex flex-nowrap gap-12 whitespace-nowrap" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
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

  const content = items.join(" • ");

  return (
    <section className="py-20 bg-primary/5 overflow-hidden border-y border-white/5">
      <ParallaxText baseVelocity={-5}>{content}</ParallaxText>
      <div className="h-4" />
      <ParallaxText baseVelocity={5}>{content}</ParallaxText>
    </section>
  );
};
