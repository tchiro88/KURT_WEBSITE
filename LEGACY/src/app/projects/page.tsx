import type { Metadata } from 'next'
import ProjectsGrid from '@/components/pages/ProjectsGrid'
import SectionHeader from '@/components/ui/SectionHeader'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Industrial automation projects including IIoT systems, control architecture, and manufacturing solutions',
}

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-20">
      <Container>
        <SectionHeader
          title="Featured Projects"
          subtitle="Comprehensive automation solutions spanning control systems, IIoT architecture, and industrial integration"
        />
        <ProjectsGrid />
      </Container>
    </div>
  )
}
