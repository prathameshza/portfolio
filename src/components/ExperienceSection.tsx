
import React from "react";
import Section from "./Section";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="max-w-3xl mx-auto">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="ml-6 space-y-4">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold">Associate IT Consultant</h3>
                <p className="text-primary font-medium">ITC Infotech</p>
              </div>
              <div className="text-sm text-foreground/70 flex flex-col items-end">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Aug 2024 - Present</span>
                </div>
                <div className="flex items-center mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Pune, Maharashtra</span>
                </div>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Developed and tested ReactJS-based user interfaces, ensuring seamless integration with SpringBoot APIs.
              </li>
              <li>
                Deployed user stories to AzureDevOps and ensured integration with backend systems.
              </li>
              <li>
                Collaborated with BAs to understand client requirements, designed APIs, and resolved reported bugs promptly.
              </li>
              <li>
                Collaborated with cross-functional teams, ensuring continuous improvement and timely delivery of the features.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
