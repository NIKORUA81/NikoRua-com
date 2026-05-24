import { useState, useEffect } from 'react'

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
      <div 
        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}