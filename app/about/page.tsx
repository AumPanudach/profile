import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Globe, Calendar } from "lucide-react";

export default function AboutPage() {
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
                <BreadcrumbLink href="/about">About</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-8 p-6 pt-0">
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-muted-foreground text-lg">Get to know me better</p>
          </div>
          
          {/* About Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Image and Personal Details */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3">
              <div className="relative aspect-square overflow-hidden rounded-xl border-4 border-primary/20">
                <Image
                  src="/profile-image.jpg"
                  alt="Profile picture"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              
              <Card>
                <CardContent className="p-6 flex flex-col gap-4">
                  <h3 className="text-xl font-semibold">Personal Details</h3>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p>Bangkok, Thailand</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p>john@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p>+66 89 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Website</p>
                      <p>www.johndoe.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Birthday</p>
                      <p>January 15, 1990</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column - Bio and Interests */}
            <div className="flex flex-col gap-8 w-full lg:w-2/3">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold">Biography</h2>
                <div className="space-y-4">
                  <p>
                    Hello! I'm John Doe, a passionate and creative full-stack developer with over 5 years of experience in building web and mobile applications. I specialize in React, Next.js, and TypeScript, focusing on creating intuitive user interfaces and robust backend systems.
                  </p>
                  <p>
                    After graduating with a degree in Computer Science from Thai University in 2018, I joined TechCorp where I helped develop enterprise applications for clients across Asia. In 2020, I transitioned to a senior role at InnovateTH, leading a team of 5 developers on high-impact projects for fintech startups.
                  </p>
                  <p>
                    My approach to development combines technical expertise with strong problem-solving abilities. I believe in writing clean, maintainable code and staying current with emerging technologies. When I'm not coding, you can find me exploring new hiking trails, experimenting with photography, or contributing to open source projects.
                  </p>
                  <p>
                    I'm always open to new challenges and opportunities to create impactful digital experiences. Feel free to reach out if you'd like to collaborate or just have a chat about technology!
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold">What I Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium">Frontend Development</h3>
                      <p className="text-muted-foreground mt-2">Creating responsive and intuitive user interfaces with React, Next.js, and modern CSS frameworks.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium">Backend Development</h3>
                      <p className="text-muted-foreground mt-2">Building scalable APIs and services using Node.js, Express, and various database technologies.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium">UI/UX Design</h3>
                      <p className="text-muted-foreground mt-2">Designing user-centric interfaces that prioritize usability, accessibility, and visual appeal.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium">Mobile Development</h3>
                      <p className="text-muted-foreground mt-2">Creating cross-platform mobile applications using React Native and related technologies.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold">Interests</h2>
                <div className="flex flex-wrap gap-2">
                  {["Photography", "Hiking", "Reading", "Chess", "Travel", "Music", "Cooking", "Open Source"].map((interest) => (
                    <Badge key={interest} variant="outline" className="px-3 py-1 text-sm">{interest}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}