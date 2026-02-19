
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/80 backdrop-blur-lg py-20 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-display text-4xl mb-6 text-gradient-gold italic tracking-tight">Sandalwood Aura</h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-12 leading-relaxed font-light">
          Confidential Marketing Strategy & Investment Blueprint.
          <br />
          For internal stakeholder review only.
        </p>
        <div className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
          © {currentYear} Sandalwood Aura. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
