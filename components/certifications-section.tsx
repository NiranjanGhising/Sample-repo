"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { certifications } from "@/data/certifications"
import { Award, ExternalLink, Database, BarChart3, FileSpreadsheet, Code, ChevronDown, ChevronUp } from "lucide-react"

// Icon mapping for certifications
const iconMap: Record<string, React.ElementType> = {
  python: Code,
  database: Database,
  chart: BarChart3,
  spreadsheet: FileSpreadsheet,
  default: Award,
}

export function CertificationsSection() {
  const [showAll, setShowAll] = useState(false)
  
  // Separate featured and other certifications
  const featuredCert = certifications.find(cert => cert.featured)
  const otherCerts = certifications.filter(cert => !cert.featured)

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications and continuous learning
          </p>
        </motion.div>

        {/* Featured Certification - Large Card */}
        {featuredCert && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-2 border-accent/30 rounded-2xl p-8 relative overflow-hidden">
              {/* Featured badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full font-medium">
                  Featured
                </span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Database className="h-10 w-10 text-accent" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    {featuredCert.title}
                  </h3>
                  <p className="text-muted-foreground mb-1">
                    Issued by <span className="text-foreground font-medium">{featuredCert.issuer}</span>
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {featuredCert.date}
                  </p>
                  
                  {featuredCert.credentialUrl && featuredCert.credentialUrl !== "#" && (
                    <a
                      href={featuredCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                    >
                      View Credential
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showAll ? (
              <>
                Hide Certificates
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show All Certificates ({otherCerts.length})
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </motion.div>

        {/* Other Certifications - Collapsible */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherCerts.map((cert, index) => {
                  const IconComponent = iconMap[cert.icon || "default"] || iconMap.default

                  return (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group"
                    >
                      <div className="h-full bg-card border border-border rounded-xl p-5 hover:border-accent/50 hover:shadow-md transition-all duration-300">
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                            <IconComponent className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-foreground text-sm line-clamp-2 mb-1">
                              {cert.title}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              {cert.issuer} • {cert.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
