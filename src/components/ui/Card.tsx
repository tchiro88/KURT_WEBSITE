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
      className={`rounded-none border-2 border-primary-500/30 bg-neutral-400/10 p-6 backdrop-blur-sm ${
        hover
          ? 'transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 hover:border-primary-500 hover:bg-neutral-400/20'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
