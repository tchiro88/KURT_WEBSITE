// Project Types
export interface Project {
  id: string
  title: string
  category: string
  description: string
  longDescription?: string
  technologies: string[]
  metrics?: ProjectMetric[]
  link?: string
  github?: string
  image?: string
  featured: boolean
  startDate?: string
  endDate?: string
  status: 'completed' | 'in-progress' | 'planning'
}

export interface ProjectMetric {
  label: string
  value: string
}

// Experience Types
export interface Experience {
  id: string
  title: string
  company: string
  location?: string
  startDate: string
  endDate?: string
  current: boolean
  description: string
  achievements?: string[]
  technologies?: string[]
  projectValue?: string
}

// Skills Types
export interface SkillCategory {
  id: string
  name: string
  description?: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  yearsOfExperience?: number
  description?: string
}

// Education Types
export interface Education {
  id: string
  degree: string
  institution: string
  location?: string
  startDate?: string
  endDate: string
  description?: string
  achievements?: string[]
  courses?: string[]
}

// Navigation Types
export interface NavItem {
  label: string
  href: string
}
