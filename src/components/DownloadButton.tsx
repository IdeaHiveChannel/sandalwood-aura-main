import { Download } from "lucide-react";
import { motion } from "framer-motion";

const DownloadButton = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
      onClick={handleDownload}
      className="fixed bottom-8 right-8 z-[100] group flex items-center gap-3 bg-black/80 backdrop-blur-xl border border-gold/30 text-gold font-body text-xs tracking-widest uppercase px-6 py-4 rounded-full shadow-2xl transition-all duration-500 print:hidden hover:bg-gold/10 hover:border-gold/60 hover:shadow-[0_0_30px_-5px_hsl(42_40%_65%_/_0.3)] hover:scale-105 active:scale-95"
      aria-label="Download Strategy"
    >
      <span className="relative">
        Export Strategy
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
      </span>
      <Download className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
    </motion.button>
  );
};

export default DownloadButton;
