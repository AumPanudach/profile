"use client";

import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { 
  Users,
  MessageSquare,
  LightbulbIcon,
  Clock,
  BarChart3,
  Building,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import { 
  IconBrandMongodb,
  IconBrandGolang,
  IconBrandTypescript,
  IconBrandPython,
  IconSql,
  IconApi,
  IconBrandDocker,
  IconBrandLaravel,
  IconBrandMysql,
  IconBrandDjango,
  IconBrandNodejs,
  IconCoffee,
  IconBrandJavascript,
  IconBrandGithub,
 } from "@tabler/icons-react"

 import Link from "next/link";

export default function Home() {
  // Skills organized by category
  const skillsByCategory = {
    languages: [
      { name: "TypeScript", icon: <IconBrandTypescript className="w-5 h-5" /> },
      { name: "Go", icon: <IconBrandGolang className="w-5 h-5" /> },
      { name: "Python", icon: <IconBrandPython className="w-5 h-5" /> },
      { name: "SQL", icon: <IconSql className="w-5 h-5" /> },
      { name: "JavaScript", icon: <IconBrandJavascript className="w-5 h-5" /> },
      { name: "Java", icon: <IconCoffee className="w-5 h-5" /> },
    ],
    frameworks: [
      { name: "Node.js", icon: <IconBrandNodejs className="w-5 h-5" /> },
      { name: "Gin", icon: <IconBrandGolang className="w-5 h-5" /> },
      { name: "Laravel", icon: <IconBrandLaravel className="w-5 h-5" /> },
      { name: "Django", icon: <IconBrandDjango className="w-5 h-5" /> },
    ],
    databases: [
      { name: "SQL Server", icon: <IconSql className="w-5 h-5" /> },
      { name: "MongoDB", icon: <IconBrandMongodb className="w-5 h-5" /> },
      { name: "MySQL", icon: <IconBrandMysql className="w-5 h-5" /> },
    ],
    cloud: [
      { name: "RestAPI", icon: <IconApi className="w-5 h-5" /> },
      { name: "Docker", icon: <IconBrandDocker className="w-5 h-5" /> },
    ]
  };
  
  // Soft skills array with icons and descriptions
  const softSkills = [
    { 
      name: "Team Collaboration", 
      icon: <Users className="w-5 h-5" />,
      description: "Experienced in working with cross-functional teams and fostering collaborative environments."
    },
    { 
      name: "Communication", 
      icon: <MessageSquare className="w-5 h-5" />,
      description: "Clear and effective communication with clients, team members, and stakeholders."
    },
    { 
      name: "Problem Solving", 
      icon: <LightbulbIcon className="w-5 h-5" />,
      description: "Analytical approach to identifying issues and implementing effective solutions."
    },
    { 
      name: "Time Management", 
      icon: <Clock className="w-5 h-5" />,
      description: "Excellent ability to prioritize tasks and deliver projects on schedule."
    },
    { 
      name: "Leadership", 
      icon: <BarChart3 className="w-5 h-5" />,
      description: "Mentoring junior developers and leading small teams to project success."
    }
  ];

  // Work experience data
  const workExperience = [
    {
      position: "Backend Developer",
      company: "Biotec",
      location: "Pathum Thani, Thailand",
      period: "Nov 2024 - Feb 2025",
      description: "Participated in a 4-month cooperative internship as a Backend Developer, responsible for designing system architecture, contributing to architectural decisions, developing APIs, and collaborating with a team of 3 developers on high-impact fintech projects.",
      achievements: [
        "Django backend development",
        "MongoDB database management",
        "RESTful API design and implementation",
        "Docker for containerization",
      ]
    }
  ];

  // Project data
  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern shopping experience built with Next.js and Stripe integration.",
      image: "/project1.jpg",
      date: "June 2023",
      techStack: ["Next.js", "Express.js", "MongoDB", "RestAPI"],
      screenshots: ['/ecommerce-screenshot1.jpg', '/ecommerce-screenshot2.jpg', '/ecommerce-screenshot3.jpg'],
      githubLink: "#"
    },
    {
      id: 2,
      title: "AI Dashboard",
      description: "Data visualization dashboard for AI metrics with real-time updates.",
      image: "/project2.jpg",
      date: "March 2023",
      techStack: ["React.js", "Gin", "MySQL", "RestAPI"],
      screenshots: ['/dashboard-screenshot1.jpg', '/dashboard-screenshot2.jpg', '/dashboard-screenshot3.jpg'],
      githubLink: "#"
    },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <PageHeader />
      <div className="flex flex-1 flex-col gap-8 p-6 pt-0">
        {/* Profile Introduction Section */}
        <motion.section 
          className="flex flex-col md:flex-row gap-8 items-center md:items-start"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div 
            className="relative w-40 h-40 overflow-hidden rounded-full border-4 border-primary/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Profile picture"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="rounded-full"
            />
          </motion.div>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <motion.h1 
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Panudach Kongsomboon
            </motion.h1>
            <motion.h2 
              className="text-2xl text-primary"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Backend Developer
            </motion.h2>
            <motion.p 
              className="text-lg max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Welcome to my personal portfolio! I am Panudach Kongsomboon passionate developer with expertise in 
              Express.js, Gin and Django. With over 1 years of experience building 
              web applications, I focus on creating efficient back-end solutions that deliver exceptional user experiences.
            </motion.p>
            <motion.div 
              className="flex gap-4 mt-2 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href='/contact'>
                <motion.button 
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </Link>
              
              <div className="flex gap-2">
                <motion.button 
                  className="px-6 py-2 border border-input rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('/resume/panudach-resume.pdf', '_blank')}
                >
                  View Resume
                </motion.button>
                
                <motion.button 
                  className="px-4 py-2 border border-input rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume/panudach-resume.pdf';
                    link.download = 'Panudach-Kongsomboon-Resume.pdf';
                    link.click();
                  }}
                  title="Download Resume"
                >
                  📥
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold">Work Experience</h2>
          <motion.div 
            className="flex flex-col gap-6 mt-2"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {workExperience.map((experience, index) => (
              <motion.div 
                key={index}
                className="bg-card p-6 rounded-xl border border-border"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-medium">{experience.position}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Building className="w-4 h-4" />
                      <span>{experience.company}, {experience.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-primary bg-primary/10 px-3 py-1 rounded-md whitespace-nowrap mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.period}</span>
                  </div>
                </div>
                
                <p className="mb-4">{experience.description}</p>
                
                <div>
                  <h4 className="font-medium mb-2">Tools:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

      
        {/* Featured Projects Section */}
        <motion.section 
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {featuredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="h-full"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex flex-col bg-card rounded-xl overflow-hidden border border-border h-full">
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
                        {project.screenshots.slice(0, 3).map((screenshot, idx) => (
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
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                        <Calendar className="w-3 h-3" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm flex-grow">{project.description}</p>
                    
                    <motion.div 
                      className="flex flex-wrap gap-1.5 mb-4"
                      initial="hidden"
                      animate="visible"
                    >
                      {project.techStack.map((tech, idx) => (
                        <motion.span 
                          key={idx}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium bg-primary text-primary-foreground">{tech}</span>
                        </motion.span>
                      ))}
                    </motion.div>
                    
                    <div className="flex gap-2 mt-auto">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <a href={project.githubLink} className="px-3 py-1.5 text-xs border border-input rounded-md flex items-center gap-1.5">
                          <IconBrandGithub className="w-3.5 h-3.5" />
                          GitHub
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="flex flex-col gap-6 bg-card p-6 rounded-xl border border-border"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold">Skills & Technologies</h2>
          
          {/* Languages */}
          <div>
            <h3 className="text-xl font-medium mb-3">Languages</h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              {skillsByCategory.languages.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  className="px-4 py-3 bg-primary/10 rounded-md flex items-center justify-center gap-2 hover:bg-primary/20 transition-colors"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Frameworks */}
          <div>
            <h3 className="text-xl font-medium mb-3">Frameworks</h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              {skillsByCategory.frameworks.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  className="px-4 py-3 bg-primary/10 rounded-md flex items-center justify-center gap-2 hover:bg-primary/20 transition-colors"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Databases */}
          <div>
            <h3 className="text-xl font-medium mb-3">Databases</h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              {skillsByCategory.databases.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  className="px-4 py-3 bg-primary/10 rounded-md flex items-center justify-center gap-2 hover:bg-primary/20 transition-colors"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* APIs & Cloud */}
          <div>
            <h3 className="text-xl font-medium mb-3">APIs & Cloud</h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              {skillsByCategory.cloud.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  className="px-4 py-3 bg-primary/10 rounded-md flex items-center justify-center gap-2 hover:bg-primary/20 transition-colors"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        
        {/* Soft Skills Section */}
        <motion.section 
          className="flex flex-col gap-4 bg-card p-6 rounded-xl border border-border"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold">Soft Skills</h2>
          <p className="text-muted-foreground">Beyond technical abilities, I bring the following strengths to any team.</p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {softSkills.map((skill) => (
              <motion.div 
                key={skill.name} 
                className="flex flex-col gap-2 p-4 bg-background rounded-lg border border-border hover:shadow-md transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-md text-primary">
                    {skill.icon}
                  </div>
                  <h3 className="font-medium">{skill.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}

