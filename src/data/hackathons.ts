export interface Hackathon {
  id: string;
  hackathonName: string;
  projectTitle: string;
  description: string;
  techStack: string[];
  teamMembers: string[];
  outcome: "Winner" | "Finalist" | "Top 10" | "Recognized" | "Submitted";
  githubLink?: string;
  demoLink?: string;
  icon?: string;
  year: string;
}

export const hackathons: Hackathon[] = [
  {
    id: "cross-border-verification",
    hackathonName: "Avalanche Hackathon",
    projectTitle: "Cross-Border Employee Verification DApp",
    description: "A decentralized verification system on Avalanche C-Chain. It stores employee credentials immutably on-chain, achieving sub-2 second transaction times and reducing verification costs by 80% compared to traditional methods.",
    techStack: ["Solidity", "React", "Web3.js", "Avalanche", "IPFS"],
    teamMembers: ["Anand Raj (Lead)"],
    outcome: "Winner",
    githubLink: "https://github.com/anandaa-arch",
    demoLink: "https://demo.example.com",
    icon: "avalanche",
    year: "2024",
  },
  {
    id: "finance-llm",
    hackathonName: "Featured Project",
    projectTitle: "Finance-LLM Web Application",
    description: "An intelligent financial analysis platform processing 1000+ daily data points. Integrated Finance-LLM-13B and Scrapy to deliver real-time market insights, optimizing response times by 60% via caching strategies.",
    techStack: ["Next.js", "Python", "MongoDB", "Ollama 3.2", "Scrapy"],
    teamMembers: ["Anand Raj (Full Stack)"],
    outcome: "Recognized",
    githubLink: "https://github.com/anandaa-arch",
    demoLink: "https://demo.example.com",
    icon: "featured",
    year: "2024",
  },
  {
    id: "transpiler",
    hackathonName: "Smart India Hackathon (SIH)",
    projectTitle: "Transpiler (AI-Powered Code Converter)",
    description: "A Dockerized online tool that converts code between languages (e.g., Python ↔ C++) and debugs errors using OpenAI's API. Features a secure, sandboxed execution environment for user safety.",
    techStack: ["Docker", "OpenAI API", "Python", "C++", "React"],
    teamMembers: ["Anand Raj", "Team"],
    outcome: "Submitted",
    githubLink: "https://github.com/anandaa-arch",
    icon: "sih",
    year: "2024",
  },
  {
    id: "elderly-care",
    hackathonName: "Accenture Hackathon",
    projectTitle: "Elderly Care Companion",
    description: "A holistic elderly care web app featuring AI-driven health monitoring, automated medication reminders, and a multilingual chatbot to support non-tech-savvy users.",
    techStack: ["Flask", "AI/ML", "Python", "Chatbot API"],
    teamMembers: ["Anand Raj", "Collaborators"],
    outcome: "Submitted",
    githubLink: "https://github.com/anandaa-arch",
    icon: "accenture",
    year: "2024",
  },
];
