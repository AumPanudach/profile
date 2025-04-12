"use client";

import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  // Animation variants
  const pageTransition = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const badgeContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  // Project data
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce solution with product management, cart functionality, payment processing, and order tracking.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      demoUrl: "https://ecommerce-example.com",
      githubUrl: "https://github.com/johndoe/ecommerce",
      completedDate: "June 2023",
      featured: true,
      screenshots: [
        "/ecommerce-screenshot1.jpg",
        "/ecommerce-screenshot2.jpg",
        "/ecommerce-screenshot3.jpg"
      ]
    },
    {
      title: "AI Dashboard",
      description: "An analytics dashboard for visualizing machine learning models performance with real-time data processing and interactive charts.",
      image: "/project2.jpg",
      technologies: ["Next.js", "TypeScript", "D3.js", "TensorFlow.js", "Firebase"],
      demoUrl: "https://ai-dashboard-example.com",
      githubUrl: "https://github.com/johndoe/ai-dashboard",
      completedDate: "March 2023",
      featured: true,
      screenshots: [
        "/dashboard-screenshot1.jpg",
        "/dashboard-screenshot2.jpg",
        "/dashboard-screenshot3.jpg"
      ]
    },
    {
      title: "Social Media App",
      description: "A social networking platform featuring user profiles, posts, comments, real-time chat, and content recommendation.",
      image: "/project3.jpg",
      technologies: ["React Native", "GraphQL", "Apollo", "PostgreSQL", "Redis"],
      demoUrl: "https://social-app-example.com",
      githubUrl: "https://github.com/johndoe/social-app",
      completedDate: "November 2022",
      featured: true,
      screenshots: [
        "/social-screenshot1.jpg",
        "/social-screenshot2.jpg",
        "/social-screenshot3.jpg"
      ]
    },
    {
      title: "Expense Tracker",
      description: "A personal finance application that helps users track expenses, set budgets, and visualize spending patterns.",
      image: "/project4.jpg",
      technologies: ["Vue.js", "Express", "MySQL", "Chart.js"],
      demoUrl: "https://expense-tracker-example.com",
      githubUrl: "https://github.com/johndoe/expense-tracker",
      completedDate: "August 2022",
      screenshots: [
        "/expense-screenshot1.jpg",
        "/expense-screenshot2.jpg" 
      ]
    },
    {
      title: "Task Management System",
      description: "A project management tool with task assignment, progress tracking, and team collaboration features.",
      image: "/project5.jpg",
      technologies: ["Angular", "Django", "PostgreSQL", "WebSockets"],
      demoUrl: "https://task-manager-example.com",
      githubUrl: "https://github.com/johndoe/task-manager",
      completedDate: "May 2022",
      screenshots: [
        "/task-screenshot1.jpg",
        "/task-screenshot2.jpg"
      ]
    },
    {
      title: "Weather Application",
      description: "A weather forecast application with location-based services, animated visualizations, and historical data.",
      image: "/project6.jpg",
      technologies: ["React", "Express", "OpenWeather API", "Mapbox"],
      demoUrl: "https://weather-app-example.com", 
      githubUrl: "https://github.com/johndoe/weather-app",
      completedDate: "February 2022",
      screenshots: [
        "/weather-screenshot1.jpg",
        "/weather-screenshot2.jpg"
      ]
    }
  ];

  return (
    <>
      <PageHeader 
        breadcrumbItems={[
          { title: "Projects", href: "/projects", isCurrentPage: true }
        ]}
      />
      
      <motion.div 
        className="flex flex-1 flex-col gap-8 p-6 pt-0"
        variants={pageTransition}
        initial="hidden"
        animate="visible"
      >
        <motion.section 
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Projects</h1>
            <p className="text-muted-foreground text-lg">Explore my latest work and side projects</p>
          </div>
          
          {/* Featured Projects */}
          <div className="flex flex-col gap-6">
            <motion.h2 
              className="text-2xl font-semibold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {projects.filter(project => project.featured).map((project, index) => (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="h-full flex flex-col overflow-hidden">
                    <div className="relative h-52 overflow-hidden group">
                      <motion.div
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }}
                        className="w-full h-full"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          style={{ objectFit: "cover" }}
                          className="transition-transform"
                        />
                      </motion.div>
                      
                      {/* Image overlay with screenshots */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <div className="flex gap-2 overflow-hidden">
                          {project.screenshots && project.screenshots.slice(0, 3).map((screenshot, idx) => (
                            <motion.div 
                              key={idx} 
                              className="relative w-20 h-20 rounded-md overflow-hidden"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Image
                                src={screenshot}
                                alt={`${project.title} screenshot ${idx + 1}`}
                                fill
                                style={{ objectFit: "cover" }}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <CardContent className="flex-1 p-5 flex flex-col">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                          <Calendar className="w-3 h-3" />
                          <span>{project.completedDate}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 text-sm flex-grow">{project.description}</p>
                      
                      <motion.div 
                        className="flex flex-wrap gap-1.5 mb-4"
                        variants={badgeContainer}
                        initial="hidden"
                        animate="visible"
                      >
                        {project.technologies.map((tech, idx) => (
                          <motion.span 
                            key={idx}
                            variants={badgeVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Badge variant="outline" className="text-xs">{tech}</Badge>
                          </motion.span>
                        ))}
                      </motion.div>
                      
                      <div className="flex gap-2 mt-auto">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="sm" className="gap-1">
                            <ExternalLink className="w-3.5 h-3.5" />
                            Demo
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="sm" className="gap-1">
                            <Github className="w-3.5 h-3.5" />
                            GitHub
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Other Projects */}
          <div className="flex flex-col gap-6">
            <motion.h2 
              className="text-2xl font-semibold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Other Projects
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {projects.filter(project => !project.featured).map((project, index) => (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="h-full flex flex-col overflow-hidden">
                    <div className="relative h-52 overflow-hidden group">
                      <motion.div
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }}
                        className="w-full h-full"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          style={{ objectFit: "cover" }}
                          className="transition-transform"
                        />
                      </motion.div>
                      
                      {/* Image overlay with screenshots */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <div className="flex gap-2 overflow-hidden">
                          {project.screenshots && project.screenshots.slice(0, 3).map((screenshot, idx) => (
                            <motion.div 
                              key={idx} 
                              className="relative w-20 h-20 rounded-md overflow-hidden"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Image
                                src={screenshot}
                                alt={`${project.title} screenshot ${idx + 1}`}
                                fill
                                style={{ objectFit: "cover" }}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <CardContent className="flex-1 p-5 flex flex-col">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                          <Calendar className="w-3 h-3" />
                          <span>{project.completedDate}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 text-sm flex-grow">{project.description}</p>
                      
                      <motion.div 
                        className="flex flex-wrap gap-1.5 mb-4"
                        variants={badgeContainer}
                        initial="hidden"
                        animate="visible"
                      >
                        {project.technologies.map((tech, idx) => (
                          <motion.span 
                            key={idx}
                            variants={badgeVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Badge variant="outline" className="text-xs">{tech}</Badge>
                          </motion.span>
                        ))}
                      </motion.div>
                      
                      <div className="flex gap-2 mt-auto">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="sm" className="gap-1">
                            <ExternalLink className="w-3.5 h-3.5" />
                            Demo
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="sm" className="gap-1">
                            <Github className="w-3.5 h-3.5" />
                            GitHub
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
}