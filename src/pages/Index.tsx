import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import HeroCard from "@/components/bento/HeroCard";
import PhotoCard from "@/components/bento/PhotoCard";
import ExperienceCard from "@/components/bento/ExperienceCard";
import HackathonsCard from "@/components/bento/HackathonsCard";
import TechStackCard from "@/components/bento/TechStackCard";
import SocialsCard from "@/components/bento/SocialsCard";
import SkillsCard from "@/components/bento/SkillsCard";
import AboutCard from "@/components/bento/AboutCard";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <motion.a 
            href="#" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-bold"
          >
            AR<span className="text-primary">.</span>
          </motion.a>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <a href="#hackathons" className="nav-link hidden sm:block">Hackathons</a>
            <a href="https://github.com/anandaa-arch" target="_blank" rel="noopener noreferrer" className="nav-link hidden sm:block">GitHub</a>
            <a 
              href="mailto:workmahto24@gmail.com" 
              className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Bento Grid */}
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="bento-grid">
          {/* Row 1: Hero (large) + Photo (tall) */}
          <HeroCard />
          <PhotoCard />
          
          {/* Row 2: Experience (medium) + Hackathons (wide) */}
          <ExperienceCard />
          <HackathonsCard />
          
          {/* Row 3: Tech Stack + Socials + Skills + About */}
          <TechStackCard />
          <SocialsCard />
          <SkillsCard />
          <AboutCard />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/20 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-mono">
              © 2025 Anand Raj
            </p>
            <p className="text-xs text-muted-foreground">
              Built with React & Tailwind
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full bg-secondary border border-border/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
