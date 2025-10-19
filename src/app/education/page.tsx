import type { Metadata } from 'next'
import EducationList from '@/components/pages/EducationList'
import SectionHeader from '@/components/ui/SectionHeader'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Education',
  description: 'Educational background and professional qualifications in industrial automation and engineering',
}

export default function EducationPage() {
  return (
    <div className="py-12 md:py-20">
      <Container>
        <SectionHeader
          title="Education & Qualifications"
          subtitle="Formal education and professional development in automation engineering and business"
        />
        <EducationList />
      </Container>
    </div>
  )
}
