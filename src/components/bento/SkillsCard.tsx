import EditorialCard from "../EditorialCard";

const skills = [
  "Frontend Development",
  "Backend Development", 
  "Smart Contracts",
  "Blockchain / Web3",
  "UI/UX Design",
  "Database Design",
];

const SkillsCard = () => {
  return (
    <EditorialCard className="editorial-small bg-foreground text-card" delay={0.7}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="editorial-subheading text-card">Skills</h2>
        <span className="circled-number border-card text-card text-sm">C</span>
      </div>
      
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={skill} className="flex items-center gap-4">
            <span className="text-xs font-mono text-card/60">0{index + 1}</span>
            <span className="text-sm font-medium uppercase tracking-wide text-card">{skill}</span>
          </div>
        ))}
      </div>
    </EditorialCard>
  );
};

export default SkillsCard;