import { motion } from "framer-motion";
import heroBottle from "@/assets/hero-bottle.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBottle} alt="Premium sandalwood perfume bottle" className="w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-6">Year 1 — UAE Only</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
        UAE Premium Niche Fragrance
      </motion.h1>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient-gold mb-8">
        360° Marketing Strategy & Investment Blueprint
      </motion.h2>
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="line-gold w-24 mx-auto mb-8 origin-center" />
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
        A structured plan to establish a premium niche sandalwood fragrance brand in the United Arab Emirates — covering marketing visibility, authority building, acquisition structure, and budget requirements.
      </motion.p>
    </div>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent" />
      <span className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">Scroll to explore</span>
    </motion.div>
  </section>
);

export default HeroSection;
