import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/40 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Let&apos;s Work Together</h2>
        <p className="text-foreground/70 mb-8 leading-relaxed">
          I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out if you&apos;d like to
          collaborate or just say hello!
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-12">
          <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
            <Mail size={18} />
            Send me an email
          </Button>
          <Button size="lg" variant="outline">
            Schedule a call
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
            <Twitter size={24} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}
