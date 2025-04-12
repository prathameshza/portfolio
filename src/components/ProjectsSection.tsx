
import React from "react";
import Section from "./Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import TechBadge from "./TechBadge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string[];
  techStack: string[];
  date: string;
  link?: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, techStack, date, link }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="flex items-center text-sm text-foreground/70">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
          <div className="space-y-2">
            {description.map((desc, index) => (
              <p key={index} className="text-foreground/80">{desc}</p>
            ))}
          </div>
        </div>
      </CardContent>
      {link && (
        <CardFooter>
          <Button asChild variant="outline" size="sm" className="w-full">
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <span>View Project</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

const ProjectsSection: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "Agri 360",
      description: [
        "A multi-modular project which involved user access management and user's inventory management for different agricultural operations.",
        "Its main objective were to create a modern user interface for the legacy system used by the client for their back office users and add translations related to different languages mainly English, Portuguese.",
        "Actively developed User Stories for the Growing module of Agri 360 in Sprint methodology.",
        "Configured a CI pipeline to automate the build, testing, and deployment process, ensuring continuous integration and smooth updates.",
        "Maintained development and testing environment for all the weekly updates of the application."
      ],
      techStack: ["React.JS", "Node.JS", "AzureDevOps", "Git", "REST API", "Material UI"],
      date: "Jan 2025"
    },
    {
      title: "ChatAI",
      description: [
        "Developed a chatbot interface with the APIs from Google's Gemini chat and vision model.",
        "Key functionalities includes, chat, image generation, image and PDF summarization.",
        "A collaborative final year project built with a team of four members."
      ],
      techStack: ["Python", "LLM", "Streamlit", "GenAI"],
      date: "May 2023"
    },
    {
      title: "Hindi OCR AI model",
      description: [
        "Developed an OCR model by fine-tuning TrOCR model with a custom created Hindi text and images pair dataset.",
        "Successfully achieved approx 99 percent accuracy on the training dataset.",
        "This OCR model though following the TrOCR architecture was tweaked for Hindi dataset where for vision encoder deit-base and for decoder bert-base models were used."
      ],
      techStack: ["Python", "PyTorch", "Deep Learning"],
      date: "April 2023",
      link: "https://www.kaggle.com/code/prathmeshzade/trocr-hi" // Replace with actual project link when available
    }
  ];

  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
