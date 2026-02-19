import { Download } from "lucide-react";

const DownloadButton = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-semibold px-5 py-3 rounded-lg shadow-lg hover:bg-gold-light transition-colors print:hidden"
      aria-label="Download as PDF"
    >
      <Download className="w-4 h-4" />
      Download PDF
    </button>
  );
};

export default DownloadButton;
