import BentoCard from "../BentoCard";
import { Trophy, Award, Medal, ChevronRight } from "lucide-react";
import { hackathons, Hackathon } from "@/data/hackathons";

const getOutcomeBadge = (outcome: Hackathon["outcome"]) => {
  switch (outcome) {
    case "Winner":
      return { className: "badge-winner", icon: <Trophy size={10} /> };
    case "Finalist":
      return { className: "badge-finalist", icon: <Award size={10} /> };
    default:
      return { className: "badge-top", icon: <Medal size={10} /> };
  }
};

const HackathonsCard = () => {
  return (
    <BentoCard className="bento-wide overflow-hidden" delay={0.3}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bento-icon">
            <Trophy size={20} />
          </div>
          <h2 className="text-xl font-bold">Hackathons</h2>
        </div>
        <span className="text-xs font-mono text-muted-foreground">{hackathons.length} wins</span>
      </div>
      
      <div className="hackathon-scroll -mx-6 md:-mx-8 px-6 md:px-8">
        {hackathons.map((hackathon) => {
          const badge = getOutcomeBadge(hackathon.outcome);
          return (
            <div key={hackathon.id} className="hackathon-card">
              <div className="flex items-center justify-between mb-3">
                <span className={`badge ${badge.className}`}>
                  {badge.icon}
                  {hackathon.outcome}
                </span>
                <span className="text-xs font-mono text-muted-foreground">{hackathon.year}</span>
              </div>
              <h3 className="font-semibold text-sm mb-1 line-clamp-1">{hackathon.projectTitle}</h3>
              <p className="text-xs text-muted-foreground line-clamp-1">{hackathon.hackathonName}</p>
              <div className="flex flex-wrap gap-1 mt-3">
                {hackathon.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-[10px] font-mono text-primary/70">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
        
        {/* View all card */}
        <a 
          href="#hackathons" 
          className="hackathon-card flex flex-col items-center justify-center hover:bg-primary/10"
        >
          <ChevronRight size={24} className="text-primary mb-2" />
          <span className="text-sm font-medium">View All</span>
        </a>
      </div>
    </BentoCard>
  );
};

export default HackathonsCard;
