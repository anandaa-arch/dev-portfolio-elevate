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
    <main className="min-h-screen w-full bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-background border-b border-foreground">
        <div className="w-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:h-14 flex flex-row items-center justify-between h-auto">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display text-base sm:text-lg font-bold uppercase tracking-tighter"
          >
            Anand Raj
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 sm:gap-6"
          >
            <a href="#experience" className="nav-link hidden sm:inline">Experience</a>
            <a href="#projects" className="nav-link hidden sm:inline">Projects</a>
            <a href="#contact" className="nav-link hidden sm:inline">Contact</a>
            <a
              href="mailto:workmahto24@gmail.com"
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-foreground text-background text-[10px] sm:text-xs font-mono uppercase tracking-wider hover:bg-foreground/90 transition-colors"
            >
              Hire Me
            </a>
          </motion.div>
        </div>
      </nav>


      {/* Editorial Grid */}
      <div className="w-full pt-16 px-4 sm:px-6 md:px-8">
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
      <footer className="w-full border-t border-foreground py-8 mt-0">
        <div className="w-full px-4 sm:px-6 md:px-8">
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