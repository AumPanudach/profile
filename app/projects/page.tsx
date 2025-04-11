import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with customer accounts, product catalog, cart functionality, and payment processing.",
      image: "/project1.jpg",
      tags: ["React", "Next.js", "Stripe", "MongoDB"],
      demoUrl: "https://ecommerce-demo.example.com",
      repoUrl: "https://github.com/johndoe/ecommerce",
      featured: true
    },
    {
      id: 2,
      title: "AI Dashboard",
      description: "An analytics dashboard for monitoring AI models performance with real-time data visualization and custom reporting tools.",
      image: "/project2.jpg",
      tags: ["TypeScript", "Chart.js", "Node.js", "WebSockets"],
      demoUrl: "https://ai-dashboard.example.com",
      repoUrl: "https://github.com/johndoe/ai-dashboard",
      featured: true
    },
    {
      id: 3,
      title: "Social Media App",
      description: "A mobile-first social platform with real-time messaging, content sharing, and user engagement analytics.",
      image: "/project3.jpg",
      tags: ["React Native", "Firebase", "Redux", "WebRTC"],
      demoUrl: "https://social-app.example.com",
      repoUrl: "https://github.com/johndoe/social-app",
      featured: true
    },
    {
      id: 4,
      title: "Budget Tracker",
      description: "Personal finance application for tracking expenses, income, and savings goals with custom categories and reporting.",
      image: "/project4.jpg",
      tags: ["Vue.js", "Vuex", "Express", "PostgreSQL"],
      demoUrl: "https://budget.example.com",
      repoUrl: "https://github.com/johndoe/budget-tracker"
    },
    {
      id: 5,
      title: "Task Management System",
      description: "Collaborative project management tool with task assignments, deadlines, file sharing, and progress tracking.",
      image: "/project5.jpg",
      tags: ["Angular", "RxJS", "NestJS", "MongoDB"],
      demoUrl: "https://tasks.example.com",
      repoUrl: "https://github.com/johndoe/task-manager"
    },
    {
      id: 6,
      title: "Weather Application",
      description: "Location-based weather forecast app with interactive maps, historical data, and custom alerts.",
      image: "/project6.jpg",
      tags: ["React", "Redux", "WeatherAPI", "Mapbox"],
      demoUrl: "https://weather.example.com",
      repoUrl: "https://github.com/johndoe/weather-app"
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
                <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-8 p-6 pt-0">
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">My Projects</h1>
            <p className="text-muted-foreground text-lg">A showcase of my development work and personal projects</p>
          </div>
          
          {/* Featured Projects Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects
                .filter(project => project.featured)
                .map(project => (
                  <div key={project.id} className="flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video relative">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        style={{ objectFit: "cover" }} 
                        className="bg-muted" 
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="default" className="bg-primary/70 backdrop-blur-sm">Featured</Badge>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col gap-4 flex-grow">
                      <h3 className="text-xl font-medium">{project.title}</h3>
                      <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 mt-4">
                        <Button size="sm" asChild className="flex-1">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild className="flex-1">
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          
          {/* All Projects Section */}
          <div className="flex flex-col gap-4 mt-6">
            <h2 className="text-2xl font-semibold">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects
                .filter(project => !project.featured)
                .map(project => (
                  <div key={project.id} className="flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video relative">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        style={{ objectFit: "cover" }} 
                        className="bg-muted" 
                      />
                    </div>
                    <div className="p-5 flex flex-col gap-4 flex-grow">
                      <h3 className="text-xl font-medium">{project.title}</h3>
                      <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 mt-4">
                        <Button size="sm" asChild className="flex-1">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild className="flex-1">
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}