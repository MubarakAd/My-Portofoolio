"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animations"

interface Testimonial {
  content: string
  author: string
  position: string
}

export default function Testimonials() {
  const [mounted, setMounted] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const testimonials: Testimonial[] = [
    {
      content:
        "I had the privilege of working with Mubarak, an exceptional Web Developer. His technical expertise and strong communication skills made the collaboration seamless. I highly recommend him.",
      author: "Harun Jeylan",
      position: "CTO of Golden Age Technology",
    },
    {
      content:
        "He is the best developer! His attention to detail and problem-solving abilities are outstanding. Mubarak consistently delivers high-quality work ahead of schedule.",
      author: "Abdurahman Abdella",
      position: "Senior Full Stack Developer",
    },
    {
      content:
        "Working with Mubarak was a pleasure. He's not only technically proficient but also brings creative solutions to complex problems. His work has significantly improved our user experience.",
      author: "Sarah Johnson",
      position: "Product Manager",
    },
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [activeIndex, isAnimating])

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection("right")
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, testimonials.length])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection("left")
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, testimonials.length])

  if (!mounted) {
    return null
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] -z-10"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <p className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">Testimonials</p>
            <h2 className="heading-lg">What People Say</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto"></div>
            <p className="text-muted-foreground md:text-lg font-light italic">Feedback from clients and colleagues</p>
          </div>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="relative overflow-hidden h-full transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg border border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-8 pt-12">
                      <Quote className="absolute top-6 left-6 h-10 w-10 text-primary opacity-20" />
                      <p className="relative z-10 italic text-lg leading-relaxed text-foreground/90">
                        {testimonial.content}
                      </p>
                    </CardContent>
                    <CardFooter className="px-8 py-6 bg-muted/20 border-t">
                      <div>
                        <p className="font-semibold text-lg">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background/80 backdrop-blur-sm border shadow-md hover:bg-background z-10 md:-translate-x-6"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background/80 backdrop-blur-sm border shadow-md hover:bg-background z-10 md:translate-x-6"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
                onClick={() => {
                  setDirection(index > activeIndex ? "right" : "left")
                  setActiveIndex(index)
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
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
