"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  threshold?: number
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.1,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              section.classList.add("animate-in")
            }, delay)
            observer.unobserve(section)
          }
        })
      },
      {
        threshold,
      },
    )

    observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [delay, threshold])

  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return "translate-y-8"
      case "down":
        return "translate-y-[-8px]"
      case "left":
        return "translate-x-8"
      case "right":
        return "translate-x-[-8px]"
      default:
        return "translate-y-8"
    }
  }

  return (
    <div
      ref={sectionRef}
      className={`opacity-0 ${getDirectionClasses()} transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  )
}

export function AnimatedText({
  children,
  className = "",
  delay = 0,
}: { children: string; className?: string; delay?: number }) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const text = textRef.current

    if (!text) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              text.classList.add("animate-in")
            }, delay)
            observer.unobserve(text)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    observer.observe(text)

    return () => {
      if (text) observer.unobserve(text)
    }
  }, [delay])

  return (
    <div ref={textRef} className={`opacity-0 transition-all duration-1000 ease-out ${className}`}>
      {children}
    </div>
  )
}
