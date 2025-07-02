"use client";

import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Github, Facebook, Send, CheckCircle, Shield } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  // State for form handling
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if reCAPTCHA is completed
    if (!recaptchaToken) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // First verify reCAPTCHA on server-side
      const recaptchaResponse = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: recaptchaToken }),
      });

      const recaptchaResult = await recaptchaResponse.json();
    
      if (!recaptchaResult.success) {
        throw new Error('reCAPTCHA verification failed');
      }

      // EmailJS configuration from environment variables
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error('EmailJS configuration is missing');
      }

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Panudach",
          to_email: contactEmail,
          'g-recaptcha-response': recaptchaToken
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      setRecaptchaToken(null);
      recaptchaRef.current?.reset(); // Reset reCAPTCHA
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitStatus === 'success' && (
                      <motion.div 
                        className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <CheckCircle className="h-4 w-4" />
                        ส่งข้อความเรียบร้อยแล้ว! ขอบคุณที่ติดต่อมา
                      </motion.div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <motion.div 
                        className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={formElementVariants}>
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your name" 
                            required
                          />
                        </div>
                      </motion.div>
                      <motion.div variants={formElementVariants}>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            name="email"
                            type="email" 
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com" 
                            required
                          />
                        </div>
                      </motion.div>
                    </div>
                    <motion.div variants={formElementVariants}>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input 
                          id="subject" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What is this regarding?" 
                          required
                        />
                      </div>
                    </motion.div>
                    <motion.div variants={formElementVariants}>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project, question, or job opportunity..." 
                          rows={6} 
                          required
                        />
                      </div>
                    </motion.div>
                    
                    {/* reCAPTCHA */}
                    <motion.div variants={formElementVariants}>
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-primary" />
                          Security Verification
                        </Label>
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                          onChange={(token) => setRecaptchaToken(token)}
                          onExpired={() => setRecaptchaToken(null)}
                          theme="light"
                        />
                        {submitStatus === 'error' && !recaptchaToken && (
                          <p className="text-sm text-red-600">
                            กรุณายืนยันว่าคุณไม่ใช่หุ่นยนต์
                          </p>
                        )}
                      </div>
                    </motion.div>

                    <motion.div variants={formElementVariants}>
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto flex gap-2"
                        disabled={isSubmitting || !recaptchaToken}
                      >
                        <Send className="h-4 w-4" />
                        {isSubmitting ? 'กำลังส่ง...' : 'Send Message'}
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