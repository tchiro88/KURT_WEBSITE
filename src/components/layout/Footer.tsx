import Link from 'next/link'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import Container from '../ui/Container'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/tchiro88',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/kurt-adams-automation',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:kurt_a@me.com',
      icon: Mail,
    },
    {
      name: 'Resume',
      href: '/resume.pdf',
      icon: FileText,
    },
  ]

  return (
    <footer className="border-t border-primary-500/30 bg-neutral-500">
      <Container>
        <div className="py-8 md:py-12">
          {/* Top Section */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* About */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-primary-500 tracking-wider uppercase">
                🤖 Kurt_Adams
              </h3>
              <p className="text-sm text-neutral-50">
                Industrial Automation Engineer specializing in control systems,
                IIoT, and advanced automation solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-primary-500 tracking-wider uppercase">
                Quick_Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/projects"
                    className="text-neutral-50 transition-colors hover:text-primary-400 uppercase tracking-wide"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experience"
                    className="text-neutral-50 transition-colors hover:text-primary-400 uppercase tracking-wide"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expertise"
                    className="text-neutral-50 transition-colors hover:text-primary-400 uppercase tracking-wide"
                  >
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link
                    href="/education"
                    className="text-neutral-50 transition-colors hover:text-primary-400 uppercase tracking-wide"
                  >
                    Education
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-primary-500 tracking-wider uppercase">
                Get in Touch
              </h3>
              <div className="space-y-2 text-sm text-neutral-50">
                <p>Perth, Western Australia</p>
                <a
                  href="mailto:kurt_a@me.com"
                  className="block transition-colors hover:text-primary-400"
                >
                  kurt_a@me.com
                </a>
                <a
                  href="tel:+61434720160"
                  className="block transition-colors hover:text-primary-400"
                >
                  0434 720 160
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-primary-500/30" />

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="rounded-lg p-2 text-neutral-50 transition-colors hover:bg-neutral-400 hover:text-primary-400"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>

            {/* Copyright */}
            <p className="text-sm text-neutral-50">
              © {currentYear} Kurt Adams. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
