
import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="inline-block border-b-4 border-primary pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-8 after:h-1 after:bg-primary after:-translate-x-1/2 after:translate-y-full">{title}</span>
        </h2>
        <div className="animate-fade-in">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
