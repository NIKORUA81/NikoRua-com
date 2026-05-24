import { useState, useEffect } from 'react'
import { Canvas3D } from './Canvas3D'
import { ParticlesHero } from './ParticlesHero'

export const Background3D = () => {
  const [scroll, setScroll] = useState({ y: 0, progress: 0 })

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScroll({ y, progress: max > 0 ? y / max : 0 })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Canvas3D>
      <ParticlesHero scrollY={scroll.y} scrollYProgress={scroll.progress} />
    </Canvas3D>
  )
}
