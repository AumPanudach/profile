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
                <h2 className="text-2xl font-semibold">Biography</h2>
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <p>
                    Hello! I am John Doe, a passionate and creative full-stack developer with over 5 years of experience in building web and mobile applications. I specialize in React, Next.js, and TypeScript, focusing on creating intuitive user interfaces and robust backend systems.
                  </p>
                  <p>
                    After graduating with a degree in Computer Science from Thai University in 2018, I joined TechCorp where I helped develop enterprise applications for clients across Asia. In 2020, I transitioned to a senior role at InnovateTH, leading a team of 5 developers on high-impact projects for fintech startups.
                  </p>
                  <p>
                    My approach to development combines technical expertise with strong problem-solving abilities. I believe in writing clean, maintainable code and staying current with emerging technologies. When I am not coding, you can find me exploring new hiking trails, experimenting with photography, or contributing to open source projects.
                  </p>
                  <p>
                    I am always open to new challenges and opportunities to create impactful digital experiences. Feel free to reach out if you&rsquod like to collaborate or just have a chat about technology!
                  </p>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl font-semibold">What I Do</h2>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={staggerCards}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={cardVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                    <Card>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-medium">Backend Development</h3>
                        <p className="text-muted-foreground mt-2">Building scalable APIs and services using Node.js, Express, and various database technologies.</p>
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
                <h2 className="text-2xl font-semibold">Interests</h2>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={badgeContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {["Reading Cartoon", "Weight training", "Coding", "Music"].map((interest) => (
                    <motion.div 
                      key={interest} 
                      variants={badgeVariants}
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge variant="outline" className="px-3 py-1 text-sm">{interest}</Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}