import EditorialCard from "../EditorialCard";

const HeroCard = () => {
  const codeLines = [
    "const Developer = {",
    "  name: 'Anand',",
    "  stack: ['Solidity', 'Next.js'],",
    "  status: 'Seeking SDE / Full-Stack / Web3 roles'",
    "};",
  ];

  return (
    <EditorialCard className="editorial-hero hero-card flex flex-col justify-between min-h-[420px] md:min-h-[540px]" delay={0}>
      <div className="flex justify-between items-start text-white/80">
        <span className="editorial-label text-white/80">Portfolio / 2025</span>
        <span className="editorial-label text-white/80">Full-Stack & Web3</span>
      </div>
      
      <div className="flex flex-col items-center text-center gap-5">
        <p className="hero-headline">Building the Decentralized Web</p>
        <div className="code-window">
          <div className="code-window__header">
            <span className="code-dot code-dot--red" />
            <span className="code-dot code-dot--yellow" />
            <span className="code-dot code-dot--green" />
            <span className="code-tab">developer.js</span>
          </div>
          <div className="code-window__body">
            {codeLines.map((line, index) => (
              <div key={line} className="code-line">
                <span className="code-line__number">{index + 1}</span>
                <span className="code-line__text">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-end text-white/80">
        <div>
          <p className="editorial-label text-white/80 mb-2">Developer: Anand Raj</p>
        </div>
        <div className="text-right">
          <p className="editorial-label text-white/80 mb-2">Location: Pune, Maharashtra</p>
        </div>
      </div>
    </EditorialCard>
  );
};

export default HeroCard;