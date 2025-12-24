import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-full flex items-center relative overflow-hidden"
    >
      {/* Background Photo */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${profilePhoto})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent md:from-background md:via-transparent md:to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-heading text-foreground mb-2 section-title-line">
              ABOUT
            </h2>
            <p className="text-primary text-sm mb-8">workmahto24@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 mb-10"
          >
            <p className="text-foreground/90 leading-relaxed">
              <span className="text-foreground font-medium">Full-Stack & Web3 Developer</span> with expertise in building 
              scalable web applications and decentralized systems.
            </p>
            <p className="text-foreground/70 leading-relaxed text-sm">
              Currently pursuing B.E. in AI & Data Science at MMCOE Pune, I specialize 
              in React, Next.js, Node.js, and blockchain technologies. I've built 
              financial analytics platforms powered by LLMs, decentralized verification 
              systems on Avalanche, and AI-driven applications—each focused on security, 
              scalability, and exceptional user experience.
            </p>
            <p className="text-foreground/70 leading-relaxed text-sm">
              Award-winning solutions at XDE Studios and Avalanche hackathons demonstrate 
              my commitment to building innovative, user-friendly software.
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-6 text-sm text-foreground/60"
          >
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              <span>Pune, Maharashtra</span>
            </div>
            <div className="h-px flex-1 bg-primary/30 max-w-[120px]" />
          </motion.div>
        </div>
      </div>

      {/* Corner Expand Icon */}
      <div className="corner-icon" />
    </section>
  );
};

export default About;
