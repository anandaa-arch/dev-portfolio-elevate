import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import heroBg from "@/assets/hero-bg.jpg";

const socialLinks = [
  { icon: <Github size={16} />, href: "https://github.com/anandaa-arch", label: "GH" },
  { icon: <Linkedin size={16} />, href: "https://linkedin.com/in/anandraj", label: "LI" },
  { icon: <FaXTwitter size={14} />, href: "#", label: "X" },
  { icon: <Mail size={16} />, href: "mailto:workmahto24@gmail.com", label: "EM" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="section-full flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-overlay-left" />
      <div className="absolute inset-0 bg-background/60" />

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-border/10" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/10" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-border/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Section Number */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-editorial-muted">01</span>
            <div className="h-px flex-1 max-w-[60px] bg-border/30" />
            <span className="text-editorial-muted">Home</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl font-body font-light text-foreground/60 uppercase tracking-widest mb-4">
              ANAND
            </h2>
            <h1 className="editorial-title mb-6">
              RAJ
            </h1>
            <div className="h-px w-24 bg-primary mb-8" />
            <p className="text-lg md:text-xl font-body font-light text-foreground/70 tracking-wide mb-12">
              Full-Stack & Web3 Developer
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a href="#resume" className="btn-primary">
              Resume
            </a>
            <a href="#portfolio" className="btn-secondary">
              Portfolio
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="social-icon"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-editorial-muted">Scroll</span>
        <ArrowDown size={14} className="text-foreground/30 animate-bounce" />
      </motion.div>

      {/* Corner decoration */}
      <div className="corner-icon" />
    </section>
  );
};

export default Hero;