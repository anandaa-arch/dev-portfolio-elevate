import EditorialCard from "../EditorialCard";
import { hackathons, Hackathon } from "@/data/hackathons";
import { Github, ExternalLink, Users } from "lucide-react";

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
          <div key={hackathon.id} className="scroll-item w-80 md:w-96 border border-foreground p-5 flex flex-col">
            {/* Header: Number + Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="circled-number text-sm">{index + 1}</span>
              <span className={`badge ${getOutcomeBadge(hackathon.outcome)}`}>
                {hackathon.outcome}
              </span>
            </div>
            
            {/* Year + Title */}
            <p className="editorial-label mb-2">{hackathon.year}</p>
            <h3 className="font-display text-lg uppercase tracking-tight font-semibold mb-1 leading-tight">
              {hackathon.projectTitle}
            </h3>
            <p className="text-xs text-muted-foreground mb-3">
              {hackathon.hackathonName}
            </p>
            
            {/* Description Block */}
            <p className="text-sm text-foreground/80 leading-relaxed mb-4 line-clamp-3 flex-grow">
              {hackathon.description}
            </p>
            
            <div className="editorial-divider-h mb-4" />
            
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {hackathon.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider border border-foreground/30 rounded-full bg-muted/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Footer: Team + Links */}
            <div className="flex items-center justify-between pt-3 border-t border-foreground/20">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Users size={12} />
                <span className="font-mono truncate max-w-[120px]">
                  {hackathon.teamMembers.length > 2 
                    ? `${hackathon.teamMembers[0]} +${hackathon.teamMembers.length - 1}`
                    : hackathon.teamMembers.join(", ")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {hackathon.githubLink && (
                  <a 
                    href={hackathon.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={16} />
                  </a>
                )}
                {hackathon.demoLink && (
                  <a 
                    href={hackathon.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                    aria-label="View Demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </EditorialCard>
  );
};

export default HackathonsCard;