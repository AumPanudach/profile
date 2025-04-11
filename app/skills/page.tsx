import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Layers,
  FileJson,
  Code2,
  ServerCog,
  LayoutGrid,
  Database,
  GanttChart,
  BrainCircuit,
  PenTool,
  Figma,
  Terminal,
  GitBranch,
  MessageCircle,
  UsersRound,
  Timer,
  ScrollText,
  Compass,
  Languages,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SkillsPage() {
  // Technical skills with level but without stars
  const technicalSkills = [
    { 
      name: "React", 
      icon: Layers, 
      level: "Expert",
      description: "Component architecture, hooks, state management, and performance optimization"
    },
    { 
      name: "TypeScript", 
      icon: FileJson, 
      level: "Expert",
      description: "Type systems, interfaces, generics, and advanced type patterns"
    },
    { 
      name: "Next.js", 
      icon: Code2, 
      level: "Advanced",
      description: "Server components, routing, data fetching, and optimizations"
    },
    { 
      name: "Node.js", 
      icon: ServerCog, 
      level: "Advanced",
      description: "API development, middleware, authentication, and performance tuning"
    },
    { 
      name: "TailwindCSS", 
      icon: LayoutGrid, 
      level: "Expert",
      description: "Responsive design, custom themes, and component styling"
    },
    { 
      name: "PostgreSQL", 
      icon: Database, 
      level: "Intermediate",
      description: "Database design, complex queries, and performance optimization"
    },
    { 
      name: "GraphQL", 
      icon: GanttChart, 
      level: "Intermediate",
      description: "Schema design, resolvers, and client implementation"
    },
    { 
      name: "AWS", 
      icon: BrainCircuit, 
      level: "Intermediate",
      description: "EC2, S3, Lambda, and deployment automation"
    },
  ];

  // Design skills
  const designSkills = [
    { 
      name: "UI Design", 
      icon: PenTool, 
      level: "Advanced",
      description: "Interface design, component systems, and visual hierarchy"
    },
    { 
      name: "Figma", 
      icon: Figma, 
      level: "Advanced",
      description: "Design systems, prototyping, and developer handoff"
    },
    { 
      name: "Responsive Design", 
      icon: LayoutGrid, 
      level: "Expert",
      description: "Adaptive layouts, media queries, and mobile-first approach"
    },
    { 
      name: "Wireframing", 
      icon: PenTool, 
      level: "Expert",
      description: "User flows, low and high fidelity mockups"
    },
  ];

  // Tools and other skills
  const otherSkills = [
    { 
      name: "Git", 
      icon: GitBranch, 
      level: "Expert",
      description: "Version control, branching strategies, and collaboration"
    },
    { 
      name: "Docker", 
      icon: ServerCog, 
      level: "Intermediate",
      description: "Containerization, Docker Compose, and orchestration"
    },
    { 
      name: "Linux", 
      icon: Terminal, 
      level: "Advanced",
      description: "Shell scripting, server management, and deployment"
    },
    { 
      name: "CI/CD", 
      icon: BrainCircuit, 
      level: "Advanced",
      description: "Pipeline automation, testing integration, and deployment strategies"
    },
  ];

  // Languages
  const languages = [
    { 
      name: "English", 
      level: "Professional",
      icon: Languages
    },
    { 
      name: "Thai", 
      level: "Native",
      icon: Languages
    },
    { 
      name: "Japanese", 
      level: "Intermediate",
      icon: Languages
    },
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
                <BreadcrumbLink href="/skills">Skills</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-8 p-6 pt-0">
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">My Skills</h1>
            <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
          </div>
          
          {/* Technical Skills Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((skill) => (
                <Card key={skill.name} className="overflow-hidden border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4 p-5">
                      <div className="p-3 bg-primary/10 rounded-md">
                        <skill.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="text-lg font-medium">{skill.name}</h3>
                          <Badge variant="outline" className="font-normal">{skill.level}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Design Skills Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Design Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {designSkills.map((skill) => (
                <Card key={skill.name} className="overflow-hidden border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4 p-5">
                      <div className="p-3 bg-primary/10 rounded-md">
                        <skill.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="text-lg font-medium">{skill.name}</h3>
                          <Badge variant="outline" className="font-normal">{skill.level}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Other Tools & Skills */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Tools & Other Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherSkills.map((skill) => (
                <Card key={skill.name} className="overflow-hidden border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4 p-5">
                      <div className="p-3 bg-primary/10 rounded-md">
                        <skill.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="text-lg font-medium">{skill.name}</h3>
                          <Badge variant="outline" className="font-normal">{skill.level}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Languages Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Languages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {languages.map((language) => (
                <Card key={language.name} className="overflow-hidden border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4 p-5">
                      <div className="p-3 bg-primary/10 rounded-md">
                        <language.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium">{language.name}</h3>
                          <Badge variant="outline" className="font-normal">{language.level}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Soft Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {name: "Team Collaboration", icon: UsersRound},
                {name: "Communication", icon: MessageCircle},
                {name: "Problem Solving", icon: Compass},
                {name: "Time Management", icon: Timer},
                {name: "Leadership", icon: UsersRound},
                {name: "Adaptability", icon: ScrollText}
              ].map((skill) => (
                <Card key={skill.name} className="overflow-hidden border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4 p-5">
                      <div className="p-3 bg-primary/10 rounded-md">
                        <skill.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">{skill.name}</h3>
                      </div>
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