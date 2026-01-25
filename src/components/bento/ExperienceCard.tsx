import EditorialCard from "../EditorialCard";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "HPAIR (Harvard University)",
    role: "Selected Delegate",
    date: "2026",
    points: [
      "Selected from a highly competitive global pool to attend HCONF 2026.",
      "Participating in high-level leadership and dialogues with global leaders, policymakers, and Nobel laureates."
    ],
  },
  {
    company: "SWIFTY9",
    role: "Web Developer Intern",
    date: "2025",
    points: [
      "Building modern web applications with React and TypeScript.",
      "Collaborating with senior developers to implement responsive clean designs."
    ],
  },
  {
    company: "GIRLSCRIPT SOC",
    role: "Open Source Contributor",
    date: "2025",
    points: [
      "Contributing to open source projects and community building.",
      "Fixing bugs and adding new features to large-scale repositories."
    ],
  },
  {
    company: "TCS FORAGE",
    role: "Cybersecurity Virtual Intern",
    date: "2024",
    points: [
      "Completed virtual internship focusing on cybersecurity fundamentals.",
      "Analyzed security protocols and identified potential vulnerabilities."
    ],
  },
];

const ExperienceCard = () => {
  return (
    <EditorialCard className="editorial-wide p-0 overflow-hidden bg-black border-gray-800" delay={0.2}>
      <div className="p-6 md:p-8 flex items-center justify-between border-b border-gray-800 bg-neutral-950/50">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight font-display">Experience</h2>
          <span className="text-sm text-gray-400 font-medium">Professional Experience</span>
        </div>
        <Briefcase className="text-gray-600" size={24} />
      </div>

      <div className="flex flex-col bg-black">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flex flex-col p-6 md:p-8 ${index !== experiences.length - 1 ? "border-b border-gray-800" : ""
              }`}
          >
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                {/* Logo Placeholder */}
                <div className="h-12 w-12 rounded-full bg-neutral-900 border border-gray-800 flex items-center justify-center shrink-0">
                  <span className="font-bold text-white/50 text-lg">
                    {exp.company.charAt(0)}
                  </span>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-white font-display tracking-wide">
                    {exp.role}
                  </h3>
                  <span className="text-base font-semibold text-gray-300">
                    {exp.company}
                  </span>
                </div>
              </div>

              {/* Date (Right aligned on desktop) */}
              <div className="ml-16 md:ml-0">
                <span className="inline-block px-3 py-1 rounded-full bg-neutral-900 border border-gray-800 text-xs font-mono text-gray-400">
                  {exp.date}
                </span>
              </div>
            </div>

            {/* Description Points */}
            <div className="ml-16">
              <ul className="list-disc space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-sm text-gray-400 leading-relaxed pl-1 marker:text-gray-600">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </EditorialCard>
  );
};

export default ExperienceCard;
