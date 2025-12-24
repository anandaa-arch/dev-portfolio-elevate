import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs,
  SiPython, SiMongodb, SiDocker, SiSolidity, SiGithub
} from "react-icons/si";
import { GraduationCap, Briefcase, Code, Globe, Shield, Database } from "lucide-react";

const softwareSkills = [
  { name: "React.js", level: 90, icon: <SiReact /> },
  { name: "Next.js", level: 85, icon: <SiNextdotjs /> },
  { name: "TypeScript", level: 80, icon: <SiTypescript /> },
  { name: "Node.js", level: 85, icon: <SiNodedotjs /> },
  { name: "Solidity", level: 75, icon: <SiSolidity /> },
];

const languages = [
  { name: "JavaScript", level: 95 },
  { name: "Python", level: 80 },
  { name: "C/C++", level: 75 },
];

const personalSkills = ["Problem-Solving", "Team Work", "Critical Thinking"];

const experience = [
  {
    company: "SWIFTY9",
    role: "Web Developer Intern",
    period: "Oct 2025 – Present",
    icon: <Code size={16} />,
    color: "bg-blue-500",
  },
  {
    company: "GIRLSCRIPT SUMMER OF CODE",
    role: "Open Source Contributor",
    period: "July 2025",
    icon: <Globe size={16} />,
    color: "bg-green-500",
  },
  {
    company: "TCS FORAGE",
    role: "Cybersecurity Virtual Intern",
    period: "November 2024",
    icon: <Shield size={16} />,
    color: "bg-purple-500",
  },
];

const whatCanIDo = [
  "Full-Stack Development",
  "Web3 / Smart Contracts",
  "AI Integration",
  "API Development",
];

const devSkills = [
  "React · Next.js · Node.js",
  "Solidity · Web3.js · Avalanche",
  "MongoDB · SQL · REST APIs",
  "Docker · Git · CI/CD",
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="progress-label">
        <span className="text-foreground/80 text-xs">{name}</span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ delay, duration: 0.8, ease: "easeOut" }}
          className="skill-bar-fill"
        />
      </div>
    </div>
  );
};

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="resume"
      ref={ref}
      className="section-full py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Software Skills */}
            <div>
              <h3 className="text-xl font-heading text-foreground mb-6 section-title-line">
                SOFTWARE SKILLS
              </h3>
              <div className="space-y-1">
                {softwareSkills.map((skill, index) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 0.1} />
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-heading text-foreground mb-6 section-title-line">
                LANGUAGES
              </h3>
              <div className="space-y-1">
                {languages.map((lang, index) => (
                  <SkillBar key={lang.name} name={lang.name} level={lang.level} delay={0.5 + index * 0.1} />
                ))}
              </div>
            </div>

            {/* Personal Skills */}
            <div>
              <h3 className="text-xl font-heading text-foreground mb-4 section-title-line">
                PERSONAL SKILLS
              </h3>
              <p className="text-foreground/60 text-sm">
                {personalSkills.join(" · ")}
              </p>
            </div>
          </motion.div>

          {/* Middle Column - Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-heading text-foreground mb-6 section-title-line">
                EXPERIENCE
              </h3>
              <div className="space-y-6 relative">
                {experience.map((exp, index) => (
                  <div key={index} className="flex gap-4 relative">
                    {/* Timeline line */}
                    {index < experience.length - 1 && (
                      <div className="absolute left-5 top-10 w-px h-full bg-border" />
                    )}
                    
                    {/* Icon */}
                    <div className={`timeline-dot shrink-0 ${exp.color} bg-opacity-20`}>
                      <span className="text-primary">{exp.icon}</span>
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        {exp.company}
                      </h4>
                      <p className="text-xs text-primary mb-1">{exp.role}</p>
                      <p className="text-xs text-foreground/50">{exp.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-heading text-foreground mb-4 section-title-line">
                EDUCATION
              </h3>
              <div className="flex gap-4">
                <div className="timeline-dot shrink-0">
                  <GraduationCap size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    B.E. in AI & Data Science
                  </h4>
                  <p className="text-xs text-primary">MMCOE, Pune</p>
                  <p className="text-xs text-foreground/50">2023-2027 · SGPA: 8.86</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - What Can I Do */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* What Can I Do */}
            <div>
              <h3 className="text-xl font-heading text-foreground mb-4 section-title-line">
                WHAT CAN I DO ?
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {whatCanIDo.join(" · ")}
              </p>
            </div>

            {/* Dev Skills */}
            <div>
              <h3 className="text-xl font-heading text-foreground mb-4 section-title-line">
                DEV SKILLS
              </h3>
              <div className="space-y-2">
                {devSkills.map((skill, index) => (
                  <p key={index} className="text-foreground/60 text-xs">
                    {skill}
                  </p>
                ))}
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div>
              <h3 className="text-xl font-heading text-foreground mb-4 section-title-line">
                HOBBIES & INTERESTS
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Code size={20} />, label: "Coding" },
                  { icon: <Database size={20} />, label: "Hackathons" },
                  { icon: <Globe size={20} />, label: "Open Source" },
                  { icon: <Shield size={20} />, label: "Security" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/50">
                    <span className="text-foreground/60">{item.icon}</span>
                    <span className="text-xs text-foreground/60">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Corner Expand Icon */}
      <div className="corner-icon" />
    </section>
  );
};

export default Resume;
