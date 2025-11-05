import { defineCollection, z } from 'astro:content';

// Project Collection Schema
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'Mining Automation',
      'IIoT Platform',
      'SCADA System',
      'PLC Programming',
      'Integration',
      'Data Analytics',
      'Cloud/Edge Computing',
      'Robotics',
    ]),
    image: z.string(),
    images: z.array(z.string()).optional(),
    video: z.string().optional(),
    demoUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['completed', 'in-progress', 'concept']).default('completed'),
    date: z.date(),

    // Metrics
    metrics: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
        icon: z.string().optional(),
      })
    ),

    // Technical
    techStack: z.array(z.string()),
    protocols: z.array(z.string()).optional(),
    platforms: z.array(z.string()).optional(),

    // Business
    client: z.string().optional(),
    industry: z.string().optional(),
    projectValue: z.string().optional(),
    roi: z.string().optional(),

    // Role relevance
    relevantFor: z.array(
      z.enum([
        'Pre-Sales Solution Architect',
        'Technical Sales Engineer',
        'Solutions Engineer',
        'ROC Controller',
        'Automation Engineer',
        'SCADA Engineer',
        'IIoT Engineer',
        'Control Systems Engineer',
      ])
    ),
    highlights: z.array(z.string()),
  }),
});

// Blog Collection Schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    author: z.string().default('Kurt Adams'),
    date: z.date(),
    readTime: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    category: z.enum([
      'Technical Tutorial',
      'Industry Insights',
      'Project Showcase',
      'Thought Leadership',
      'Mining Technology',
      'IIoT & Industry 4.0',
      'Career Development',
    ]),
    featured: z.boolean().default(false),
  }),
});

// Case Studies Collection Schema
const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    client: z.string(),
    industry: z.string(),
    date: z.date(),
    image: z.string(),
    images: z.array(z.string()).optional(),
    video: z.string().optional(),

    // Executive Summary
    challenge: z.string(),
    solution: z.string(),
    results: z.string(),

    // Metrics
    metrics: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
        description: z.string().optional(),
      })
    ),

    // Technical
    techStack: z.array(z.string()),
    timeline: z.string(),
    teamSize: z.string().optional(),
    role: z.string(),

    // Business
    projectValue: z.string(),
    roi: z.string().optional(),

    // Testimonial
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      position: z.string(),
      company: z.string(),
    }).optional(),

    relevantFor: z.array(
      z.enum([
        'Pre-Sales Solution Architect',
        'Technical Sales Engineer',
        'Solutions Engineer',
        'ROC Controller',
        'Automation Engineer',
        'SCADA Engineer',
        'IIoT Engineer',
        'Control Systems Engineer',
      ])
    ),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
  'case-studies': caseStudiesCollection,
};
