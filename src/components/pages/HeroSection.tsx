'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 md:py-32">
      <Container>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-block"
            >
              <span className="rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
                Industrial Automation Engineer
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl lg:text-6xl"
            >
              Transforming Industrial Operations with{' '}
              <span className="text-primary-600">Intelligent Automation</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-lg text-neutral-600 md:text-xl"
            >
              10+ years of experience delivering control systems, IIoT solutions,
              and automation projects worth $6M+ across mining, agriculture, and
              manufacturing sectors.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Button
                href="/projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
              >
                View Projects
              </Button>
              <Button
                href="/resume.pdf"
                variant="secondary"
                size="lg"
                icon={<Download className="h-5 w-5" />}
              >
                Download Resume
              </Button>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-8 border-t border-neutral-200 pt-8"
            >
              <div>
                <div className="text-3xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">$6M+</div>
                <div className="text-sm text-neutral-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-neutral-600">Systems Deployed</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
