import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Hackathons from "@/components/Hackathons";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Hackathons />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
