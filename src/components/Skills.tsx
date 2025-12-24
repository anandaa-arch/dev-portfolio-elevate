import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/portfolio";

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.4 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
          className="skill-bar-fill"
        />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({
  title,
  skillList,
  baseDelay,
}: {
  title: string;
  skillList: typeof skills.frontend;
  baseDelay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: baseDelay, duration: 0.5 }}
      className="p-6 rounded-2xl glass hover-lift"
    >
      <h3 className="text-lg font-heading font-semibold text-gradient mb-6">{title}</h3>
      <div className="space-y-4">
        {skillList.map((skill, index) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={baseDelay + 0.1 + index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
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
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Skills & Expertise</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCategory title="Frontend" skillList={skills.frontend} baseDelay={0} />
            <SkillCategory title="Backend" skillList={skills.backend} baseDelay={0.1} />
            <SkillCategory title="Web3 / Blockchain" skillList={skills.web3} baseDelay={0.2} />
            <SkillCategory title="DevOps & Tools" skillList={skills.devops} baseDelay={0.3} />
          </div>

          {/* Additional Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12"
          >
            <h4 className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Also familiar with</h4>
            <div className="flex flex-wrap gap-3">
              {[
                "C", "C++", "Java", "JavaScript", "REST APIs", "GraphQL",
                "Data Pipelines", "Pandas", "NumPy", "Git", "Agile", "Problem Solving"
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="tech-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
