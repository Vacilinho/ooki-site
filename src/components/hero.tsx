import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-accent">Welcome to my portfolio</p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Frontend Developer & Creative Coder
              </h1>
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed">
              I craft beautiful, performant web experiences with modern technologies. Specializing in React, Next.js,
              and creating pixel-perfect interfaces.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
                View My Work
                <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="relative h-96 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-accent/30">{"</>"}</div>
                <p className="mt-4 text-foreground/50">Your amazing projects here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
