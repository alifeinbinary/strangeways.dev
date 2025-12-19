interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  label?: string
  className?: string
}

const sizeClasses: Record<NonNullable<SpinnerProps['size']>, string> = {
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
}

export function Spinner({
  size = 'md',
  label = 'Loading...',
  className = '',
}: SpinnerProps) {
  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      role="status"
      aria-label={label}
    >
      <>
        <img
          src="/tesseract-dark.svg"
          alt={label}
          className={`${sizeClasses[size]} block animate-spin dark:hidden`}
        />
        <img
          src="/tesseract-light.svg"
          alt={label}
          className={`${sizeClasses[size]} hidden animate-spin dark:block`}
        />
      </>
      <span className="sr-only">{label}</span>
    </div>
  )
}
