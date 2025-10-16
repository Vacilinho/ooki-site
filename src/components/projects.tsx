import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management and payment integration.",
    tags: ["React", "Next.js", "Stripe", "PostgreSQL"],
    image: "/ecommerce-dashboard.png", // ✅ sem "./public"
    links: { demo: "#", github: "#" },
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates and team collaboration features.",
    tags: ["React", "Firebase", "Tailwind CSS", "WebSocket"],
    image: "/task-management-app.png",
    links: { demo: "#", github: "#" },
  },
  {
    title: "Design System",
    description:
      "Comprehensive component library and design system documentation for enterprise applications.",
    tags: ["React", "Storybook", "TypeScript", "Figma"],
    image: "/design-system-components.png",
    links: { demo: "#", github: "#" },
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts and data visualization.",
    tags: ["Next.js", "Recharts", "Supabase", "TailwindCSS"],
    image: "/analytics-dashboard-charts.png",
    links: { demo: "#", github: "#" },
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border/40 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Projetos realizados
          </h2>
          <p className="text-foreground/70">
            A selection of my recent work and side projects
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden border-border/40 bg-card hover:border-accent/50 transition-colors"
            >
              <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 overflow-hidden">
                <img
                  src={project.image || "/file.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-accent/10 text-accent hover:bg-accent/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.links.demo}
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
