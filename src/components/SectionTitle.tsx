import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className="mb-16 md:mb-24">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-lg text-muted-foreground font-body max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-6 line-gold w-24 origin-left"
    />
  </div>
);

export default SectionTitle;
