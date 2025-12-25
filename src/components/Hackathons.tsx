import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, Users, Trophy, Award, Medal, Star } from "lucide-react";
import { SiSolidity } from "react-icons/si";
import { hackathons, Hackathon } from "@/data/hackathons";

const getOutcomeBadge = (outcome: Hackathon["outcome"]) => {
  switch (outcome) {
    case "Winner":
      return {
        bg: "bg-yellow-500/20",
        text: "text-yellow-400",
        border: "border-yellow-500/30",
        icon: <Trophy size={12} />,
      };
    case "Finalist":
      return {
        bg: "bg-gray-300/20",
        text: "text-gray-300",
        border: "border-gray-400/30",
        icon: <Award size={12} />,
      };
    case "Top 10":
    case "Recognized":
      return {
        bg: "bg-primary/20",
        text: "text-primary",
        border: "border-primary/30",
        icon: <Medal size={12} />,
      };
    default:
      return {
        bg: "bg-muted/20",
        text: "text-muted-foreground",
        border: "border-muted/30",
        icon: <Star size={12} />,
      };
  }
};

const getHackathonIcon = (icon?: string) => {
  switch (icon) {
    case "avalanche":
      return (
        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
          <span className="text-red-400 font-bold text-xs">AVAX</span>
        </div>
      );
    case "sih":
      return (
        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
          <span className="text-orange-400 font-bold text-xs">SIH</span>
        </div>
      );
    case "xde":
      return (
        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
          <span className="text-purple-400 font-bold text-xs">XDE</span>
        </div>
      );
    default:
      return (
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <SiSolidity className="text-primary" size={14} />
        </div>
      );
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
      className="group relative"
    >
      <div
        className="relative p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm 
                   hover:border-primary/30 hover:bg-card/80 transition-all duration-300
                   hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            {getHackathonIcon(hackathon.icon)}
            <div>
              <p className="text-xs text-muted-foreground">{hackathon.hackathonName}</p>
              <h3 className="text-primary font-semibold text-sm leading-tight mt-0.5">
                {hackathon.projectTitle}
              </h3>
            </div>
          </div>
          
          {/* Outcome Badge */}
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text} border ${badge.border}`}>
            {badge.icon}
            <span>{hackathon.outcome}</span>
          </div>
        </div>

        {/* Description */}
        <p className={`text-xs text-foreground/60 leading-relaxed mb-4 ${isExpanded ? '' : 'line-clamp-2'}`}>
          {hackathon.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {hackathon.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] rounded-full bg-muted/50 text-foreground/70 border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Team Members */}
        <div className="flex items-center gap-2 mb-4">
          <Users size={12} className="text-muted-foreground" />
          <div className="flex items-center gap-1">
            {hackathon.teamMembers.slice(0, 3).map((member, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 
                           flex items-center justify-center text-[10px] font-medium text-foreground/80
                           border border-border/50 -ml-1 first:ml-0"
                title={member}
              >
                {member.charAt(0)}
              </div>
            ))}
            {hackathon.teamMembers.length > 3 && (
              <span className="text-[10px] text-muted-foreground ml-1">
                +{hackathon.teamMembers.length - 3} more
              </span>
            )}
          </div>
          <span className="text-[10px] text-muted-foreground ml-auto">{hackathon.year}</span>
        </div>

        {/* Links */}
        <div className="flex gap-2">
          {hackathon.githubLink && (
            <a
              href={hackathon.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg
                         bg-muted/50 text-foreground/70 hover:bg-primary hover:text-primary-foreground
                         transition-all duration-200 border border-border/50"
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
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg
                         bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground
                         transition-all duration-200 border border-primary/30"
            >
              <ExternalLink size={12} />
              <span>Demo</span>
            </a>
          )}
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
      className="section-full py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            HACKATHONS & COMPETITIONS
          </h2>
          <p className="text-foreground/60 text-sm max-w-xl mx-auto">
            Building innovative solutions under pressure — from AI-powered platforms to decentralized Web3 applications.
          </p>
        </motion.div>

        {/* Hackathon Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {hackathons.map((hackathon, index) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} index={index} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-8 md:gap-16 mt-12 pt-8 border-t border-border/30"
        >
          {[
            { value: hackathons.length, label: "Hackathons" },
            { value: hackathons.filter(h => h.outcome === "Winner").length, label: "Wins" },
            { value: hackathons.filter(h => ["Winner", "Finalist", "Top 10"].includes(h.outcome)).length, label: "Top Finishes" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <span className="text-2xl md:text-3xl font-heading text-primary">{stat.value}</span>
              <p className="text-xs text-foreground/50 mt-1">{stat.label}</p>
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
