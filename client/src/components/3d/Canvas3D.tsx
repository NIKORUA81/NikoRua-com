import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Preload, Stats } from '@react-three/drei'
import { Suspense, memo } from 'react'

interface Canvas3DProps {
  children: React.ReactNode
  className?: string
  showStats?: boolean
}

export const Canvas3D = memo(({ children, className = '', showStats = false }: Canvas3DProps) => {
  return (
    <div className={`fixed inset-0 z-0 pointer-events-none ${className}`}>
      <Canvas
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        onCreated={({ gl }) => gl.setClearColor('#020617')}
        dpr={[1, 2]}
        frameloop="demand"
        linear
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          
          {/* Iluminación */}
          <ambientLight intensity={0.4} color="#94a3b8" />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow 
            shadow-mapSize={[1024, 1024]}
          />
          <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#6366f1" />
          
          {/* Entorno para reflejos realistas */}
          <Environment preset="city" background={false} />
          
          {children}
          
          <Preload all />
          
          {/* Stats para debugging en desarrollo */}
          {import.meta.env.DEV && showStats && <Stats />}
        </Suspense>
      </Canvas>
    </div>
  )
})

Canvas3D.displayName = 'Canvas3D'