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
    default: 'bg-neutral-100 text-neutral-700 border border-neutral-200',
    primary: 'bg-primary-100 text-primary-700 border border-primary-200',
    accent: 'bg-accent-100 text-accent-700 border border-accent-200',
  }

  return (
    <span
      className={`inline-block rounded-md font-medium ${sizes[size]} ${variants[variant]}`}
    >
      {skill}
    </span>
  )
}
