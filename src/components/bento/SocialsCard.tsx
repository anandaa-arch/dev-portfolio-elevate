import BentoCard from "../BentoCard";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { 
    icon: <Github size={20} />, 
    label: "GitHub", 
    href: "https://github.com/anandaa-arch",
    username: "@anandaa-arch"
  },
  { 
    icon: <Linkedin size={20} />, 
    label: "LinkedIn", 
    href: "https://linkedin.com/in/anandraj",
    username: "/in/anandraj"
  },
];

const SocialsCard = () => {
  return (
    <BentoCard className="bento-small" delay={0.5}>
      <p className="bento-label mb-4">Connect</p>
      <div className="space-y-3">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn w-full"
          >
            {social.icon}
            <span className="text-sm">{social.label}</span>
          </a>
        ))}
        <a
          href="mailto:workmahto24@gmail.com"
          className="social-btn w-full bg-primary/10 border-primary/30 hover:bg-primary hover:text-primary-foreground"
        >
          <Mail size={20} />
          <span className="text-sm">Email Me</span>
        </a>
      </div>
    </BentoCard>
  );
};

export default SocialsCard;
