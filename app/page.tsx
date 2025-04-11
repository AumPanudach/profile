import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Home() {
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
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-8 p-6 pt-0">
        {/* Profile Introduction Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="relative w-40 h-40 overflow-hidden rounded-full border-4 border-primary/20">
            <Image
              src="/profile-image.jpg"
              alt="Profile picture"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-4xl font-bold">John Doe</h1>
            <h2 className="text-2xl text-primary">Full Stack Developer</h2>
            <p className="text-lg max-w-2xl">
              Welcome to my personal portfolio! I'm a passionate developer with expertise in 
              React, Next.js, and TypeScript. With over 5 years of experience building 
              web applications, I focus on creating beautiful, responsive, and user-friendly 
              interfaces that deliver exceptional user experiences.
            </p>
            <div className="flex gap-4 mt-2 justify-center md:justify-start">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Contact Me
              </button>
              <button className="px-6 py-2 border border-input rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                View Resume
              </button>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
          <div className="grid auto-rows-min gap-6 md:grid-cols-3">
            <div className="flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors">
              <div className="aspect-video relative">
                <Image 
                  src="/project1.jpg" 
                  alt="Project 1" 
                  fill 
                  style={{ objectFit: "cover" }} 
                  className="bg-muted" 
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium">E-commerce Platform</h3>
                <p className="text-muted-foreground mt-2">A modern shopping experience built with Next.js and Stripe integration.</p>
              </div>
            </div>
            <div className="flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors">
              <div className="aspect-video relative">
                <Image 
                  src="/project2.jpg" 
                  alt="Project 2" 
                  fill 
                  style={{ objectFit: "cover" }} 
                  className="bg-muted" 
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium">AI Dashboard</h3>
                <p className="text-muted-foreground mt-2">Data visualization dashboard for AI metrics with real-time updates.</p>
              </div>
            </div>
            <div className="flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors">
              <div className="aspect-video relative">
                <Image 
                  src="/project3.jpg" 
                  alt="Project 3" 
                  fill 
                  style={{ objectFit: "cover" }} 
                  className="bg-muted" 
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium">Social Media App</h3>
                <p className="text-muted-foreground mt-2">Feature-rich social platform with real-time messaging and content sharing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="flex flex-col gap-4 bg-card p-6 rounded-xl border border-border">
          <h2 className="text-3xl font-semibold">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {["React", "TypeScript", "Next.js", "Node.js", "TailwindCSS", "PostgreSQL", "GraphQL", "AWS"].map((skill) => (
              <div key={skill} className="px-4 py-2 bg-primary/10 rounded-md text-center">
                {skill}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
