
import React from "react";
import Section from "./Section";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

const EducationSection: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-12">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="ml-6 space-y-2">
              <div className="flex flex-wrap justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">BE - Artificial Intelligence and Data Science</h3>
                  <p className="text-primary font-medium">Ajeenkya D Y Patil School of Engineering</p>
                </div>
                <div className="text-sm text-foreground/70 flex flex-col items-end">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>2020 - 2024</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Pune, Maharashtra</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                <span className="font-medium">CGPA: 8.47/10.00</span>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="ml-6 space-y-2">
              <div className="flex flex-wrap justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">12th</h3>
                  <p className="text-primary font-medium">Namo Rims Jr College</p>
                </div>
                <div className="text-sm text-foreground/70 flex flex-col items-end">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>2020</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Pune, Maharashtra</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                <span className="font-medium">Percentage: 63.00/100.00 (MSBSHSE)</span>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="ml-6 space-y-2">
              <div className="flex flex-wrap justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">10th</h3>
                  <p className="text-primary font-medium">ARMY PUBLIC SCHOOL KHADAKWASLA</p>
                </div>
                <div className="text-sm text-foreground/70 flex flex-col items-end">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>2018</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Pune, Maharashtra</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                <span className="font-medium">Percentage: 78.00/100.00 (CBSE)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EducationSection;
