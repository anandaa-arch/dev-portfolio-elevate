import { ArrowRight } from "lucide-react";
import EditorialCard from "../EditorialCard";

const HeroCard = () => {
  return (
    <EditorialCard className="editorial-hero flex flex-col justify-between min-h-[400px] md:min-h-[500px] bg-foreground text-card" delay={0}>
      <div className="flex justify-between items-start">
        <span className="editorial-label text-card/60">Portfolio / 2025</span>
        <span className="editorial-label text-card/60">Full-Stack & Web3</span>
      </div>
      
      {/* Hero Typography Section */}
      <div className="flex-1 flex flex-col justify-end pb-6">
        <div className="flex items-end justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black uppercase leading-[0.9] tracking-tighter text-card">
              Full Stack<br />& Web3<br />Engineer
            </h1>
            <p className="font-mono text-xs sm:text-sm text-card/70 mt-4 max-w-md leading-relaxed">
              Building decentralized systems & scalable AI solutions from Pune, India.
            </p>
          </div>
          <ArrowRight className="w-12 h-12 md:w-16 md:h-16 text-card/40 flex-shrink-0 stroke-[1]" />
        </div>
      </div>
      
      <div className="flex justify-between items-end pt-4 border-t border-card/20">
        <div>
          <p className="editorial-label text-card/60 mb-1">Developer</p>
          <p className="text-lg md:text-xl font-display uppercase tracking-tight text-card">
            Anand Raj
          </p>
        </div>
        <div className="text-right">
          <p className="editorial-label text-card/60 mb-1">Location</p>
          <p className="text-sm text-card">Pune, Maharashtra</p>
        </div>
      </div>
    </EditorialCard>
  );
};

export default HeroCard;