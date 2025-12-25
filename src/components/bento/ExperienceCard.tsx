import BentoCard from "../BentoCard";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "SWIFTY9",
    role: "Web Developer Intern",
    period: "Oct 2025 – Present",
    current: true,
  },
  {
    company: "GIRLSCRIPT SOC",
    role: "Open Source Contributor",
    period: "July 2025",
    current: false,
  },
  {
    company: "TCS FORAGE",
    role: "Cybersecurity Virtual Intern",
    period: "Nov 2024",
    current: false,
  },
];

const ExperienceCard = () => {
  return (
    <BentoCard className="bento-medium" delay={0.2}>
      <div className="flex items-center gap-3 mb-6">
        <div className="bento-icon">
          <Briefcase size={20} />
        </div>
        <h2 className="text-xl font-bold">Experience</h2>
      </div>
      
      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-sm">{exp.company}</h3>
                <p className="text-xs text-muted-foreground">{exp.role}</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground shrink-0">
                {exp.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
};

export default ExperienceCard;
