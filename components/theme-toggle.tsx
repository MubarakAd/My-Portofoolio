"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full opacity-0">
        <Sun className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full hover:bg-primary/10"
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-5 w-5 transition-all" />
          <span className="sr-only">Light mode</span>
        </>
      ) : (
        <>
          <Moon className="h-5 w-5 transition-all" />
          <span className="sr-only">Dark mode</span>
        </>
      )}
    </Button>
  )
}
