import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "@/data/portfolio";

const ExperienceCard = ({ exp, index }: { exp: typeof experience[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-6 top-12 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

      <div className={`flex flex-col md:flex-row items-start gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        {/* Timeline Dot */}
        <div className="absolute left-6 top-6 w-3 h-3 rounded-full bg-primary shadow-glow md:left-1/2 md:-translate-x-1/2 z-10">
          {exp.current && (
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
          )}
        </div>

        {/* Content */}
        <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
          <div className="p-6 rounded-2xl glass hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 hidden sm:block">
                <Briefcase className="text-primary" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {exp.current && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded bg-primary/20 text-primary">
                      Current
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    {exp.duration}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-primary text-sm mb-3">{exp.company}</p>
                <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <span key={highlight} className="tech-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer for alternating layout */}
        <div className="hidden md:block flex-1" />
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-glow blur-3xl opacity-20" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Experience</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Timeline */}
          <div className="relative space-y-12">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
