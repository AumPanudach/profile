"use client";

import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { 
  Code2, 
  Database, 
  LayoutGrid, 
  ServerCog,
  Users,
  MessageSquare,
  LightbulbIcon,
  Clock,
  BarChart3,
  Building,
  Calendar,
  Globe,
  Cloud,
  Terminal,
  Blocks
} from "lucide-react";
import { motion } from "framer-motion";
import { 
  IconBrandMongodb,
  IconBrandGolang,
  IconBrandTypescript,
  IconBrandPython,
  IconSql,
  IconApi,
  IconBrandAws,
  IconBrandDocker,
  IconBrandNextjs,
  IconBrandLaravel,
  IconBrandMysql,
  IconBrandReact,
  IconBrandDjango,
  IconBrandNodejs,
  IconCoffee,
  IconBrandJavascript
 } from "@tabler/icons-react"
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
      { name: "Next.js", icon: <IconBrandReact className="w-5 h-5" /> },
      { name: "Node.js", icon: <IconBrandNodejs className="w-5 h-5" /> },
      { name: "Gin", icon: <IconBrandGolang className="w-5 h-5" /> },
      { name: "Laravel 8", icon: <IconBrandLaravel className="w-5 h-5" /> },
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
              src="/profile-image.jpg"
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
              John Doe
            </motion.h1>
            <motion.h2 
              className="text-2xl text-primary"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p 
              className="text-lg max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Welcome to my personal portfolio! I am Panudach Kongsomboon passionate developer with expertise in 
              React, Next.js, and TypeScript. With over 5 years of experience building 
              web applications, I focus on creating beautiful, responsive, and user-friendly 
              interfaces that deliver exceptional user experiences.
            </motion.p>
            <motion.div 
              className="flex gap-4 mt-2 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.button 
                className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
              <motion.button 
                className="px-6 py-2 border border-input rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.button>
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
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
          <motion.div 
            className="grid auto-rows-min gap-6 md:grid-cols-3"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
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
            </motion.div>
            <motion.div 
              className="flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
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
            </motion.div>
            <motion.div 
              className="flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
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
            </motion.div>
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

// Skill data organized by category
export const skillsByCategory = {
  frontend: [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: 'N' },
    { name: 'Tailwind CSS', icon: '🌊' },
  ],
  backend: [
    { name: 'Node.js', icon: '📦' },
    { name: 'Express', icon: '🚂' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'GraphQL', icon: '⚙️' },
  ],
  tools: [
    { name: 'Git', icon: '🔄' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Firebase', icon: '🔥' },
  ],
  other: [
    { name: 'Testing', icon: '🧪' },
    { name: 'CI/CD', icon: '🔄' },
    { name: 'Agile', icon: '🏃' },
  ]
};

function Skills() {
  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 capitalize">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md text-sm"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
