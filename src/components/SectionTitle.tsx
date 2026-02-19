import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

const SectionTitle = ({ title, subtitle, className, center = false }: SectionTitleProps) => (
  <div className={cn("mb-16 md:mb-24 relative z-10", center ? "text-center flex flex-col items-center" : "", className)}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1]">
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0, originX: center ? 0.5 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
        className={cn("h-[2px] w-24 bg-gradient-gold mt-6 mb-6", center ? "mx-auto" : "")}
      />
    </motion.div>

    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-xl text-muted-foreground font-body font-light max-w-3xl leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionTitle;
