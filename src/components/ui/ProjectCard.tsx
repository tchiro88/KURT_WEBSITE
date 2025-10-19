import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '@/lib/types'
import Card from './Card'
import Button from './Button'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover className="flex h-full flex-col">
      {/* Project Header */}
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-bold text-neutral-900">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-primary-600">
          {project.category}
        </p>
      </div>

      {/* Project Description */}
      <p className="mb-4 flex-grow text-neutral-600">
        {project.description}
      </p>

      {/* Key Metrics */}
      {project.metrics && (
        <div className="mb-4 grid grid-cols-2 gap-3 rounded-lg bg-neutral-50 p-3">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-lg font-bold text-primary-600">
                {metric.value}
              </div>
              <div className="text-xs text-neutral-600">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tech Stack */}
      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-block rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-auto flex gap-2">
        {project.link && (
          <Button
            href={project.link}
            variant="primary"
            size="sm"
            icon={<ExternalLink className="h-4 w-4" />}
          >
            View Project
          </Button>
        )}
        {project.github && (
          <Button
            href={project.github}
            variant="outline"
            size="sm"
            icon={<Github className="h-4 w-4" />}
          >
            Source
          </Button>
        )}
      </div>
    </Card>
  )
}
