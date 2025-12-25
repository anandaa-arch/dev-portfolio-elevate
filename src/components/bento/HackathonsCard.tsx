import EditorialCard from "../EditorialCard";
import { hackathons, Hackathon } from "@/data/hackathons";

const getOutcomeBadge = (outcome: Hackathon["outcome"]) => {
  switch (outcome) {
    case "Winner":
      return "badge-winner";
    case "Finalist":
      return "badge-finalist";
    default:
      return "badge-top";
  }
};

const HackathonsCard = () => {
  return (
    <EditorialCard className="editorial-full overflow-hidden" delay={0.4}>
      <div className="section-header">
        <h2 className="editorial-heading">Projects</h2>
        <span className="editorial-label">Hackathons & Competitions</span>
      </div>
      
      <div className="scroll-container -mx-6 md:-mx-8 px-6 md:px-8">
        {hackathons.map((hackathon, index) => (
          <div key={hackathon.id} className="scroll-item w-64 md:w-72 border border-foreground p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="circled-number text-sm">{index + 1}</span>
              <span className={`badge ${getOutcomeBadge(hackathon.outcome)}`}>
                {hackathon.outcome}
              </span>
            </div>
            
            <p className="editorial-label mb-2">{hackathon.year}</p>
            <h3 className="font-display text-lg uppercase tracking-tight font-semibold mb-2 line-clamp-1">
              {hackathon.projectTitle}
            </h3>
            <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
              {hackathon.hackathonName}
            </p>
            
            <div className="editorial-divider-h mb-4" />
            
            <div className="flex flex-wrap gap-1">
              {hackathon.techStack.slice(0, 3).map((tech) => (
                <span key={tech} className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </EditorialCard>
  );
};

export default HackathonsCard;