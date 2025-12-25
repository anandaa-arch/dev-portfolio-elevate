import BentoCard from "../BentoCard";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiSolidity, 
  SiNodedotjs, SiTailwindcss 
} from "react-icons/si";

const techStack = [
  { icon: <SiReact size={24} />, name: "React" },
  { icon: <SiNextdotjs size={24} />, name: "Next.js" },
  { icon: <SiTypescript size={24} />, name: "TypeScript" },
  { icon: <SiSolidity size={24} />, name: "Solidity" },
  { icon: <SiNodedotjs size={24} />, name: "Node.js" },
  { icon: <SiTailwindcss size={24} />, name: "Tailwind" },
];

const TechStackCard = () => {
  return (
    <BentoCard className="bento-small" delay={0.4}>
      <p className="bento-label mb-4">Tech Stack</p>
      <div className="grid grid-cols-3 gap-2">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="tech-icon"
            title={tech.name}
          >
            {tech.icon}
          </div>
        ))}
      </div>
    </BentoCard>
  );
};

export default TechStackCard;
