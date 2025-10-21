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
      className={`mb-8 sm:mb-10 md:mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500 leading-tight uppercase tracking-wider">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
