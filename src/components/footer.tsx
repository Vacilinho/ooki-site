export function Footer() {
  return (
    <footer className="border-t border-border/40 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-foreground/60">© 2025 Frontend Developer. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
