"use client";

import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Github, Facebook, Send } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function ContactPage() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const socialVariants: Variants = {
    hidden: { scale: 0 },
    visible: (i: number) => ({
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1 + i * 0.1 
      }
    })
  };

  const formElementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <PageHeader 
        breadcrumbItems={[
          { title: "Contact", href: "/contact", isCurrentPage: true }
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
            <h1 className="text-4xl font-bold">Contact Me</h1>
            <p className="text-muted-foreground text-lg">Get in touch for collaborations or inquiries</p>
          </div>
          
          {/* Contact Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Contact Form */}
            <motion.div 
              className="flex flex-col gap-6 w-full lg:w-2/3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={formElementVariants}>
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Your name" />
                        </div>
                      </motion.div>
                      <motion.div variants={formElementVariants}>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="your.email@example.com" />
                        </div>
                      </motion.div>
                    </div>
                    <motion.div variants={formElementVariants}>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="What is this regarding?" />
                      </div>
                    </motion.div>
                    <motion.div variants={formElementVariants}>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell me about your project, question, or job opportunity..." 
                          rows={6} 
                        />
                      </div>
                    </motion.div>
                    <motion.div variants={formElementVariants}>
                      <Button type="submit" className="w-full md:w-auto flex gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Right Column - Contact Info & Social Links */}
            <motion.div 
              className="flex flex-col gap-6 w-full lg:w-1/3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>
                  <div className="space-y-6">
                    <motion.div variants={itemVariants}>
                      <div className="flex gap-4">
                        <div className="h-12 w-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Email</h3>
                          <a href="mailto:panudach.work@gmail.com" className="text-muted-foreground hover:text-primary">
                            panudach.work@gmail.com
                          </a>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <div className="flex gap-4">
                        <div className="h-12 w-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Phone</h3>
                          <a href="tel:+66958547979" className="text-muted-foreground hover:text-primary">
                          0958547979
                          </a>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <div className="flex gap-4">
                        <div className="h-12 w-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Location</h3>
                          <p className="text-muted-foreground">
                          Phra Nakhon Si Ayutthaya, Thailand
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div className="flex gap-4 mt-6">
                      <motion.a
                        href="https://github.com/AumPanudach"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        custom={0}
                        variants={socialVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                      
                      <motion.a
                        href="https://www.facebook.com/aum.panudach"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        custom={1}
                        variants={socialVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Facebook className="h-5 w-5" />
                      </motion.a>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
}