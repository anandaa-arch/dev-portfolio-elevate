import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { projects } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  "Web3": "text-primary",
  "AI/ML": "text-secondary",
  "Full-Stack": "text-green-400",
  "DevOps": "text-orange-400",
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group p-6 rounded-2xl glass hover-lift relative overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <Folder className="text-primary" size={24} />
        </div>
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          {project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <span className={`text-xs font-mono ${categoryColors[project.category] || 'text-primary'}`}>
          {project.category}
        </span>
        <h3 className="text-xl font-heading font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
      </div>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Impact */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-xs text-primary font-medium">Impact:</span>
        <span className="text-xs text-muted-foreground">{project.impact}</span>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded bg-muted/50 text-muted-foreground"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 5 && (
          <span className="px-2 py-1 text-xs rounded bg-muted/50 text-muted-foreground">
            +{project.techStack.length - 5}
          </span>
        )}
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", ...new Set(projects.map((p) => p.category))];
  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 cyber-line" />
      <div className="absolute bottom-1/2 right-0 w-64 h-64 bg-glow blur-3xl opacity-20" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Featured Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  filter === cat
                    ? "bg-gradient-primary text-primary-foreground"
                    : "glass hover:bg-muted/50"
                }`}
              >
                {cat === "all" ? "All Projects" : cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/anandaa-arch?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass hover:bg-muted/50 transition-colors font-medium"
            >
              <Github size={18} />
              View All on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
