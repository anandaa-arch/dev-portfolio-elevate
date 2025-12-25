import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-full flex items-center relative overflow-hidden editorial-section"
    >
      {/* Background Photo */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
          style={{ backgroundImage: `url(${profilePhoto})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent md:from-background md:via-background/70 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          {/* Section Number */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="editorial-number">03</span>
            <div className="h-px flex-1 max-w-[100px] bg-border/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="editorial-title mb-4">
              ABOUT ME
            </h2>
            <p className="text-primary text-xs uppercase tracking-widest mb-12">workmahto24@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 mb-12"
          >
            <p className="text-foreground/90 leading-relaxed text-lg">
              <span className="text-foreground font-semibold">Full-Stack & Web3 Developer</span> with expertise in building 
              scalable web applications and decentralized systems.
            </p>
            <p className="text-foreground/50 leading-relaxed">
              Currently pursuing B.E. in AI & Data Science at MMCOE Pune, I specialize 
              in React, Next.js, Node.js, and blockchain technologies. I've built 
              financial analytics platforms powered by LLMs, decentralized verification 
              systems on Avalanche, and AI-driven applications—each focused on security, 
              scalability, and exceptional user experience.
            </p>
            <p className="text-foreground/50 leading-relaxed">
              Award-winning solutions at XDE Studios and Avalanche hackathons demonstrate 
              my commitment to building innovative, user-friendly software.
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-8"
          >
            <div className="flex items-center gap-3">
              <MapPin size={14} className="text-primary" />
              <span className="text-foreground/50 text-sm uppercase tracking-wider">Pune, Maharashtra</span>
            </div>
            <a 
              href="#contact" 
              className="flex items-center gap-2 text-primary text-xs uppercase tracking-widest hover:gap-4 transition-all duration-300"
            >
              <span>Get in Touch</span>
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Corner Expand Icon */}
      <div className="corner-icon" />
    </section>
  );
};

export default About;