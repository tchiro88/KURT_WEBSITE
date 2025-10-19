'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data/projects'
import ProjectCard from '../ui/ProjectCard'
import { staggerContainer, fadeInUp } from '../animations/variants'

export default function ProjectsGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={fadeInUp}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  )
}
