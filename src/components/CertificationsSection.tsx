
import React from "react";
import Section from "./Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CertificationProps {
  title: string;
  issuer: string;
  date?: string;
}

const Certification: React.FC<CertificationProps> = ({ title, issuer, date }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <p className="text-foreground/70 text-sm">{issuer}</p>
          {date && <Badge variant="outline">{date}</Badge>}
        </div>
      </CardContent>
    </Card>
  );
};

const CertificationsSection: React.FC = () => {
  const certifications: CertificationProps[] = [
    {
      title: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
      issuer: "Microsoft"
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft"
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "AWS Academy"
    },
    {
      title: "AWS Academy Graduate - Machine Learning Foundations",
      issuer: "AWS Academy"
    }
  ];

  return (
    <Section id="certifications" title="Certifications">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {certifications.map((certification) => (
          <Certification
            key={certification.title}
            title={certification.title}
            issuer={certification.issuer}
            date={certification.date}
          />
        ))}
      </div>
    </Section>
  );
};

export default CertificationsSection;
