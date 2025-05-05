"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Send, Loader2 } from "lucide-react"
import { AnimatedSection } from "@/components/animations"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] -z-10"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <p className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">Contact</p>
            <h2 className="heading-lg">Get In Touch</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto"></div>
            <p className="text-muted-foreground md:text-lg font-light italic">
              Let's discuss your project or just say hello
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          <AnimatedSection direction="left">
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below to get in touch with me.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className="border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        className="min-h-[120px] border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200}>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
                <CardDescription className="text-base">Here are the ways you can reach me.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <a
                      href="mailto:mubaarakadem@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      mubaarakadem@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/10 shrink-0">
                    <MapPin className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Location</h3>
                    <p className="text-muted-foreground">College, Adama, Oromia, Ethiopia</p>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-medium text-lg mb-4">Social Links</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 font-medium"
                      asChild
                    >
                      <a href="https://www.linkedin.com/in/mubarak-adem" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 font-medium"
                      asChild
                    >
                      <a href="https://github.com/MubarakAd" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 font-medium col-span-2"
                      asChild
                    >
                      <a href="https://mubarak-adem.vercel.app" target="_blank" rel="noopener noreferrer">
                        Website
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  )
}
