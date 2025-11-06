// Core Data Types for Portfolio

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  video?: string;
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'concept';
  date: Date;

  // Project Metrics
  metrics: {
    label: string;
    value: string;
    icon?: string;
  }[];

  // Technical Details
  techStack: string[];
  protocols?: string[];
  platforms?: string[];

  // Business Impact
  client?: string;
  industry?: string;
  projectValue?: string;
  roi?: string;

  // Role-specific highlights
  relevantFor: TargetRole[];
  highlights: string[];
}

export type ProjectCategory =
  | 'Mining Automation'
  | 'IIoT Platform'
  | 'SCADA System'
  | 'PLC Programming'
  | 'Integration'
  | 'Data Analytics'
  | 'Cloud/Edge Computing'
  | 'Robotics';

export type TargetRole =
  | 'Pre-Sales Solution Architect'
  | 'Technical Sales Engineer'
  | 'Solutions Engineer'
  | 'ROC Controller'
  | 'Automation Engineer'
  | 'SCADA Engineer'
  | 'IIoT Engineer'
  | 'Control Systems Engineer';

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date | 'present';
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  projectValue?: string;
  keyClients?: string[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  yearsExperience?: number;
  icon?: string;
  description?: string;
  relevantFor: TargetRole[];
}

export type SkillCategory =
  | 'Control Systems'
  | 'SCADA & HMI'
  | 'IIoT & Modern'
  | 'Industrial Protocols'
  | 'Software Development'
  | 'Cloud & DevOps'
  | 'Data & Analytics'
  | 'Business & Commercial'
  | 'Mining Domain';

export type SkillLevel = 'expert' | 'advanced' | 'intermediate' | 'learning';

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: number;
  description?: string;
  courses?: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  date: Date;
  image: string;
  images?: string[];
  video?: string;

  // Executive Summary
  challenge: string;
  solution: string;
  results: string;

  // Detailed Sections
  background: string;
  approach: string;
  implementation: string;
  outcomes: string;

  // Metrics
  metrics: {
    label: string;
    value: string;
    description?: string;
  }[];

  // Technical Details
  techStack: string[];
  timeline: string;
  teamSize?: string;
  role: string;

  // Business Impact
  projectValue: string;
  roi?: string;

  // Testimonial
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };

  relevantFor: TargetRole[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: Date;
  readTime: string;
  image?: string;
  tags: string[];
  category: BlogCategory;
  featured: boolean;
}

export type BlogCategory =
  | 'Technical Tutorial'
  | 'Industry Insights'
  | 'Project Showcase'
  | 'Thought Leadership'
  | 'Mining Technology'
  | 'IIoT & Industry 4.0'
  | 'Career Development';

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: Date;
  expiryDate?: Date;
  credentialUrl?: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
  date: Date;
  projectRelated?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin: string;
  github: string;
  website?: string;
  calendly?: string;
}

// Metadata for SEO
export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

// Stats/Metrics Display
export interface StatMetric {
  label: string;
  value: string;
  suffix?: string;
  prefix?: string;
  icon?: string;
  change?: {
    value: string;
    trend: 'up' | 'down';
  };
}

// Filter/Search
export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

export interface SearchFilters {
  category?: ProjectCategory;
  techStack?: string[];
  industry?: string;
  role?: TargetRole;
  searchTerm?: string;
}
