import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { AnimatedSection, AnimatedText } from "@/components/animations"
import AnimatedTextCycle from "@/components/animated-text-cycle"

export default function Hero() {
  const skills = [
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "Nest.js Developer",
  ]

  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 -z-10"></div>

      {/* Animated shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse -z-10"></div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          <AnimatedSection className="flex flex-col justify-center space-y-4" direction="left">
            <div className="space-y-2">
              <div className="h-8 md:h-10">
                <p className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
                  <AnimatedTextCycle
                    texts={skills}
                    typingSpeed={80}
                    deletingSpeed={40}
                    delayBetween={2000}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600"
                  />
                </p>
              </div>
              <h1 className="heading-xl">Mubarak Adem</h1>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
            </div>
            <AnimatedText
              className="max-w-[600px] text-muted-foreground text-base md:text-lg leading-relaxed"
              delay={300}
            >
              Hi there! I am Mubarak, a passionate self-taught full-stack developer based in Ethiopia. I&apos;ve been
              coding for over three years and half, continuously learning new technologies. I am always eager for new
              challenges and opportunities.
            </AnimatedText>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-md font-medium"
                asChild
              >
                <a href="#contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-primary/20 hover:border-primary/50 transition-all duration-300 font-medium"
                asChild
              >
                <a href="/resume.pdf" download>
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection className="flex items-center justify-center" direction="right" delay={200}>
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-background bg-muted w-[280px] h-[280px] md:w-[350px] md:h-[350px] shadow-xl floating">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 z-10 mix-blend-overlay"></div>
              <Image src="/profilepic.png" alt="Mubarak Adem" fill className="object-cover" priority />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
