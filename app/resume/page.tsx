import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Calendar, 
  Download, 
  Building,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function ResumePage() {
  // Work experience data
  const workExperience = [
    {
      position: "Senior Full Stack Developer",
      company: "InnovateTH",
      location: "Bangkok, Thailand",
      startDate: "Jan 2020",
      endDate: "Present",
      description: "Leading a team of 5 developers in designing and implementing full-stack web applications for fintech startups and enterprise clients.",
      responsibilities: [
        "Architected and implemented scalable backend services using Node.js and Express",
        "Designed and developed responsive frontend interfaces using React and Next.js",
        "Led Agile development processes and mentored junior developers",
        "Implemented CI/CD pipelines and containerization strategies with Docker and Kubernetes",
        "Optimized application performance and database queries"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"]
    },
    {
      position: "Full Stack Developer",
      company: "TechCorp",
      location: "Bangkok, Thailand",
      startDate: "Jun 2018",
      endDate: "Dec 2019",
      description: "Developed and maintained web applications for enterprise clients across Asia.",
      responsibilities: [
        "Built RESTful APIs using Node.js and Express",
        "Developed frontend components with React and Redux",
        "Implemented authentication and authorization systems",
        "Collaborated with UI/UX designers to implement responsive designs",
        "Participated in code reviews and testing procedures"
      ],
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Express", "Git"]
    },
    {
      position: "Junior Web Developer",
      company: "Digital Solutions Co.",
      location: "Chiang Mai, Thailand",
      startDate: "Sep 2016",
      endDate: "May 2018",
      description: "Assisted in the development of client websites and internal tools.",
      responsibilities: [
        "Created responsive websites using HTML, CSS, and JavaScript",
        "Implemented backend functionality with PHP and MySQL",
        "Maintained existing websites and fixed bugs",
        "Collaborated with designers to implement UI mockups",
        "Documented code and created user guides"
      ],
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "WordPress"]
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
                <BreadcrumbLink href="/resume">Resume</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-8 p-6 pt-0">
        <section className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold">Resume</h1>
              <p className="text-muted-foreground text-lg">My professional journey and experience</p>
            </div>
            <Button className="gap-2 w-full sm:w-auto">
              <Download className="h-4 w-4" />
              Download PDF Resume
            </Button>
          </div>
          
          {/* Professional Summary */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
              <p className="text-lg">
                Full Stack Developer with over 5 years of experience in building web and mobile applications. 
                Expertise in React, Next.js, Node.js, and TypeScript, with a focus on creating 
                intuitive UI experiences and scalable backend systems. Passionate about clean code, 
                performance optimization, and staying current with emerging technologies.
              </p>
            </CardContent>
          </Card>
          
          {/* Work Experience */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">Work Experience</h2>
            <div className="flex flex-col gap-6 relative before:absolute before:h-full before:w-0.5 before:bg-border before:left-[17px] before:ml-px">
              {workExperience.map((job, index) => (
                <div key={index} className="flex gap-6">
                  <div className="relative z-10">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <Briefcase className="w-5 h-5" />
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">{job.position}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <Building className="w-4 h-4" />
                            <span>{job.company}</span>
                            <span className="w-1 h-1 rounded-full bg-muted-foreground inline-block"></span>
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground bg-secondary px-3 py-1 rounded-md whitespace-nowrap">
                          <Calendar className="w-4 h-4" />
                          <span>{job.startDate} - {job.endDate}</span>
                        </div>
                      </div>

                      <p className="mb-4">{job.description}</p>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex gap-2">
                              <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Skills Summary</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Redux", "TailwindCSS", "HTML/CSS", "JavaScript"].map((skill) => (
                      <Badge key={skill} className="text-sm">{skill}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express", "GraphQL", "REST APIs", "PHP", "Python"].map((skill) => (
                      <Badge key={skill} className="text-sm">{skill}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Database</h3>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"].map((skill) => (
                      <Badge key={skill} className="text-sm">{skill}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">DevOps & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "Docker", "Kubernetes", "Git", "CI/CD", "Jest", "Webpack"].map((skill) => (
                      <Badge key={skill} className="text-sm">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Summary */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Master of Science in Computer Science</h3>
                  <p className="text-muted-foreground">Thai University, Bangkok • 2016 - 2018</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Bachelor of Engineering in Software Engineering</h3>
                  <p className="text-muted-foreground">Bangkok Technical Institute • 2012 - 2016</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-4">
            <Button className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF Resume
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}