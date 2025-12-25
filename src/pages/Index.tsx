import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import HeroCard from "@/components/bento/HeroCard";
import PhotoCard from "@/components/bento/PhotoCard";
import ExperienceCard from "@/components/bento/ExperienceCard";
import EducationCard from "@/components/bento/EducationCard";
import HackathonsCard from "@/components/bento/HackathonsCard";
import TechStackCard from "@/components/bento/TechStackCard";
import SocialsCard from "@/components/bento/SocialsCard";
import SkillsCard from "@/components/bento/SkillsCard";
import AboutCard from "@/components/bento/AboutCard";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-foreground">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:h-14 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <motion.a 
            href="#" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display text-lg font-bold uppercase tracking-tighter"
          >
            Anand Raj
          </motion.a>
          
          <div className="flex flex-col gap-1 sm:hidden text-xs font-mono uppercase tracking-wide text-foreground">
            <a href="#experience" className="hover:text-muted-foreground">Experience</a>
            <a href="#projects" className="hover:text-muted-foreground">Projects</a>
            <a href="#contact" className="hover:text-muted-foreground">Contact</a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="hidden sm:flex items-center gap-6"
          >
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a 
              href="mailto:workmahto24@gmail.com" 
              className="px-4 py-2 bg-foreground text-background text-xs font-mono uppercase tracking-wider hover:bg-foreground/90 transition-colors"
            >
              Hire Me
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Editorial Grid */}
      <div className="container mx-auto px-4 sm:px-6 pt-16">
        <div className="editorial-grid">
          {/* Row 1: Hero (large) + About (contents) */}
          <HeroCard />
          <AboutCard />
          <PhotoCard />
          
          {/* Row 2: Experience (wide) */}
          <ExperienceCard />
          
          {/* Row 3: Education (medium) + Skills (small) */}
          <EducationCard />
          <SkillsCard />
          <SocialsCard />
          
          {/* Row 4: Tech Stack */}
          <TechStackCard />
          
          {/* Row 5: Hackathons (full width) */}
          <HackathonsCard />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-foreground py-8 mt-0">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              © 2025 Anand Raj — All Rights Reserved
            </p>
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Built with React & Tailwind
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
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