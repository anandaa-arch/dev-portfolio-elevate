import BentoCard from "../BentoCard";
import { GraduationCap, Award } from "lucide-react";

const AboutCard = () => {
  return (
    <BentoCard className="bento-medium" delay={0.7}>
      <p className="bento-label mb-4">About Me</p>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        Engineering student specializing in AI & Data Science at MMCOE Pune. 
        Building scalable web apps and decentralized systems with React, Next.js, and blockchain technologies.
      </p>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-secondary/50 border border-border/30">
          <GraduationCap size={20} className="text-primary mb-2" />
          <p className="font-semibold text-sm">SGPA 8.86</p>
          <p className="text-xs text-muted-foreground">2023-2027</p>
        </div>
        <div className="p-4 rounded-xl bg-secondary/50 border border-border/30">
          <Award size={20} className="text-primary mb-2" />
          <p className="font-semibold text-sm">Hackathon Winner</p>
          <p className="text-xs text-muted-foreground">XDE & Avalanche</p>
        </div>
      </div>
    </BentoCard>
  );
};

export default AboutCard;
