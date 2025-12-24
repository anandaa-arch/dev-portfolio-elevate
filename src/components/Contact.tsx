import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 cyber-line" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-glow blur-3xl opacity-30" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Header */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="text-primary font-mono text-sm"
          >
            06. What's Next?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4 mb-6"
          >
            Let's Build Something{" "}
            <span className="text-gradient">Amazing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            I'm currently looking for internship opportunities and exciting projects. 
            Whether you have a question, want to collaborate, or just want to say hi—my inbox is always open!
          </motion.p>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-4 mb-10"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-6 rounded-xl glass hover-lift group"
            >
              <Mail className="text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" size={28} />
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-foreground font-medium text-sm mt-1 break-all">{personalInfo.email}</p>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="p-6 rounded-xl glass hover-lift group"
            >
              <Phone className="text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" size={28} />
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="text-foreground font-medium text-sm mt-1">{personalInfo.phone}</p>
            </a>

            <div className="p-6 rounded-xl glass">
              <MapPin className="text-primary mb-3 mx-auto" size={28} />
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="text-foreground font-medium text-sm mt-1">{personalInfo.location}</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-300 group"
            >
              Say Hello
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl glass hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl glass hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-4 rounded-xl glass hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
