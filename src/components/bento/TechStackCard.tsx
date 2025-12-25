import EditorialCard from "../EditorialCard";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiSolidity, 
  SiNodedotjs, SiTailwindcss, SiMongodb, SiGit 
} from "react-icons/si";

const techStack = [
  { icon: <SiReact size={20} />, name: "React", proficiency: "90%" },
  { icon: <SiNextdotjs size={20} />, name: "Next.js", proficiency: "85%" },
  { icon: <SiTypescript size={20} />, name: "TypeScript", proficiency: "80%" },
  { icon: <SiSolidity size={20} />, name: "Solidity", proficiency: "75%" },
  { icon: <SiNodedotjs size={20} />, name: "Node.js", proficiency: "80%" },
  { icon: <SiTailwindcss size={20} />, name: "Tailwind", proficiency: "90%" },
  { icon: <SiMongodb size={20} />, name: "MongoDB", proficiency: "70%" },
  { icon: <SiGit size={20} />, name: "Git", proficiency: "85%" },
];

const TechStackCard = () => {
  return (
    <EditorialCard className="editorial-medium" delay={0.5}>
      <div className="section-header">
        <h2 className="editorial-heading">Technical Skills</h2>
        <span className="editorial-label">Expertise</span>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="border border-foreground p-4 flex flex-col items-start gap-3"
          >
            <div className="flex items-center justify-between w-full">
              {tech.icon}
              <span className="font-mono text-xs text-muted-foreground">{tech.proficiency}</span>
            </div>
            <span className="text-xs font-medium uppercase tracking-wide">{tech.name}</span>
          </div>
        ))}
      </div>
    </EditorialCard>
  );
};

export default TechStackCard;