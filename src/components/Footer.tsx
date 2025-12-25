const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-heading text-foreground">ANAND RAJ</span>
            <span className="text-foreground/30">—</span>
            <span className="text-[10px] uppercase tracking-widest text-foreground/40">Full-Stack & Web3</span>
          </div>
          
          <p className="text-foreground/30 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} · Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
