import BentoCard from "../BentoCard";

const HeroCard = () => {
  return (
    <BentoCard className="bento-hero flex flex-col justify-end min-h-[300px] md:min-h-[400px]" delay={0}>
      <div className="space-y-4">
        <p className="bento-label">Full-Stack & Web3 Developer</p>
        <h1 className="bento-title">
          ANAND
          <br />
          <span className="text-gradient">RAJ</span>
        </h1>
        <p className="text-muted-foreground max-w-md mt-4">
          Engineering student building scalable web apps and decentralized systems on blockchain.
        </p>
      </div>
    </BentoCard>
  );
};

export default HeroCard;
