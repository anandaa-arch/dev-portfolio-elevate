import EditorialCard from "../EditorialCard";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const socials = [
  { 
    icon: <Github size={20} />, 
    label: "GitHub", 
    href: "https://github.com/anandaa-arch",
  },
  { 
    icon: <Linkedin size={20} />, 
    label: "LinkedIn", 
    href: "https://linkedin.com/in/anandraj",
  },
  { 
    icon: <Mail size={20} />, 
    label: "Email", 
    href: "mailto:workmahto24@gmail.com",
  },
];

const SocialsCard = () => {
  return (
    <EditorialCard className="editorial-small" delay={0.6}>
      <div className="section-header">
        <h2 className="editorial-subheading">Get In Touch</h2>
        <span className="circled-number text-sm">E</span>
      </div>
      
      <div className="space-y-4">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center justify-between py-3 border-b border-foreground/20 hover:border-foreground transition-colors group"
          >
            <div className="flex items-center gap-3">
              {social.icon}
              <span className="text-sm font-medium uppercase tracking-wide">{social.label}</span>
            </div>
            <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
      
      <p className="editorial-body text-muted-foreground mt-6 text-xs">
        Open to freelance projects and full-time opportunities.
      </p>
    </EditorialCard>
  );
};

export default SocialsCard;