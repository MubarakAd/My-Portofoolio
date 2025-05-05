"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap, Calendar } from "lucide-react"
import { AnimatedSection } from "@/components/animations"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Education {
  degree: string
  institution: string
  period: string
  description?: string
}

interface Experience {
  position: string
  company: string
  period: string
  description: string
}

export default function Resume() {
  const [activeTab, setActiveTab] = useState("education")

  const education: Education[] = [
    {
      degree: "Bachelor's Degree in Software Engineering",
      institution: "Adama Science and Technology University",
      period: "Expected graduation: June 2026",
    },
    {
      degree: "Data Structures and Algorithms",
      institution: "A2SV (Africa to Silicon Valley)",
      period: "Oct 2023 - June 2024",
      description:
        "Intensive training program in competitive programming, data structures, and algorithms. A2SV is backed twice by Google and prepares African students for technical interviews at top tech companies.",
    },
  ]

  const experiences: Experience[] = [
    {
      position: "FullStack Web Developer",
      company: "Golden Age",
      period: "Apr 2025 - Present",
      description: "Developing a high-quality web app.",
    },
    {
      position: "Web Developer",
      company: "Eskalate",
      period: "Jun 2024 - Mar 2025",
      description: "Developed a high-quality web app.",
    },
    {
      position: "Web Development Intern",
      company: "TechSphere Technology",
      period: "Jan 2025 - Mar 2025",
      description: "Assisted in developing web applications and learned industry best practices.",
    },
  ]

  return (
    <section id="resume" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <p className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">Experience</p>
            <h2 className="heading-lg">Resume</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto"></div>
            <p className="text-muted-foreground md:text-lg font-light italic">
              My educational background and professional experience
            </p>
          </div>
          <Button
            variant="outline"
            className="border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md font-medium"
            asChild
          >
            <a href="/resume.pdf" download>
              Download Resume <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="education" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 w-full max-w-md bg-muted/50 backdrop-blur-sm border border-border/50">
                <TabsTrigger
                  value="education"
                  className="flex items-center gap-2 data-[state=active]:bg-background/80 data-[state=active]:backdrop-blur-sm data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:rounded-none data-[state=active]:shadow-none transition-all duration-300"
                  onClick={() => setActiveTab("education")}
                >
                  <GraduationCap className="h-4 w-4" />
                  <span>Education</span>
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="flex items-center gap-2 data-[state=active]:bg-background/80 data-[state=active]:backdrop-blur-sm data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:rounded-none data-[state=active]:shadow-none transition-all duration-300"
                  onClick={() => setActiveTab("experience")}
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Experience</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="education" className="space-y-4 animate-in fade-in-50 duration-300">
              <AnimatedSection direction="up" className="space-y-4">
                {education.map((item, index) => (
                  <Card
                    key={index}
                    className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">{item.degree}</CardTitle>
                      <CardDescription className="text-base font-medium text-muted-foreground">
                        {item.institution}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item.period}
                      </div>
                      {item.description && <p className="text-foreground/90 mt-2">{item.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </AnimatedSection>
            </TabsContent>

            <TabsContent value="experience" className="space-y-4 animate-in fade-in-50 duration-300">
              <AnimatedSection direction="up" className="space-y-4">
                {experiences.map((item, index) => (
                  <Card
                    key={index}
                    className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">{item.position}</CardTitle>
                      <CardDescription className="text-base font-medium text-muted-foreground">
                        {item.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item.period}
                      </div>
                      <p className="text-foreground/90">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </AnimatedSection>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
