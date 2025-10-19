'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from '@/lib/constants/navigation'

interface NavigationProps {
  className?: string
  onLinkClick?: () => void
}

export default function Navigation({ className = '', onLinkClick }: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav className={className}>
      <ul className="flex flex-col gap-6 md:flex-row md:gap-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onLinkClick}
                className={`text-base font-medium transition-colors hover:text-primary-600 ${
                  isActive
                    ? 'text-primary-600'
                    : 'text-neutral-700'
                }`}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
