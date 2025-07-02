"use client";

import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AboutPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerCards = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const badgeContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  return (
    <>
      <PageHeader 
        breadcrumbItems={[
          { title: "About", href: "/about", isCurrentPage: true }
        ]} 
      />
      <motion.div 
        className="flex flex-1 flex-col gap-8 p-6 pt-0"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <section className="flex flex-col gap-6">
          <motion.div 
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-muted-foreground text-lg">Get to know me better</p>
          </motion.div>
          
          {/* About Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Image only (removed Personal Details) */}
            <motion.div 
              className="flex flex-col gap-6 w-full lg:w-1/3"
              variants={slideUp}
            >
              <motion.div 
                className="relative aspect-square overflow-hidden rounded-xl border-4 border-primary/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Profile picture"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </motion.div>
            </motion.div>
            
            {/* Right Column - Bio and Interests */}
            <motion.div 
              className="flex flex-col gap-8 w-full lg:w-2/3"
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <motion.div 
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold text-primary border-b border-primary/20 pb-2">
                  🎯 Target
                </h2>
                <motion.div 
                  className="space-y-4 bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-lg border-l-4 border-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <p className="text-base leading-relaxed">
                    My goal is to pursue a career as a <span className="font-semibold text-primary">Backend Developer</span> because I believe it is a crucial role in designing the system's backend. I am interested in working as part of a team and have a meticulous nature. I am also eager to learn new things. I hope you will give me the opportunity to contribute to improving the organization's system.
                  </p>
                </motion.div>
                
                <h2 className="text-2xl font-semibold text-primary border-b border-primary/20 pb-2 mt-6">
                  📖 Biography
                </h2>
                <motion.div 
                  className="space-y-4 bg-card p-4 rounded-lg border border-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <p className="text-base leading-relaxed">
                    I am a passionate <span className="font-semibold text-primary">Computer Engineering student</span> at King Mongkut's University of Technology North Bangkok with a strong focus on backend development. My journey in technology began with curiosity about how systems work behind the scenes.
                  </p>
                  <p className="text-base leading-relaxed">
                    Through my cooperative education at <span className="font-semibold">Biotec</span>, I gained hands-on experience in developing robust backend solutions using <span className="font-medium">Django, MongoDB, and Docker</span>. I thrive in collaborative environments and believe that great software is built by great teams.
                  </p>
                  <p className="text-base leading-relaxed">
                    I'm particularly drawn to the challenge of creating <span className="font-medium">scalable, efficient systems</span> that can handle complex business logic while maintaining clean, maintainable code. My meticulous nature helps me write reliable software that stands the test of time.
                  </p>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl font-semibold text-primary border-b border-primary/20 pb-2">💻 What I Do</h2>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={staggerCards}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={cardVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                    <Card className="h-full border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <span className="text-primary text-lg">🚀</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">Backend Development</h3>
                            <p className="text-muted-foreground leading-relaxed">Building scalable APIs and services using <span className="font-medium">Node.js, Express, Django, and Gin</span> with focus on performance and maintainability.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={cardVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                    <Card className="h-full border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                            <span className="text-blue-500 text-lg">🗄️</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">Database Design</h3>
                            <p className="text-muted-foreground leading-relaxed">Designing efficient database schemas and optimizing queries for <span className="font-medium">MongoDB, MySQL, and SQL Server</span>.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={cardVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                    <Card className="h-full border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                            <span className="text-green-500 text-lg">🔗</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">API Development</h3>
                            <p className="text-muted-foreground leading-relaxed">Creating robust <span className="font-medium">RESTful APIs</span> with proper authentication, validation, and documentation.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h2 className="text-2xl font-semibold text-primary border-b border-primary/20 pb-2">🎯 Interests & Hobbies</h2>
                <motion.div 
                  className="bg-card p-4 rounded-lg border border-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <p className="text-muted-foreground mb-3">When I'm not coding, you can find me:</p>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={badgeContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      { name: "📚 Reading Cartoon", color: "bg-blue-500/10 text-blue-600 border-blue-200" },
                      { name: "💪 Weight Training", color: "bg-red-500/10 text-red-600 border-red-200" },
                      { name: "🎵 Music", color: "bg-purple-500/10 text-purple-600 border-purple-200" }
                    ].map((interest) => (
                      <motion.div 
                        key={interest.name} 
                        variants={badgeVariants}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className={`px-3 py-2 rounded-full text-sm font-medium border ${interest.color} transition-all hover:shadow-md`}>
                          {interest.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}