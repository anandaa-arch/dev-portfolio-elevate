import EditorialCard from "../EditorialCard";

const HeroCard = () => {
  return (
    <EditorialCard className="editorial-hero flex flex-col justify-between min-h-[400px] md:min-h-[500px] bg-foreground text-card" delay={0}>
      <div className="flex justify-between items-start">
        <span className="editorial-label text-card/60">Portfolio / 2025</span>
        <span className="editorial-label text-card/60">Full-Stack & Web3</span>
      </div>
      
      <div>
        <h1 className="editorial-title text-card leading-[0.85]">
          RE-<br />SUME
        </h1>
      </div>
      
      <div className="flex justify-between items-end">
        <div>
          <p className="editorial-label text-card/60 mb-2">Developer</p>
          <p className="text-xl md:text-2xl font-display uppercase tracking-tight text-card">
            Anand Raj
          </p>
        </div>
        <div className="text-right">
          <p className="editorial-label text-card/60 mb-2">Location</p>
          <p className="text-sm text-card">Pune, Maharashtra</p>
        </div>
      </div>
    </EditorialCard>
  );
};

export default HeroCard;