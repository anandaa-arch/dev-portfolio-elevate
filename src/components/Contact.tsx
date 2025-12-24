import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-7xl font-heading text-foreground mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-foreground/60 mb-12 max-w-xl mx-auto">
            I'm currently looking for internship opportunities and exciting projects. 
            Let's build something amazing together!
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.a
              href="mailto:workmahto24@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-card/50 hover-lift group"
            >
              <Mail className="text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" size={28} />
              <p className="text-sm text-foreground/60 mb-1">Email</p>
              <p className="text-foreground text-sm font-medium">workmahto24@gmail.com</p>
            </motion.a>

            <motion.a
              href="tel:+919162378361"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl bg-card/50 hover-lift group"
            >
              <Phone className="text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" size={28} />
              <p className="text-sm text-foreground/60 mb-1">Phone</p>
              <p className="text-foreground text-sm font-medium">+91-9162378361</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl bg-card/50"
            >
              <MapPin className="text-primary mb-4 mx-auto" size={28} />
              <p className="text-sm text-foreground/60 mb-1">Location</p>
              <p className="text-foreground text-sm font-medium">Pune, Maharashtra</p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <a
              href="mailto:workmahto24@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded hover:shadow-glow transition-all duration-300"
            >
              <Send size={18} />
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
              className="social-icon w-12 h-12"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/anandraj"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-12 h-12"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:workmahto24@gmail.com"
              className="social-icon w-12 h-12"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
