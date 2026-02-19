
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-12 border-t border-border/10">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-display text-2xl mb-4 text-gradient-gold">Sandalwood Aura</h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
          Confidential Marketing Strategy & Investment Blueprint.
          <br />
          For internal stakeholder review only.
        </p>
        <div className="text-xs text-muted-foreground/60 uppercase tracking-widest">
          © {currentYear} Sandalwood Aura. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
