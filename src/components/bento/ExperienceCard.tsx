import EditorialCard from "../EditorialCard";

const experiences = [
  {
    company: "SWIFTY9",
    role: "Web Developer Intern",
    period: "2025",
    description: "Building modern web applications with React and TypeScript.",
  },
  {
    company: "GIRLSCRIPT SOC",
    role: "Open Source Contributor",
    period: "2025",
    description: "Contributing to open source projects and community building.",
  },
  {
    company: "TCS FORAGE",
    role: "Cybersecurity Virtual Intern",
    period: "2024",
    description: "Completed virtual internship in cybersecurity fundamentals.",
  },
];

const ExperienceCard = () => {
  return (
    <EditorialCard className="editorial-wide" delay={0.2}>
      <div className="section-header">
        <h2 className="editorial-heading">Experience</h2>
        <span className="editorial-label">Work History</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-4 md:pl-0 border-l md:border-l-0 border-foreground/20 md:border-none pb-6 md:pb-0 last:pb-0">
            <div className="flex items-start gap-4 mb-4">
              <span className="circled-number shrink-0">{index + 1}</span>
              <div>
                <p className="editorial-label mb-1">{exp.period}</p>
                <h3 className="font-display text-lg uppercase tracking-tight font-semibold">
                  {exp.company}
                </h3>
              </div>
            </div>
            <div className="pl-12">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
                {exp.role}
              </p>
              <p className="editorial-body text-muted-foreground text-xs">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </EditorialCard>
  );
};

export default ExperienceCard;