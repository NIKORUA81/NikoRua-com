import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, RoundedBox } from '@react-three/drei'

interface FloatingCard3DProps {
  position: [number, number, number]
  title: string
  color?: string
  delay?: number
}

export const FloatingCard3D = ({ position, title, color = '#6366f1', delay = 0 }: FloatingCard3DProps) => {
  const meshRef = useRef<any>()
  
  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime() + delay
      meshRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.2
      meshRef.current.rotation.y = Math.sin(t * 0.3) * 0.1
    }
  })

  return (
    <group ref={meshRef} position={position}>
      <RoundedBox args={[2.5, 1.5, 0.1]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color={color} transparent opacity={0.85} />
      </RoundedBox>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.25}
        color="#fff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff2"
      >
        {title}
      </Text>
    </group>
  )
}