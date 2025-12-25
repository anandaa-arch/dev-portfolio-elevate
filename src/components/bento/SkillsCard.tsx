import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BentoCard from "../BentoCard";
import { Code } from "lucide-react";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Solidity", level: 75 },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="font-medium">{name}</span>
        <span className="font-mono text-muted-foreground">{level}%</span>
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

const SkillsCard = () => {
  return (
    <BentoCard className="bento-small" delay={0.6}>
      <div className="flex items-center gap-3 mb-4">
        <div className="bento-icon">
          <Code size={20} />
        </div>
        <h2 className="text-lg font-bold">Skills</h2>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar 
            key={skill.name} 
            name={skill.name} 
            level={skill.level} 
            delay={0.6 + index * 0.1} 
          />
        ))}
      </div>
    </BentoCard>
  );
};

export default SkillsCard;
