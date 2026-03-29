"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Mail, Phone, MapPin, Github, Linkedin, Printer } from "lucide-react"

export default function ResumePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur print:hidden">
        <div className="container mx-auto max-w-4xl px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Resume</h1>
                <p className="text-muted-foreground">ATS-friendly format</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild>
                <a href="/Niranjan_Ghising's_Resume.pdf" download="Niranjan_Ghising_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
              <Button variant="secondary" onClick={handlePrint}>
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Resume content */}
      <main className="container mx-auto max-w-4xl px-4 py-12 print:p-8">
        <div className="bg-background space-y-8 print:space-y-6">
          {/* Header section */}
          <div className="text-center space-y-4 print:space-y-2">
            <h1 className="text-4xl font-bold text-foreground print:text-3xl">Niranjan Ghising</h1>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground print:gap-2">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Kathmandu, Nepal
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <a className="hover:underline" href="tel:+9779817042947">+977 9817042947</a>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <a className="hover:underline" href="mailto:ghisingniranjan@gmail.com">ghisingniranjan@gmail.com</a>
              </div>
            </div>

            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Linkedin className="h-4 w-4" />
                <a className="hover:underline" href="https://www.linkedin.com/in/niranjan-ghising-04500424a" target="_blank" rel="noopener noreferrer">linkedin.com/in/niranjan-ghising-04500424a</a>
              </div>
              <div className="flex items-center gap-1">
                <Github className="h-4 w-4" />
                <a className="hover:underline" href="https://github.com/NiranjanGhising" target="_blank" rel="noopener noreferrer">github.com/NiranjanGhising</a>
              </div>
            </div>
          </div>

          <Separator className="print:border-gray-300" />

          {/* Education */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground print:text-xl">EDUCATION</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Techspire College</h3>
                    <p className="text-muted-foreground italic">Affiliated with Asia Pacific University (APU)</p>
                    <p className="text-muted-foreground">Bachelor of Science in Information Technology (BSc IT)</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>Kathmandu, Nepal</p>
                    <p>Kuala Lumpur, Malaysia</p>
                    <p>Expected 2027</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator className="print:border-gray-300" />

          {/* Projects */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground print:text-xl">PROJECTS</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">ETL-ELT Pipeline</h3>
                    <p className="text-xs text-accent font-medium">Python, APIs, Data Transformation</p>
                  </div>
                  <p className="text-sm text-muted-foreground">2026</p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Built an end-to-end data pipeline from source extraction to transformed, end-user-ready outputs</li>
                  <li>Extracted data via API calls, transformed raw records into structured datasets</li>
                  <li>Connected ingestion, transformation, and delivery steps into one reproducible workflow</li>
                  <li>Applied data cleaning and transformation logic to improve consistency and analysis readiness</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Model Context Protocol (MCP)</h3>
                    <p className="text-xs text-accent font-medium">Python, Client-Server Architecture</p>
                  </div>
                  <p className="text-sm text-muted-foreground">2026</p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Developed an MCP-based workflow to integrate multiple tools through a unified server-client architecture</li>
                  <li>Built a centralized server layer that coordinated tools and resources through a single integration point</li>
                  <li>Organized client communication, configuration, and modular Python components for faster, scalable workflow</li>
                  <li>Demonstrated practical understanding of protocol-driven systems and modular design</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Customer Satisfaction Analysis</h3>
                    <p className="text-xs text-accent font-medium">R, Data Analysis, Visualization</p>
                  </div>
                  <p className="text-sm text-muted-foreground">2026</p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Analyzed customer rating behavior to identify the strongest factors influencing satisfaction scores</li>
                  <li>Evaluated rating patterns across delivery types and user segments using exploratory analysis in R</li>
                  <li>Identified instant delivery as the delivery type associated with stronger ratings</li>
                  <li>Found that premium users tended to provide higher ratings, highlighting a valuable customer segment</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">VR Fitness Game Data Cleaning & Analysis</h3>
                    <p className="text-xs text-accent font-medium">Python, Jupyter Notebook, Data Cleaning</p>
                  </div>
                  <p className="text-sm text-muted-foreground">2026</p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Cleaned and analyzed a VR fitness game dataset to understand gameplay engagement patterns</li>
                  <li>Performed notebook-based data cleaning and preprocessing to improve consistency</li>
                  <li>Analyzed which games accumulated higher play hours and which titles were replayed more often</li>
                  <li>Summarized player-behavior insights to support clearer interpretation of engagement trends</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="print:border-gray-300" />

          {/* Skills & Activities */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground print:text-xl">SKILLS & ACTIVITIES</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2 print:gap-1">
                  {["Python", "R", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn", "PostgreSQL", "Git", "GitHub", "Jupyter Notebook", "API-based data ingestion", "ETL/ELT", "Data Cleaning", "Data Transformation"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs print:bg-gray-100 print:text-gray-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Soft Skills</h3>
                <div className="flex flex-wrap gap-2 print:gap-1">
                  {["Problem Solving", "Analytical Thinking", "Communication", "Collaboration", "Adaptability", "Attention to Detail"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs print:bg-gray-100 print:text-gray-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Certifications & Training</h3>
                <p className="text-sm text-muted-foreground">
                  Associate Data Engineer — DataCamp; GitHub Foundation — DataCamp; Become a Python Master — Programiz; 
                  Python Numpy for Data Science — Programiz; Learn SQL Basics — Programiz; 
                  Uncertainty Quantification in Deep Learning — PIE & AI Kathmandu
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Activities</h3>
                <p className="text-sm text-muted-foreground">Career Conclave 2025 — Volunteer</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
