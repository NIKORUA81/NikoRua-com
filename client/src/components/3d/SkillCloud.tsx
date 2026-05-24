import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

interface SkillCloudProps {
  skills: { name: string; color: string }[]
  scrollProgress: number
}

export const SkillCloud = ({ skills, scrollProgress }: SkillCloudProps) => {
  const groupRef = useRef<any>()
  
  const positions = useMemo(() => {
    return skills.map(() => random.inSphere(new Float32Array(3), { radius: 4 }))
  }, [skills])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1 * (1 + scrollProgress)
      groupRef.current.rotation.x = Math.sin(scrollProgress * Math.PI) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <Text
          key={skill.name}
          position={positions[i] as [number, number, number]}
          fontSize={0.3}
          color={skill.color}
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Medium.woff2"
        >
          {skill.name}
        </Text>
      ))}
    </group>
  )
}