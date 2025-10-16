export function About() {
  return (
    <section id="about" className="border-t border-border/40 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                I&apos;m a passionate frontend developer with a keen eye for design and a love for clean, maintainable code.
                With over 5 years of experience building web applications, I&apos;ve developed a strong foundation in modern
                web technologies.
              </p>
              <p>
                My journey in web development started with a curiosity about how things work on the internet. Today, I
                focus on creating intuitive user interfaces that solve real problems and delight users.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new design trends, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg bg-card p-6 border border-border/40">
              <h3 className="font-semibold text-foreground mb-3">Experience</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Senior Frontend Engineer at Tech Company</li>
                <li>• Full-stack Developer at Startup</li>
                <li>• Junior Developer at Digital Agency</li>
              </ul>
            </div>
            <div className="rounded-lg bg-card p-6 border border-border/40">
              <h3 className="font-semibold text-foreground mb-3">Education</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• B.S. Computer Science</li>
                <li>• Web Development Bootcamp</li>
                <li>• Continuous Learning & Certifications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
