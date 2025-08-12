# Data Analyst Portfolio

A modern, professional portfolio website for a data analysis student built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Strict 3-Color Design System**: Ink (#0B1220), Ivory (#F6F5F2), Moss (#5A7F71)
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Interactive Components**: Mini-dashboard with real-time filtering and charts
- **Project Case Studies**: Detailed project pages with before/after metrics
- **ATS-Friendly Resume**: Print-optimized resume with PDF download
- **Contact Form**: Validated form with anti-spam protection
- **Blog System**: Markdown-ready blog with individual post pages
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **SEO Optimized**: Meta tags, OpenGraph, and structured data

## Quick Setup

1. **Replace Personal Information**:
   - Update `[Your Name]` throughout the codebase
   - Replace `your.email@example.com` with your actual email
   - Update `[CalendlyURL]` with your Calendly link
   - Add your GitHub, LinkedIn, and other social links

2. **Customize Content**:
   - Edit `/data/projects.ts` to add your projects
   - Update `/data/skills.ts` with your skills and proficiency levels
   - Modify `/data/posts.ts` to add blog posts
   - Update `/data/testimonials.ts` with real testimonials

3. **Add Your Projects**:
   - Replace sample project data with your actual work
   - Add project images to `/public/images/`
   - Update GitHub and live demo URLs

4. **Configure Integrations**:
   - Set up Calendly embed in `/app/contact/page.tsx`
   - Configure email service in `/app/api/contact/route.ts`
   - Add analytics and tracking codes

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

Or deploy manually:

\`\`\`bash
npm run build
npm run start
\`\`\`

## File Structure

\`\`\`
├── app/                    # Next.js app router pages
├── components/            # Reusable UI components
├── data/                  # Content and data files
├── lib/                   # Utilities and types
├── public/               # Static assets
└── README.md             # This file
\`\`\`

## Customization

The portfolio uses a strict 3-color design system. All colors derive from:
- **Ink**: #0B1220 (dark backgrounds, text)
- **Ivory**: #F6F5F2 (light backgrounds, text)  
- **Moss**: #5A7F71 (accent color only)

To maintain design consistency, avoid adding additional colors or gradients.

## License

MIT License - feel free to use this template for your own portfolio.
