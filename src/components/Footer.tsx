import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} Anand Raj. All rights reserved.
          </p>
          <p className="text-sm text-foreground/50 flex items-center gap-1">
            Built with <Heart size={12} className="text-primary" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
