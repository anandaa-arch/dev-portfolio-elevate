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
    description: "Problem: Traditional employee verification across borders is slow, expensive, and prone to fraud—costing companies weeks and thousands of dollars per hire. Solution: Built a decentralized verification system on Avalanche C-Chain that stores employee credentials immutably on-chain. Achieved sub-2 second transaction finality and reduced verification costs by 80% using smart contracts and IPFS for document storage.",
    techStack: ["Solidity", "React", "Web3.js", "Avalanche", "IPFS"],
    teamMembers: ["Anand Raj (Lead)"],
    outcome: "Winner",
    githubLink: "https://github.com/anandraj",
    demoLink: "https://demo.example.com",
    icon: "avalanche",
    year: "2024",
  },
  {
    id: "finance-llm",
    hackathonName: "Featured Project",
    projectTitle: "Finance-LLM Web Application",
    description: "Problem: Retail investors lack access to institutional-grade financial analysis tools, making it difficult to process vast amounts of market data quickly. Solution: Developed an AI-powered financial analysis platform that processes 1000+ daily data points using Finance-LLM-13B. Integrated Scrapy for real-time market data scraping and implemented Redis caching to optimize response times by 60%.",
    techStack: ["Next.js", "Python", "MongoDB", "Ollama 3.2", "Scrapy"],
    teamMembers: ["Anand Raj (Full Stack)"],
    outcome: "Recognized",
    githubLink: "https://github.com/anandraj",
    demoLink: "https://demo.example.com",
    icon: "featured",
    year: "2024",
  },
  {
    id: "transpiler",
    hackathonName: "Smart India Hackathon (SIH)",
    projectTitle: "Transpiler (AI-Powered Code Converter)",
    description: "Problem: Developers waste hours manually converting code between programming languages, and debugging syntax errors across unfamiliar languages is time-consuming. Solution: Created a Dockerized web tool that automatically transpiles code between languages (Python ↔ C++, JavaScript ↔ TypeScript) using OpenAI's API. Features include intelligent error debugging, syntax highlighting, and a sandboxed execution environment for secure code testing.",
    techStack: ["Docker", "OpenAI API", "Python", "C++", "React"],
    teamMembers: ["Anand Raj", "Team"],
    outcome: "Submitted",
    githubLink: "https://github.com/anandraj",
    icon: "sih",
    year: "2024",
  },
  {
    id: "elderly-care",
    hackathonName: "Accenture Hackathon",
    projectTitle: "Elderly Care Companion",
    description: "Problem: Elderly individuals, especially those living alone, struggle with medication adherence, health monitoring, and accessing digital services due to technology barriers. Solution: Built a comprehensive care platform with AI-driven health monitoring that tracks vitals, automated medication reminders via SMS/voice calls, and a multilingual chatbot interface designed for non-tech-savvy users with voice-first interaction.",
    techStack: ["Flask", "AI/ML", "Python", "Chatbot API"],
    teamMembers: ["Anand Raj", "Collaborators"],
    outcome: "Submitted",
    githubLink: "https://github.com/anandraj",
    icon: "accenture",
    year: "2024",
  },
];
