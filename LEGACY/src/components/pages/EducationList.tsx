'use client'

import { motion } from 'framer-motion'
import { education } from '@/lib/data/education'
import Card from '../ui/Card'
import { staggerContainer, fadeInUp } from '../animations/variants'

export default function EducationList() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {education.map((edu) => (
        <motion.div key={edu.id} variants={fadeInUp}>
          <Card>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
              <div className="flex-grow">
                <h3 className="mb-2 text-xl font-bold text-primary-400">
                  {edu.degree}
                </h3>
                <p className="mb-4 text-accent-400">
                  {edu.institution}
                  {edu.location && ` • ${edu.location}`}
                  {' • '}
                  {edu.endDate}
                </p>
                {edu.description && (
                  <p className="mb-4 text-accent-400">{edu.description}</p>
                )}
                {edu.courses && edu.courses.length > 0 && (
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-primary-500 uppercase tracking-wider">
                      Key Courses:
                    </h4>
                    <ul className="grid grid-cols-1 gap-2 text-sm text-accent-400 md:grid-cols-2">
                      {edu.courses.map((course, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary-600">•</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
