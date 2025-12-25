import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 relative overflow-hidden editorial-section"
    >
      <div className="container mx-auto px-6">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-border/20 pb-8"
        >
          <div className="flex items-end justify-between">
            <h2 className="editorial-title">
              GET IN TOUCH
            </h2>
            <span className="text-editorial-muted hidden md:block">Let's Connect</span>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-foreground/50 mb-16 max-w-xl text-center mx-auto"
          >
            I'm currently looking for internship opportunities and exciting projects. 
            Let's build something amazing together.
          </motion.p>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-3 gap-0 editorial-grid mb-16">
            <motion.a
              href="mailto:workmahto24@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="p-8 editorial-grid-item group hover:bg-card/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <Mail className="text-foreground/30 group-hover:text-primary transition-colors" size={24} />
                <ArrowUpRight className="text-foreground/20 group-hover:text-primary transition-colors" size={16} />
              </div>
              <p className="text-editorial-muted mb-2">Email</p>
              <p className="text-foreground text-sm font-medium">workmahto24@gmail.com</p>
            </motion.a>

            <motion.a
              href="tel:+919162378361"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="p-8 editorial-grid-item group hover:bg-card/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <Phone className="text-foreground/30 group-hover:text-primary transition-colors" size={24} />
                <ArrowUpRight className="text-foreground/20 group-hover:text-primary transition-colors" size={16} />
              </div>
              <p className="text-editorial-muted mb-2">Phone</p>
              <p className="text-foreground text-sm font-medium">+91-9162378361</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="p-8 border-r-0"
            >
              <div className="flex items-start justify-between mb-6">
                <MapPin className="text-foreground/30" size={24} />
              </div>
              <p className="text-editorial-muted mb-2">Location</p>
              <p className="text-foreground text-sm font-medium">Pune, Maharashtra</p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mb-16"
          >
            <a
              href="mailto:workmahto24@gmail.com"
              className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-primary-foreground font-medium text-xs uppercase tracking-widest hover:shadow-glow transition-all duration-300"
            >
              <Send size={16} />
              Say Hello
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <a
              href="https://github.com/anandaa-arch"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/anandraj"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:workmahto24@gmail.com"
              className="social-icon"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Corner decoration */}
      <div className="corner-icon" />
    </section>
  );
};

export default Contact;