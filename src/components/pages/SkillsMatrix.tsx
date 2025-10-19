'use client'

import { motion } from 'framer-motion'
import { skillCategories } from '@/lib/data/skills'
import Card from '../ui/Card'
import SkillBadge from '../ui/SkillBadge'
import { staggerContainer, fadeInUp } from '../animations/variants'

export default function SkillsMatrix() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid gap-8 md:grid-cols-2"
    >
      {skillCategories.map((category) => (
        <motion.div key={category.id} variants={fadeInUp}>
          <Card className="h-full">
            <h3 className="mb-2 text-xl font-bold text-neutral-900">
              {category.name}
            </h3>
            {category.description && (
              <p className="mb-4 text-sm text-neutral-600">
                {category.description}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  skill={skill.name}
                  variant={
                    skill.level === 'expert'
                      ? 'primary'
                      : skill.level === 'advanced'
                      ? 'accent'
                      : 'default'
                  }
                />
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
