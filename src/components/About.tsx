import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Code, Globe, Shield } from "lucide-react";
import { about, education } from "@/data/portfolio";

const highlights = [
  { icon: <Code size={24} />, label: "Full-Stack" },
  { icon: <Globe size={24} />, label: "Web3" },
  { icon: <Sparkles size={24} />, label: "AI/ML" },
  { icon: <Shield size={24} />, label: "Security" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 cyber-line" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-glow blur-3xl opacity-30" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-xl text-foreground font-medium"
              >
                {about.intro}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground leading-relaxed"
              >
                {about.description}
              </motion.p>

              {/* Highlights */}
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="space-y-3"
              >
                {about.highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>

              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-xl glass hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Sparkles className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">{education.degree}</h3>
                    <p className="text-muted-foreground">{education.university}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <span className="text-primary">{education.duration}</span>
                      <span className="text-muted-foreground">SGPA: {education.sgpa}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10 p-8 rounded-2xl glass-strong">
                {/* Domain Icons Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex flex-col items-center p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="mt-3 font-medium text-foreground">{item.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-gradient">5+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-gradient">2+</div>
                    <div className="text-sm text-muted-foreground">Hackathons</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-gradient">8.86</div>
                    <div className="text-sm text-muted-foreground">SGPA</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-xl rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-secondary/20 rounded-lg -rotate-12" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
