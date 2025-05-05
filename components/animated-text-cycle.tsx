"use client"

import { useState, useEffect, useRef } from "react"

interface AnimatedTextCycleProps {
  texts: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
}

export default function AnimatedTextCycle({
  texts,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
}: AnimatedTextCycleProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  // Prevent animation from running during SSR
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    if (!isMounted.current) return

    let timeout: NodeJS.Timeout

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, delayBetween)
      return () => clearTimeout(timeout)
    }

    const fullText = texts[currentTextIndex]

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deletingSpeed)
      }
    } else {
      if (currentText === fullText) {
        setIsWaiting(true)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1))
        }, typingSpeed)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, isWaiting, texts, typingSpeed, deletingSpeed, delayBetween])

  return (
    <span className={`inline-block relative ${className}`}>
      {currentText}
      <span className="animate-pulse absolute -right-[4px] top-0 h-full w-[2px] bg-primary"></span>
    </span>
  )
}
