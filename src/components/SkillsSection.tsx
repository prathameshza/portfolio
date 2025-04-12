
import React from "react";
import Section from "./Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategoryProps[] = [
    {
      title: "Front-End Development",
      skills: ["React.js", "Next.js", "HTML/CSS/JS", "Material UI", "SOLID Principle"]
    },
    {
      title: "Back-End & DevOps",
      skills: ["Node.JS", "REST API", "Git", "CI/CD", "Docker", "SQL/SSMS", "Postman"]
    },
    {
      title: "Cloud Technologies",
      skills: ["Azure", "AWS"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["Python", "PyTorch", "TensorFlow", "Keras", "Flask"]
    }
  ];

  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
