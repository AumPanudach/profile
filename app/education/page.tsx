import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Building, Calendar, Award, BookOpen } from "lucide-react";

export default function EducationPage() {
  // Education data
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Thai University",
      location: "Bangkok, Thailand",
      startYear: 2016,
      endYear: 2018,
      description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Neural Network Approaches to Natural Language Processing in Thai Language'.",
      achievements: ["Graduated with Honors", "Research Scholarship Recipient", "Best Thesis Award"],
      courses: ["Advanced Algorithm Design", "Machine Learning", "Computer Vision", "Natural Language Processing"],
      logo: "/thai-university.png"
    },
    {
      degree: "Bachelor of Engineering in Software Engineering",
      institution: "Bangkok Technical Institute",
      location: "Bangkok, Thailand",
      startYear: 2012,
      endYear: 2016,
      description: "Core focus on software development methodologies, programming paradigms, and system design principles.",
      achievements: ["First Class Honors", "Dean's List all semesters", "Programming Contest Winner"],
      courses: ["Data Structures", "Database Systems", "Object-Oriented Programming", "Web Development"],
      logo: "/bti-logo.png"
    },
    {
      degree: "Professional Certification in Full-Stack Development",
      institution: "Tech Academy Online",
      location: "Online",
      startYear: 2019,
      endYear: 2019,
      description: "Intensive 6-month program focused on modern web development technologies and practices.",
      achievements: ["Top Student Award", "Capstone Project Excellence"],
      courses: ["React.js", "Node.js", "MongoDB", "AWS Deployment"],
      logo: "/tech-academy.png"
    }
  ];

  // Certifications
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
      expires: "2025",
      credentialId: "AWS-123456",
      logo: "/aws-cert.png"
    },
    {
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "2021",
      expires: "2024",
      credentialId: "MSFT-789012",
      logo: "/microsoft-cert.png"
    },
    {
      name: "Google Professional Cloud Developer",
      issuer: "Google",
      date: "2023",
      expires: "2026",
      credentialId: "GCP-345678",
      logo: "/google-cert.png"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      expires: "2025",
      credentialId: "CKA-901234",
      logo: "/kubernetes-cert.png"
    }
  ];

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/education">Education</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-8 p-6 pt-0">
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Education</h1>
            <p className="text-muted-foreground text-lg">My academic background and qualifications</p>
          </div>
          
          {/* Academic Education */}
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold">Academic Background</h2>
            <div className="flex flex-col gap-10 relative before:absolute before:h-full before:w-0.5 before:bg-border before:left-[17px] before:ml-px">
              {education.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="relative z-10">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">{item.degree}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <Building className="w-4 h-4" />
                            <span>{item.institution}, {item.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground bg-secondary px-3 py-1 rounded-md whitespace-nowrap">
                          <Calendar className="w-4 h-4" />
                          <span>{item.startYear} - {item.endYear}</span>
                        </div>
                      </div>

                      <p className="mb-4">{item.description}</p>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          Achievements
                        </h4>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-muted-foreground">{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-primary" />
                          Key Courses
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.courses.map((course, idx) => (
                            <Badge key={idx} variant="outline">{course}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="flex flex-col gap-6 mt-6">
            <h2 className="text-2xl font-semibold">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="flex">
                  <CardContent className="p-6 flex flex-1 gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-md flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <h3 className="text-lg font-medium">{cert.name}</h3>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                      <div className="mt-2 flex items-center gap-6">
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                          <span>Issued: {cert.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                          <span>Expires: {cert.expires}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Credential ID: {cert.credentialId}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </section>
      </div>
    </>
  );
}