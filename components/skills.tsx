"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animations"

interface Skill {
  name: string
  percentage: number
  icon: string
  color: string
}

export default function Skills() {
  const [mounted, setMounted] = useState(false)

  // Skills data with custom colors
  const skills: Skill[] = [
    { name: "ReactJs", percentage: 85, icon: "⚛️", color: "from-blue-500 to-cyan-400" },
    { name: "Next.js", percentage: 85, icon: "▲", color: "from-gray-800 to-gray-600" },
    { name: "Git", percentage: 70, icon: "🔄", color: "from-orange-600 to-red-500" },
    { name: "JavaScript", percentage: 99, icon: "🟨", color: "from-yellow-400 to-yellow-600" },
    { name: "Web Development", percentage: 95, icon: "🌐", color: "from-primary to-purple-600" },
    { name: "Node.js", percentage: 60, icon: "🟢", color: "from-green-500 to-green-700" },
    { name: "Express", percentage: 60, icon: "🚀", color: "from-gray-600 to-gray-800" },
  ]

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <p className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">What I Know</p>
            <h2 className="heading-lg">Skills & Expertise</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto"></div>
            <p className="text-muted-foreground md:text-lg font-light italic">
              My technical expertise and proficiency levels
            </p>
          </div>
        </AnimatedSection>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.name} delay={100 * (index + 1)}>
              <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl flex items-center justify-center w-10 h-10 rounded-full bg-muted">
                        {skill.icon}
                      </span>
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                    </div>
                    <span className="font-bold text-xl">{skill.percentage}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shimmer`}
                      style={{
                        width: `0%`,
                        animation: `progressAnimation 1.5s ease-out forwards ${index * 0.2}s`,
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progressAnimation {
          from { width: 0%; }
          to { width: var(--percentage); }
        }
        .bg-grid-pattern {
          background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  )
}
