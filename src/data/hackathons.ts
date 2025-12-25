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
    id: "sih-2025",
    hackathonName: "Smart India Hackathon 2025",
    projectTitle: "AI-Powered Rural Healthcare Platform",
    description: "Innovation challenge focused on solving real-world problems using AI, blockchain, or full-stack technologies. Built an end-to-end healthcare solution for rural areas.",
    techStack: ["React", "Node.js", "MongoDB", "TensorFlow", "Python"],
    teamMembers: ["Anand Raj", "Team Member 2", "Team Member 3"],
    outcome: "Finalist",
    githubLink: "https://github.com/anandraj",
    demoLink: "https://demo.example.com",
    icon: "sih",
    year: "2025",
  },
  {
    id: "sih-2024",
    hackathonName: "Smart India Hackathon 2024",
    projectTitle: "Blockchain-Based Document Verification",
    description: "Full-stack solution addressing government-level digital challenges with emphasis on scalability and security. Implemented secure document verification using blockchain.",
    techStack: ["React", "Express", "MongoDB", "Solidity", "Web3.js"],
    teamMembers: ["Anand Raj", "Team Member 2", "Team Member 3", "Team Member 4"],
    outcome: "Top 10",
    githubLink: "https://github.com/anandraj",
    icon: "sih",
    year: "2024",
  },
  {
    id: "xde-studios",
    hackathonName: "XDE Studios Innovation Challenge",
    projectTitle: "Decentralized Microinsurance Platform",
    description: "Cutting-edge Web3 project demonstrating smart contract architecture and decentralized systems design for microinsurance in underserved communities.",
    techStack: ["Solidity", "Hardhat", "Next.js", "Avalanche", "Web3.js"],
    teamMembers: ["Anand Raj", "Team Member 2"],
    outcome: "Winner",
    githubLink: "https://github.com/anandraj",
    demoLink: "https://demo.example.com",
    icon: "xde",
    year: "2024",
  },
  {
    id: "avalanche-2024",
    hackathonName: "Avalanche Hackathon 2024",
    projectTitle: "Cross-Chain DeFi Bridge",
    description: "Decentralized application leveraging Avalanche subnet technology for seamless cross-chain asset transfers and DeFi interoperability.",
    techStack: ["Solidity", "Hardhat", "Avalanche C-Chain", "React", "Node.js"],
    teamMembers: ["Anand Raj", "Team Member 2", "Team Member 3"],
    outcome: "Finalist",
    githubLink: "https://github.com/anandraj",
    demoLink: "https://demo.example.com",
    icon: "avalanche",
    year: "2024",
  },
];
