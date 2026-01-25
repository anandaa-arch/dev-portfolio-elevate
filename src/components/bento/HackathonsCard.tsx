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
    <EditorialCard className="editorial-full" delay={0.4}>
      <div className="section-header">
        <h2 className="editorial-heading">Projects</h2>
        <span className="editorial-label">Hackathons & Competitions</span>
      </div>

      <div className="w-full flex flex-col gap-6 sm:gap-8">
        {hackathons.map((hackathon, index) => (
          <div
            key={hackathon.id}
            className="w-full flex flex-col md:flex-row gap-0 rounded-xl md:rounded-2xl overflow-hidden border border-foreground bg-foreground/5 hover:bg-foreground/10 transition-colors"
          >
            {/* Left: Thumbnail Section (40% on desktop, full width on mobile) */}
            <div className="w-full md:w-[40%] bg-foreground/95 p-6 sm:p-8 flex flex-col justify-between min-h-[180px] sm:min-h-[220px] md:min-h-[280px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="circled-number border-card text-card bg-transparent">{index + 1}</span>
                  <span className={`badge ${getOutcomeBadge(hackathon.outcome)}`}>
                    {hackathon.outcome}
                  </span>
                </div>

                <p className="editorial-label text-card/60 mb-2">{hackathon.year}</p>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl uppercase tracking-tight font-bold text-card leading-tight">
                  {hackathon.projectTitle}
                </h3>
              </div>

              <div className="mt-4">
                <p className="text-xs sm:text-sm text-card/70 uppercase tracking-wide font-medium">
                  {hackathon.hackathonName}
                </p>
              </div>
            </div>

            {/* Right: Content Section (60% on desktop, full width on mobile) */}
            <div className="w-full md:w-[60%] p-6 sm:p-6 md:p-8 flex flex-col">
              {/* Links at top-right - Tappable buttons */}
              <div className="flex items-center justify-end gap-2 sm:gap-3 mb-4 sm:mb-6">
                {hackathon.demoLink && (
                  <a
                    href={hackathon.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-5 py-2.5 min-h-[44px] text-xs sm:text-sm font-medium uppercase tracking-wide border border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={14} />
                    <span className="hidden sm:inline">Live</span>
                    <span className="sm:hidden">Demo</span>
                  </a>
                )}
                {hackathon.githubLink && (
                  <a
                    href={hackathon.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-5 py-2.5 min-h-[44px] text-xs sm:text-sm font-medium uppercase tracking-wide border border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors flex items-center gap-2"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                )}
              </div>

              {/* Description - Larger text on mobile */}
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4 sm:mb-6 flex-grow">
                {hackathon.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {hackathon.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-mono uppercase tracking-wider border border-foreground/30 rounded-full bg-muted/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Team Members */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground pt-3 sm:pt-4 border-t border-foreground/10">
                <Users size={14} />
                <span className="font-mono truncate">
                  {hackathon.teamMembers.length > 2
                    ? `${hackathon.teamMembers[0]} +${hackathon.teamMembers.length - 1}`
                    : hackathon.teamMembers.join(", ")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </EditorialCard>
  );
};

export default HackathonsCard;