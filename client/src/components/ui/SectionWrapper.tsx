import { cn } from '@utils/math'
import { useScrollReveal } from '@hooks/useScrollReveal'

interface SectionWrapperProps {
  id?: string
  className?: string
  children: React.ReactNode
  delay?: number
}

export const SectionWrapper = ({ id, className = '', children, delay = 0 }: SectionWrapperProps) => {
  const ref = useScrollReveal({ threshold: 0.1, rootMargin: '-100px' })
  
  return (
    <section
      id={id}
      ref={ref as any}
      className={cn(
        'reveal-on-scroll section-padding max-w-7xl mx-auto',
        `delay-${delay * 100}`,
        className
      )}
    >
      {children}
    </section>
  )
}