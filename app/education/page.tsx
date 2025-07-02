"use client";

import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Building, Calendar, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationPage() {
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Education data
  const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "King Mongkut's University of Technology North Bangkok (KMUTNB)",
      location: "Prachin Buri, Thailand",
      startYear: 2021,
      endYear: 2024,
      description: "Core focus on software development methodologies, programming paradigms, and system design principles.",
      achievements: ["First Class Honors"],
      courses: ["Data Structures", "Database Systems", "Object-Oriented Programming", "Web Development", "Advanced Web Programming", "Advanced Database Systems"],
      logo: "/images/kmutnb_logo.png"
    }
  ];

  return (
    <>
      <PageHeader 
        breadcrumbItems={[
          { title: "Education", href: "/education", isCurrentPage: true }
        ]}
      />
      <motion.div 
        className="flex flex-1 flex-col gap-8 p-6 pt-0"
        initial="initial"
        animate="animate"
        variants={pageVariants}
      >
        <section className="flex flex-col gap-6">
          <motion.div 
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold">Education</h1>
            <p className="text-muted-foreground text-lg">My academic background and qualifications</p>
          </motion.div>
          
          {/* Academic Education */}
          <div className="flex flex-col gap-8">
            <motion.h2 
              className="text-2xl font-semibold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Academic Background
            </motion.h2>
            <motion.div 
              className="flex flex-col gap-10 relative before:absolute before:h-full before:w-0.5 before:bg-border before:left-[17px] before:ml-px"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {education.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-6"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="relative z-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                  >
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  </motion.div>
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
                            <motion.div 
                              key={idx}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Badge variant="outline">{course}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}