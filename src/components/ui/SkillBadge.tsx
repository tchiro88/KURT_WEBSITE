interface SkillBadgeProps {
  skill: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'primary' | 'accent'
}

export default function SkillBadge({
  skill,
  size = 'md',
  variant = 'default',
}: SkillBadgeProps) {
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  }

  const variants = {
    default: 'bg-neutral-800 text-neutral-100 border border-primary-500/30',
    primary: 'bg-primary-900 text-primary-400 border border-primary-500',
    accent: 'bg-accent-900 text-accent-400 border border-accent-500',
  }

  return (
    <span
      className={`inline-block rounded-md font-medium ${sizes[size]} ${variants[variant]}`}
    >
      {skill}
    </span>
  )
}
