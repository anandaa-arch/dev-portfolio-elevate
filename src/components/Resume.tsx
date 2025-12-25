import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs,
  SiPython, SiMongodb, SiDocker, SiSolidity, SiGithub
} from "react-icons/si";
import { GraduationCap, Code, Globe, Shield, Database } from "lucide-react";

const softwareSkills = [
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 85 },
  { name: "Solidity", level: 75 },
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
    description: "Building scalable web applications with modern tech stack",
  },
  {
    company: "GIRLSCRIPT SUMMER OF CODE",
    role: "Open Source Contributor",
    period: "July 2025",
    description: "Contributing to open-source projects and community initiatives",
  },
  {
    company: "TCS FORAGE",
    role: "Cybersecurity Virtual Intern",
    period: "November 2024",
    description: "Security analysis and vulnerability assessment training",
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
    <div ref={ref} className="mb-5">
      <div className="progress-label">
        <span className="text-foreground/70">{name}</span>
        <span className="text-foreground/40">{level}%</span>
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
      className="section-full py-24 relative overflow-hidden editorial-section"
    >
      <div className="container mx-auto px-6">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-border/20 pb-8"
        >
          <div className="flex items-end justify-between">
            <h2 className="editorial-title">
              RESUME
            </h2>
            <span className="text-editorial-muted hidden md:block">Skills & Experience</span>
          </div>
        </motion.div>

        {/* Three Column Layout with Editorial Grid */}
        <div className="grid lg:grid-cols-3 gap-0 editorial-grid">
          {/* Left Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="p-8 lg:p-10 editorial-grid-item"
          >
            {/* Software Skills */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-8">
                <span className="editorial-number">01</span>
                <div>
                  <h3 className="editorial-subtitle mb-1">
                    SOFTWARE
                  </h3>
                  <p className="text-editorial-muted">Technical Skills</p>
                </div>
              </div>
              <div>
                {softwareSkills.map((skill, index) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 0.1} />
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-8">
                <span className="editorial-number">02</span>
                <div>
                  <h3 className="editorial-subtitle mb-1">
                    LANGUAGES
                  </h3>
                  <p className="text-editorial-muted">Programming</p>
                </div>
              </div>
              <div>
                {languages.map((lang, index) => (
                  <SkillBar key={lang.name} name={lang.name} level={lang.level} delay={0.5 + index * 0.1} />
                ))}
              </div>
            </div>

            {/* Personal Skills */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <span className="editorial-number">03</span>
                <div>
                  <h3 className="editorial-subtitle mb-1">
                    SOFT SKILLS
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalSkills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-xs uppercase tracking-wider border border-border/30 text-foreground/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Middle Column - Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 lg:p-10 editorial-grid-item"
          >
            <div className="mb-12">
              <div className="flex items-end justify-between mb-10">
                <h3 className="editorial-subtitle">
                  EXPERIENCE
                </h3>
                <span className="text-editorial-muted">{experience.length} Roles</span>
              </div>
              
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Number */}
                    <div className="flex gap-6">
                      <span className="editorial-number-active">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1 pt-2">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                            {exp.company}
                          </h4>
                        </div>
                        <p className="text-primary text-xs uppercase tracking-wider mb-2">{exp.role}</p>
                        <p className="text-foreground/50 text-xs mb-3">{exp.period}</p>
                        <p className="text-foreground/40 text-xs leading-relaxed">{exp.description}</p>
                        
                        {index < experience.length - 1 && (
                          <div className="editorial-hr mt-8" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="pt-8 border-t border-border/20">
              <div className="flex items-end justify-between mb-8">
                <h3 className="editorial-subtitle">
                  EDUCATION
                </h3>
              </div>
              <div className="flex gap-6">
                <span className="editorial-number-active">01</span>
                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    B.E. in AI & Data Science
                  </h4>
                  <p className="text-primary text-xs uppercase tracking-wider mt-1">MMCOE, Pune</p>
                  <p className="text-foreground/50 text-xs mt-2">2023-2027 · SGPA: 8.86</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - What Can I Do */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 lg:p-10 border-r-0"
          >
            {/* What Can I Do */}
            <div className="mb-12">
              <div className="flex items-end justify-between mb-8">
                <h3 className="editorial-subtitle">
                  SERVICES
                </h3>
              </div>
              <div className="space-y-4">
                {whatCanIDo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-foreground/20 text-xs">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-foreground/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dev Skills */}
            <div className="mb-12">
              <div className="flex items-end justify-between mb-8">
                <h3 className="editorial-subtitle">
                  TECH STACK
                </h3>
              </div>
              <div className="space-y-3">
                {devSkills.map((skill, index) => (
                  <p key={index} className="text-foreground/50 text-xs tracking-wide">
                    {skill}
                  </p>
                ))}
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div>
              <div className="flex items-end justify-between mb-8">
                <h3 className="editorial-subtitle">
                  INTERESTS
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Code size={20} />, label: "Coding" },
                  { icon: <Database size={20} />, label: "Hackathons" },
                  { icon: <Globe size={20} />, label: "Open Source" },
                  { icon: <Shield size={20} />, label: "Security" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 p-4 border border-border/20">
                    <span className="text-foreground/40">{item.icon}</span>
                    <span className="text-xs text-foreground/50 uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Corner decoration */}
      <div className="corner-icon" />
    </section>
  );
};

export default Resume;