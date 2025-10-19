interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-600 md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
