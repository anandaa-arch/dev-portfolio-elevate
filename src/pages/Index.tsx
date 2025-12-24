import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // SEO
  useEffect(() => {
    document.title = "Anand Raj | Full-Stack & Web3 Developer";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Engineering student and full-stack developer specializing in React, Next.js, and Web3/blockchain development. Award-winning solutions at Avalanche hackathons.");
    }
  }, []);

  return (
    <main className="relative bg-background text-foreground min-h-screen noise">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
