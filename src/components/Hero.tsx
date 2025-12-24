import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Send } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const socialIcons = [
  { icon: <span className="text-xs font-bold">Bē</span>, href: "#" },
  { icon: <span className="text-xs font-bold">f</span>, href: "#" },
  { icon: <Linkedin size={14} />, href: "https://linkedin.com/in/anandraj" },
  { icon: <Instagram size={14} />, href: "#" },
  { icon: <span className="text-xs font-bold">P</span>, href: "#" },
  { icon: <Twitter size={14} />, href: "#" },
  { icon: <Send size={14} />, href: "#" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="section-full flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-overlay-left" />
      <div className="absolute inset-0 bg-background/40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-body font-light text-foreground mb-2">
              ANAND
            </h2>
            <h1 className="text-7xl md:text-9xl font-heading text-foreground leading-none mb-4">
              RAJ
            </h1>
            <p className="text-xl md:text-2xl font-body font-light text-foreground/80 tracking-wide mb-8">
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
            className="flex items-center gap-3"
          >
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="social-icon"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Corner Expand Icon */}
      <div className="corner-icon" />
    </section>
  );
};

export default Hero;
