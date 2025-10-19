interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({
  children,
  className = '',
  hover = false,
}: CardProps) {
  return (
    <div
      className={`rounded-lg border border-neutral-200 bg-white p-6 ${
        hover
          ? 'transition-all duration-300 hover:shadow-lg hover:border-primary-300'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
