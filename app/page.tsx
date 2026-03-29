import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section-new"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main" className="bg-background">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
