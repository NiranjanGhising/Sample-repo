import Link from "next/link"
import { Github, Linkedin, Mail, Globe } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="font-display font-bold text-foreground text-xl">
                NG<span className="text-accent">.</span>
              </h3>
              <p className="text-sm text-muted-foreground">Data Science Enthusiast</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Turning data into insights. Passionate about machine learning, statistical analysis, and visualization.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/resume" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Resume
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Resources</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/resume" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Download CV
              </Link>
              <Link href="/#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="/#certifications" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Certifications
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com/NiranjanGhising"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://np.linkedin.com/in/niranjan-ghising-04500424a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://www.niranjanghising.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                <Globe className="h-4 w-4" />
                Website
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Niranjan Ghising. Built with Next.js
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Open to opportunities</span>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
