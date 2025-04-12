
import React from "react";
import Section from "./Section";

const AboutSection: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-6 gap-8">
        <div className="md:col-span-4 md:col-start-2">
          <div className="space-y-6 text-lg">
            <p>
              I'm a Software Developer with expertise in full stack development, currently working as an Associate IT Consultant at ITC Infotech. My professional journey is driven by a passion for creating elegant, efficient, and user-friendly applications.
            </p>
            <p>
              I specialize in React.js, Node.js, and have a growing interest in AI and machine learning technologies. With a BE in Artificial Intelligence and Data Science, I bring a unique perspective to development projects, combining strong technical skills with analytical thinking.
            </p>
            <p>
              My experience includes developing and testing ReactJS-based user interfaces, ensuring seamless integration with SpringBoot APIs, and collaborating with cross-functional teams to deliver high-quality solutions. I'm committed to continuous learning and staying current with emerging technologies.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and expanding my knowledge in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
