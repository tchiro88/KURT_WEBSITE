'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Navigation from './Navigation'
import MobileMenu from './MobileMenu'
import Container from '../ui/Container'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-neutral-500/95 shadow-lg shadow-primary-500/20 backdrop-blur-sm border-b border-primary-500/30'
            : 'bg-neutral-500 border-b border-neutral-400'
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold text-primary-500 transition-colors hover:text-primary-400 md:text-2xl tracking-wider"
            >
              🤖 KURT_ADAMS.EXE
            </Link>

            {/* Desktop Navigation */}
            <Navigation className="hidden md:flex" />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-primary-500 transition-colors hover:bg-neutral-400 md:hidden border border-primary-500/50"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
