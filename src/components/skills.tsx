import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Svelte"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase", "Supabase"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "Vercel", "GitHub Actions", "Webpack", "Vite"],
  },
  {
    category: "Design",
    skills: ["Figma", "UI/UX Design", "Responsive Design", "Accessibility", "Animation", "Prototyping"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="border-t border-border/40 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-foreground/70">Technologies and tools I work with</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <Card key={category.category} className="p-6 border-border/40 bg-card">
              <h3 className="font-semibold text-foreground mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-foreground/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
