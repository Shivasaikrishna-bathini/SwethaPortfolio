import { useEffect } from "react";
import CustomCursor from "@/components/ui/custom-cursor";
import AnimatedBackground from "@/components/ui/animated-background";
import FloatingCogs from "@/components/ui/floating-cogs";
import Navbar from "@/components/ui/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";

export default function Portfolio() {
  useEffect(() => {
    // Fade in sections on scroll
    const sections = document.querySelectorAll('.fade-in-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <AnimatedBackground />
      <FloatingCogs />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Sai Sri Swetha Battu. Built with <span className="text-primary">❤</span> and <span className="text-secondary">AI</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
