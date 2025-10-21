import type { Experience } from '@/lib/types'
import Card from './Card'
import SkillBadge from './SkillBadge'

interface TimelineItemProps {
  experience: Experience
  index: number
}

export default function TimelineItem({
  experience,
  index,
}: TimelineItemProps) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`relative grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 ${
        isEven ? '' : 'md:text-right'
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-4 sm:left-8 top-0 z-10 h-4 w-4 rounded-full border-4 border-white bg-primary-600 md:left-1/2 md:-ml-2" />

      {/* Content */}
      <div className={`md:col-span-1 ${isEven ? '' : 'md:col-start-2'}`}>
        <Card className="ml-12 sm:ml-16 md:ml-0">
          {/* Date Range */}
          <div className="mb-2 text-sm font-medium text-primary-600">
            {experience.startDate} – {experience.endDate || 'Present'}
          </div>

          {/* Job Title */}
          <h3 className="mb-1 text-xl font-bold text-neutral-900">
            {experience.title}
          </h3>

          {/* Company */}
          <p className="mb-4 text-sm sm:text-base text-neutral-200">
            {experience.company} {experience.location && `• ${experience.location}`}
          </p>

          {/* Description */}
          <p className="mb-4 text-neutral-200">
            {experience.description}
          </p>

          {/* Key Achievements */}
          {experience.achievements && experience.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                Key Achievements:
              </h4>
              <ul className="space-y-1 text-sm text-neutral-200">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary-600">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {experience.technologies && experience.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <SkillBadge key={tech} skill={tech} size="sm" />
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
