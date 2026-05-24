import { useEffect, useRef } from 'react'

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  onReveal?: () => void
  once?: boolean
}

export const useScrollReveal = ({
  threshold = 0.1,
  rootMargin = '-50px',
  onReveal,
  once = true,
}: UseScrollRevealOptions = {}) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          onReveal?.()
          
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          element.classList.remove('is-visible')
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, onReveal, once])

  return ref
}