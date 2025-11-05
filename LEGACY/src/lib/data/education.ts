import type { Education } from '@/lib/types'

export const education: Education[] = [
  {
    id: 'adv-diploma-automation',
    degree: 'Advanced Diploma in Industrial Automation Engineering',
    institution: 'Engineering Institute of Technology',
    endDate: 'February 2023',
    description: 'Comprehensive program covering advanced control systems, process automation, and industrial integration.',
    courses: [
      'Advanced Process Control',
      'PLC Programming (Multiple Platforms)',
      'SCADA System Design',
      'Industrial Networking',
      'Control Theory',
      'Process Optimization',
    ],
  },
  {
    id: 'bachelor-business',
    degree: 'Bachelor of Business Studies',
    institution: 'Massey University',
    location: 'New Zealand',
    endDate: 'December 2015',
    description: 'Double major in Marketing and Finance, providing business acumen for technical sales and project management.',
  },
  {
    id: 'cert-engineering',
    degree: 'Certificate III in Engineering Mechanical Trade',
    institution: 'MEM30219',
    endDate: '2015',
    description: 'Foundational mechanical engineering trade qualification.',
  },
]
