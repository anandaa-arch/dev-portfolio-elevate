import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, Users, Trophy, Award, Medal, Star, ChevronRight } from "lucide-react";
import { hackathons, Hackathon } from "@/data/hackathons";

const getOutcomeBadge = (outcome: Hackathon["outcome"]) => {
  switch (outcome) {
    case "Winner":
      return {
        bg: "bg-yellow-500/10",
        text: "text-yellow-400",
        border: "border-yellow-500/30",
        icon: <Trophy size={10} />,
      };
    case "Finalist":
      return {
        bg: "bg-foreground/5",
        text: "text-foreground/60",
        border: "border-foreground/20",
        icon: <Award size={10} />,
      };
    case "Top 10":
    case "Recognized":
      return {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/30",
        icon: <Medal size={10} />,
      };
    default:
      return {
        bg: "bg-muted/10",
        text: "text-muted-foreground",
        border: "border-muted/20",
        icon: <Star size={10} />,
      };
  }
};

const HackathonCard = ({ hackathon, index }: { hackathon: Hackathon; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const badge = getOutcomeBadge(hackathon.outcome);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        className="editorial-card h-full cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Number and Header */}
        <div className="flex items-start gap-4 mb-6">
          <span className="editorial-number-active">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex-1">
            <p className="text-editorial-muted mb-1">{hackathon.hackathonName}</p>
            <h3 className="text-lg font-semibold text-foreground uppercase tracking-wide leading-tight">
              {hackathon.projectTitle}
            </h3>
          </div>
        </div>

        {/* Outcome Badge */}
        <div className="mb-4">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest ${badge.bg} ${badge.text} border ${badge.border}`}>
            {badge.icon}
            <span>{hackathon.outcome}</span>
          </div>
        </div>

        {/* Description */}
        <p className={`text-xs text-foreground/50 leading-relaxed mb-6 ${isExpanded ? '' : 'line-clamp-2'}`}>
          {hackathon.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {hackathon.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[10px] uppercase tracking-wider border border-border/20 text-foreground/40"
            >
              {tech}
            </span>
          ))}
          {hackathon.techStack.length > 4 && (
            <span className="px-2 py-1 text-[10px] text-foreground/30">
              +{hackathon.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Team Members */}
        <div className="flex items-center gap-3 mb-6 pt-4 border-t border-border/10">
          <Users size={12} className="text-foreground/30" />
          <div className="flex items-center gap-1">
            {hackathon.teamMembers.slice(0, 3).map((member, i) => (
              <div
                key={i}
                className="w-6 h-6 flex items-center justify-center text-[10px] font-medium text-foreground/60
                           border border-border/30 -ml-1 first:ml-0"
                title={member}
              >
                {member.charAt(0)}
              </div>
            ))}
            {hackathon.teamMembers.length > 3 && (
              <span className="text-[10px] text-foreground/30 ml-2">
                +{hackathon.teamMembers.length - 3}
              </span>
            )}
          </div>
          <span className="text-[10px] text-foreground/30 ml-auto uppercase tracking-wider">{hackathon.year}</span>
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {hackathon.githubLink && (
            <a
              href={hackathon.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-widest
                         border border-border/30 text-foreground/50 hover:border-foreground hover:text-foreground
                         transition-all duration-200"
            >
              <Github size={12} />
              <span>Code</span>
            </a>
          )}
          {hackathon.demoLink && (
            <a
              href={hackathon.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-widest
                         border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground
                         transition-all duration-200"
            >
              <ExternalLink size={12} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Hackathons = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="hackathons"
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="editorial-title">
                HACKATHONS
              </h2>
              <p className="text-foreground/40 text-sm mt-4 max-w-lg">
                Building innovative solutions under pressure — from AI platforms to decentralized Web3 applications.
              </p>
            </div>
            <span className="text-editorial-muted">{hackathons.length} Competitions</span>
          </div>
        </motion.div>

        {/* Hackathon Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-0 editorial-grid">
          {hackathons.map((hackathon, index) => (
            <div key={hackathon.id} className="editorial-grid-item">
              <HackathonCard hackathon={hackathon} index={index} />
            </div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-0 mt-16 border border-border/20"
        >
          {[
            { value: hackathons.length, label: "Total" },
            { value: hackathons.filter(h => h.outcome === "Winner").length, label: "Wins" },
            { value: hackathons.filter(h => ["Winner", "Finalist", "Top 10"].includes(h.outcome)).length, label: "Top Finishes" },
          ].map((stat, index) => (
            <div key={index} className={`text-center py-8 ${index < 2 ? 'border-r border-border/20' : ''}`}>
              <span className="text-4xl md:text-5xl font-heading text-primary">{stat.value}</span>
              <p className="text-editorial-muted mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Corner decoration */}
      <div className="corner-icon" />
    </section>
  );
};

export default Hackathons;