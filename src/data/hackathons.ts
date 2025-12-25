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
    description: "Rural communities lack access to quality healthcare diagnostics. We built an AI-powered telemedicine platform that uses computer vision to analyze medical images and provide preliminary diagnoses, connecting patients with specialists remotely.",
    techStack: ["React", "Node.js", "MongoDB", "TensorFlow", "Python"],
    teamMembers: ["Anand Raj", "Priya Sharma", "Vikash Kumar"],
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
    description: "Fake certificates and document fraud cost institutions millions annually. Our solution uses blockchain to create tamper-proof digital certificates with QR-based instant verification, reducing fraud by 95% while cutting verification time from days to seconds.",
    techStack: ["React", "Express", "MongoDB", "Solidity", "Web3.js"],
    teamMembers: ["Anand Raj", "Rahul Singh", "Neha Gupta", "Amit Patel"],
    outcome: "Top 10",
    githubLink: "https://github.com/anandraj",
    icon: "sih",
    year: "2024",
  },
  {
    id: "xde-studios",
    hackathonName: "XDE Studios Innovation Challenge",
    projectTitle: "Decentralized Microinsurance Platform",
    description: "Over 2 billion people lack access to insurance. We created a blockchain-based microinsurance protocol enabling parametric insurance products with automated claim payouts via smart contracts, reducing operational costs by 80% and making coverage accessible to underserved communities.",
    techStack: ["Solidity", "Hardhat", "Next.js", "Avalanche", "Web3.js"],
    teamMembers: ["Anand Raj", "Sanya Mehta"],
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
    description: "Moving assets between blockchains is slow and expensive. Our bridge leverages Avalanche subnet technology to enable instant, low-cost cross-chain transfers with built-in liquidity aggregation, reducing swap fees by 60% compared to existing solutions.",
    techStack: ["Solidity", "Hardhat", "Avalanche C-Chain", "React", "Node.js"],
    teamMembers: ["Anand Raj", "Karan Verma", "Divya Nair"],
    outcome: "Finalist",
    githubLink: "https://github.com/anandraj",
    demoLink: "https://demo.example.com",
    icon: "avalanche",
    year: "2024",
  },
];
