
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pb-16 pt-32"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
            Prathamesh Zade
          </h1>
          <h2 className="text-xl md:text-2xl text-foreground/80 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Software Developer | AI Enthusiast
          </h2>
          
          <div className="flex items-center justify-center space-x-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center text-sm text-foreground/70">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Pune, Maharashtra, India</span>
            </div>
            <div className="flex items-center text-sm text-foreground/70">
              <Phone className="h-4 w-4 mr-1" />
              <span>+91-8087544858</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <a
              href="https://www.linkedin.com/in/prathameshz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/80 hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/prathameshza"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/80 hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:prathameshzade8@gmail.com"
              className="p-2 text-foreground/80 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="pt-8 flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "800ms" }}>
            <Button asChild size="lg" className="transition-all">
              <a href="#projects">
                View Projects
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full opacity-75 hover:opacity-100"
          aria-label="Scroll down"
          asChild
        >
          <a href="#about">
            <ArrowDown className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
