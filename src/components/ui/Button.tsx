import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  disabled?: boolean
  className?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseStyles = `inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-lg ${
    fullWidth ? 'w-full' : ''
  } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`

  const variants = {
    primary: 'bg-neutral-400 text-primary-500 border-2 border-primary-500 hover:bg-primary-500 hover:text-neutral-900 active:bg-primary-400 shadow-lg shadow-primary-500/20 font-bold tracking-wider uppercase',
    secondary: 'bg-transparent text-primary-500 border-2 border-primary-500 hover:bg-primary-500/20 active:bg-primary-500/30 font-bold tracking-wider uppercase',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500/20 active:bg-primary-500/30 font-bold tracking-wider uppercase',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  )
}
