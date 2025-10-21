'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-600 via-neutral-500 to-neutral-600 py-12 sm:py-20 md:py-32 border-b border-primary-500/30">
      <Container>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Robot Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 sm:mb-6 text-5xl sm:text-6xl"
            >
              🤖
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-block"
            >
              <span className="rounded-none bg-neutral-400 border border-primary-500 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-primary-500 tracking-wider uppercase whitespace-nowrap">
                [ INDUSTRIAL AUTOMATION ENGINEER ]
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 text-2xl font-bold text-primary-500 sm:text-3xl md:text-5xl lg:text-6xl tracking-wide uppercase leading-tight"
            >
              TRANSFORMING INDUSTRIAL OPS WITH{' '}
              <span className="text-primary-400">INTELLIGENT_AUTOMATION</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-base text-accent-400 md:text-lg leading-relaxed"
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
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
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
              className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 border-t border-primary-500/30 pt-8"
            >
              <div className="border border-primary-500/30 bg-neutral-400/20 p-4 text-center">
                <div className="text-3xl font-bold text-primary-500 font-mono">10+</div>
                <div className="text-xs text-accent-400 uppercase tracking-wider mt-2">Years_Experience</div>
              </div>
              <div className="border border-primary-500/30 bg-neutral-400/20 p-4 text-center">
                <div className="text-3xl font-bold text-primary-500 font-mono">$6M+</div>
                <div className="text-xs text-accent-400 uppercase tracking-wider mt-2">Projects_Delivered</div>
              </div>
              <div className="border border-primary-500/30 bg-neutral-400/20 p-4 text-center">
                <div className="text-3xl font-bold text-primary-500 font-mono">50+</div>
                <div className="text-xs text-accent-400 uppercase tracking-wider mt-2">Systems_Deployed</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
