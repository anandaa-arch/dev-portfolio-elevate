import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Cross-Border Employee Verification DApp",
    category: "Web3",
    description: "Decentralized employee verification on Avalanche C-Chain with MetaMask integration. Sub-2 second transactions, 80% cost reduction.",
    tech: ["Solidity", "React", "Web3.js", "Avalanche", "IPFS"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    github: "https://github.com/anandaa-arch",
  },
  {
    id: 2,
    title: "Finance-LLM Platform",
    category: "AI/ML",
    description: "Intelligent financial analysis with Finance-LLM-13B, processing 1000+ daily data points. 60% faster response times.",
    tech: ["Next.js", "Python", "LLM", "MongoDB", "Scrapy"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    github: "https://github.com/anandaa-arch",
  },
  {
    id: 3,
    title: "Elderly Care Companion",
    category: "Healthcare",
    description: "Flask-based web app with AI-driven health monitoring, reminders, and multilingual chatbot for elderly care.",
    tech: ["Flask", "Python", "AI/ML", "NLP"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    github: "https://github.com/anandaa-arch",
  },
  {
    id: 4,
    title: "Transpiler - AI Code Converter",
    category: "DevOps",
    description: "Dockerized tool for cross-language code conversion with OpenAI-powered debugging. Secure sandboxed execution.",
    tech: ["Docker", "OpenAI", "Python", "Node.js"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    github: "https://github.com/anandaa-arch",
  },
];

const categories = ["All", "Web3", "AI/ML", "Healthcare", "DevOps"];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="section-full py-24 relative overflow-hidden editorial-section"
    >
      <div className="container mx-auto px-6">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-border/20 pb-8"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="editorial-title">
                PORTFOLIO
              </h2>
              <p className="text-foreground/40 text-sm mt-4 max-w-lg">
                Selected projects showcasing full-stack development, Web3 solutions, and AI integrations.
              </p>
            </div>
            <span className="text-editorial-muted">{projects.length} Projects</span>
          </div>
        </motion.div>

        {/* Category Filter - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-0 mb-16 border border-border/20"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 text-xs uppercase tracking-widest font-medium transition-all duration-300 border-r border-border/20 last:border-r-0 ${
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "bg-transparent text-foreground/50 hover:text-foreground hover:bg-card/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Editorial Style */}
        <div className="grid md:grid-cols-2 gap-0 editorial-grid">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group editorial-grid-item"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                
                {/* Number Overlay */}
                <span className="absolute top-4 left-4 text-6xl font-heading text-foreground/10 leading-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                {/* Category Badge */}
                <span className="absolute top-4 right-4 px-3 py-1.5 text-[10px] uppercase tracking-widest font-medium border border-foreground/30 text-foreground bg-background/80">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-lg font-heading text-foreground uppercase tracking-wide mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/50 text-xs leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="px-2 py-1 text-[10px] uppercase tracking-wider border border-border/20 text-foreground/40">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-foreground/50 hover:text-primary transition-colors"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-foreground/50 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-border/20"
        >
          <a
            href="https://github.com/anandaa-arch?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-primary text-xs uppercase tracking-widest hover:gap-5 transition-all duration-300"
          >
            <span>View all projects on GitHub</span>
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* Corner decoration */}
      <div className="corner-icon" />
    </section>
  );
};

export default Portfolio;