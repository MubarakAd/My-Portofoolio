import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} <span className="font-medium">Mubarak Adem</span>. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-colors" asChild>
            <a href="https://github.com/MubarakAd" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-colors" asChild>
            <a
              href="https://www.linkedin.com/in/mubarak-adem"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-colors" asChild>
            <a href="mailto:mubaarakadem@gmail.com" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}
