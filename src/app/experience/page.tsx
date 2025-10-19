import type { Metadata } from 'next'
import ExperienceTimeline from '@/components/pages/ExperienceTimeline'
import SectionHeader from '@/components/ui/SectionHeader'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience in industrial automation, control systems, and project engineering',
}

export default function ExperiencePage() {
  return (
    <div className="py-12 md:py-20">
      <Container>
        <SectionHeader
          title="Professional Experience"
          subtitle="10+ years of progressive experience in industrial automation and control systems engineering"
        />
        <ExperienceTimeline />
      </Container>
    </div>
  )
}
