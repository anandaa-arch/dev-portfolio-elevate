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
      className="section-full py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-heading text-foreground mb-4">
            PORTFOLIO
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Selected projects showcasing full-stack development, Web3 solutions, and AI integrations
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-medium rounded transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card/50 text-foreground/70 hover:text-foreground hover:bg-card"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative rounded-xl overflow-hidden bg-card hover-lift"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded bg-primary/90 text-primary-foreground">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded bg-muted text-foreground/60">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
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
          className="text-center mt-12"
        >
          <a
            href="https://github.com/anandaa-arch?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300"
          >
            <span>View all projects on GitHub</span>
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      {/* Corner Expand Icon */}
      <div className="corner-icon" />
    </section>
  );
};

export default Portfolio;
