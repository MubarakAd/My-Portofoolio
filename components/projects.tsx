import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { AnimatedSection } from "@/components/animations"

interface Project {
  title: string
  description: string
  image: string
  demoLink: string
  githubLink?: string
  technologies: string[]
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Bank Dash",
      description:
        "A comprehensive banking dashboard application for managing financial data. The dashboard includes real-time transaction tracking, account summaries, and performance metrics.",
      image: "/bankdash.png",
      demoLink: "#",
      githubLink: "https://github.com/MubarakAd/a2sv-g5-project-phase-starter-project/tree/main/web/ASTU-web-group-1",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    },
    {
      title: "Fermata",
      description:
        "A modern public transportation platform that allows users to book tickets, track vehicles, and manage their journeys with ease. The future of public transportation is here.",
      image: "/fermata.jpeg",
      demoLink: "#",
      githubLink: "https://github.com/MubarakAd/Fermata/tree/master",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express"],
    },
    {
      title: "Impact Academy",
      description:
        "An e-learning platform where instructors can publish courses and students can purchase and access educational content. Features a global network of learners earning recognized degrees from leading institutions.",
      image: "/impact-academy.png",
      demoLink: "#",
      githubLink: "https://github.com/MubarakAd",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <p className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">My Work</p>
            <h2 className="heading-lg">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto"></div>
            <p className="text-muted-foreground md:text-lg font-light italic">
              Some of my recent work and personal projects
            </p>
          </div>
        </AnimatedSection>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              className="group"
              delay={150 * (index + 1)}
              direction={index % 2 === 0 ? "up" : "down"}
            >
              <Card className="overflow-hidden flex flex-col h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-background/80 text-foreground px-2 py-1 rounded-full backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs bg-background/80 text-foreground px-2 py-1 rounded-full backdrop-blur-sm">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between gap-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 flex-1 font-medium"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  {project.githubLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/20 hover:border-primary/50 font-medium"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
