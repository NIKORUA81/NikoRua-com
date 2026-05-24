import { useRef, useMemo, memo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { Vector3 } from 'three'

interface ParticlesHeroProps {
  scrollY: number
  scrollYProgress: number
  count?: number
}

export const ParticlesHero = memo(({ 
  scrollY, 
  scrollYProgress, 
  count = 2000 
}: ParticlesHeroProps) => {
  const ref = useRef<any>()
  const mousePosition = useRef(new Vector3())
  
  // Generar partículas en esfera con colores personalizados
  const particles = useMemo(() => {
    const positions = random.inSphere(new Float32Array(count * 3), { radius: 4 })
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    
    for (let i = 0; i < count; i++) {
      // Gradiente: primary (#6366f1) a secondary (#8b5cf6)
      const t = Math.random()
      colors[i * 3] = 0.39 + t * 0.17      // R: 99-139
      colors[i * 3 + 1] = 0.40 + t * 0.22  // G: 102-139  
      colors[i * 3 + 2] = 0.95 + t * 0.05  // B: 241-247
      
      // Tamaño variado para profundidad
      sizes[i] = 0.015 + Math.random() * 0.025
    }
    
    return { positions, colors, sizes, count }
  }, [count])

  useFrame((state, delta) => {
    if (!ref.current) return
    
    // Rotación basada en scroll
    ref.current.rotation.y += delta * 0.03 * (scrollYProgress * 1.5 + 0.5)
    ref.current.rotation.x = Math.sin(scrollYProgress * Math.PI * 2) * 0.15
    
    // Efecto de "respiración" sutil
    const time = state.clock.getElapsedTime()
    ref.current.scale.setScalar(1 + Math.sin(time * 0.5) * 0.05)
    
    // Interacción sutil con mouse (si está disponible)
    if (mousePosition.current) {
      ref.current.rotation.x += mousePosition.current.y * 0.001
      ref.current.rotation.y += mousePosition.current.x * 0.001
    }
  })

  return (
    <group position={[0, -scrollY * 0.0005, 0]}>
      <Points
        ref={ref}
        positions={particles.positions}
        colors={particles.colors}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          vertexColors
          sizeAttenuation
          depthWrite={false}
          size={0.02}
          toneMapped={false}
        />
      </Points>
    </group>
  )
})

ParticlesHero.displayName = 'ParticlesHero'