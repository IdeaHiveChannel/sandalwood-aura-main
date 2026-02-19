import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBottle from "@/assets/hero-bottle.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,hsl(var(--background))_120%)] z-20" />
        <div className="absolute inset-0 z-20 opacity-20 bg-noise mix-blend-overlay" />
        <img
          src={heroBottle}
          alt="Sandalwood Aura"
          className="h-full w-full object-cover object-center scale-105 blur-[2px]"
        />
      </motion.div>

      {/* Cinematic Content */}
      <div className="relative z-30 container mx-auto px-6 h-full flex flex-col items-center justify-center">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, letterSpacing: "1em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="text-gold/90 font-body text-xs md:text-sm uppercase tracking-[0.5em] border-b border-gold/20 pb-4">
            Confidential Strategy
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-center mb-6"
        >
          <span className="block font-display text-5xl md:text-8xl lg:text-9xl text-foreground font-medium tracking-tight leading-none">
            Sandalwood
          </span>
          <span className="block font-display text-5xl md:text-8xl lg:text-9xl text-gradient-gold italic font-normal tracking-tight leading-none mt-2 md:-mt-4">
            Aura
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-body text-muted-foreground max-w-xl mx-auto text-sm md:text-lg text-center leading-relaxed tracking-wide mt-8 mix-blend-plus-lighter"
        >
          The definitive investment blueprint for establishing a premium niche fragrance authority in the UAE.
        </motion.p>

        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 100 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-gold/50 to-gold"
        />
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-12 left-12 z-40 hidden lg:block">
        <div className="w-12 h-12 border-t border-l border-white/10" />
      </div>
      <div className="absolute top-12 right-12 z-40 hidden lg:block">
        <div className="w-12 h-12 border-t border-r border-white/10" />
      </div>
      <div className="absolute bottom-12 left-12 z-40 hidden lg:block">
        <div className="w-12 h-12 border-b border-l border-white/10" />
      </div>
      <div className="absolute bottom-12 right-12 z-40 hidden lg:block">
        <div className="w-12 h-12 border-b border-r border-white/10" />
      </div>
    </section>
  );
};

export default HeroSection;
