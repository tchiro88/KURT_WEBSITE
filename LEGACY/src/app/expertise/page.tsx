import type { Metadata } from 'next'
import SkillsMatrix from '@/components/pages/SkillsMatrix'
import SectionHeader from '@/components/ui/SectionHeader'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Expertise',
  description: 'Technical expertise in industrial automation, control systems, IIoT, and software development',
}

export default function ExpertisePage() {
  return (
    <div className="py-12 md:py-20">
      <Container>
        <SectionHeader
          title="Technical Expertise"
          subtitle="Comprehensive skill set spanning industrial automation, modern IIoT technologies, and software development"
        />
        <SkillsMatrix />
      </Container>
    </div>
  )
}
