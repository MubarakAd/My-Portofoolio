"use client"

import { AnimatedSection, AnimatedText } from "@/components/animations"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <p className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">Who I Am</p>
            <h2 className="heading-lg">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto"></div>
            <p className="text-muted-foreground md:text-lg font-light italic">
              On the Journey to learn and master new technologies.
            </p>
          </div>
          <div className="mx-auto max-w-[700px] space-y-6 text-center">
            <AnimatedText className="text-foreground/90 md:text-lg leading-relaxed" delay={100}>
              As a self-taught developer, I&apos;ve dedicated myself to mastering the art of web development. My journey
              began over two and a half years ago, and since then, I&apos;ve been continuously expanding my knowledge
              and skills in various technologies.
            </AnimatedText>
            <AnimatedText className="text-foreground/90 md:text-lg leading-relaxed" delay={300}>
              I specialize in building responsive, user-friendly web applications using modern frameworks and libraries.
              My passion lies in creating clean, efficient code that delivers exceptional user experiences.
            </AnimatedText>
            <AnimatedText className="text-foreground/90 md:text-lg leading-relaxed" delay={500}>
              I&apos;m always looking for new challenges and opportunities to grow as a developer and contribute to
              meaningful projects that make a difference.
            </AnimatedText>

            <AnimatedSection delay={700} className="pt-6">
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-full text-sm font-medium">
                  Fast Learner
                </span>
                <span className="px-4 py-2 bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-green-500/10 text-green-500 dark:text-green-400 rounded-full text-sm font-medium">
                  Detail Oriented
                </span>
                <span className="px-4 py-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium">
                  Creative Thinker
                </span>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
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
