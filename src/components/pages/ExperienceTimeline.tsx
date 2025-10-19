'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/data/experience'
import TimelineItem from '../ui/TimelineItem'
import { staggerContainer, fadeInUp } from '../animations/variants'

export default function ExperienceTimeline() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 md:left-1/2" />

      {/* Timeline Items */}
      <div className="space-y-12">
        {experience.map((item, index) => (
          <motion.div key={item.id} variants={fadeInUp}>
            <TimelineItem
              experience={item}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
