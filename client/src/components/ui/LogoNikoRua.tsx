import { memo } from 'react'
import { cn } from '@utils/math'

interface LogoNikoRuaProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  withText?: boolean
  animated?: boolean
}

export const LogoNikoRua = memo(({ 
  size = 'md', 
  className = '', 
  withText = true,
  animated = true 
}: LogoNikoRuaProps) => {
  const sizes = {
    sm: { width: 32, height: 32, fontSize: 14 },
    md: { width: 48, height: 48, fontSize: 18 },
    lg: { width: 80, height: 80, fontSize: 28 },
    xl: { width: 120, height: 120, fontSize: 40 },
  }

  const currentSize = sizes[size]

  return (
    <div 
      className={cn('flex items-center gap-3', className)}
      style={{ width: withText ? 'auto' : currentSize.width }}
    >
      <svg
        width={currentSize.width}
        height={currentSize.height}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(animated && 'animate-pulse-slow')}
      >
        <defs>
          {/* Gradiente principal */}
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          
          {/* Glow effect */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Red de nodos - Círculo exterior */}
        <g className={animated ? 'animate-spin-slow' : undefined} style={{ transformOrigin: 'center' }}>
          {/* Nodos conectados */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180
            const x = 60 + 45 * Math.cos(angle)
            const y = 60 + 45 * Math.sin(angle)
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="2"
                fill="url(#logoGradient)"
                opacity="0.6"
              />
            )
          })}
          
          {/* Conexiones entre nodos */}
          {[...Array(8)].map((_, i) => {
            const angle1 = (i * 45 * Math.PI) / 180
            const angle2 = ((i + 1) * 45 * Math.PI) / 180
            const x1 = 60 + 45 * Math.cos(angle1)
            const y1 = 60 + 45 * Math.sin(angle1)
            const x2 = 60 + 45 * Math.cos(angle2)
            const y2 = 60 + 45 * Math.sin(angle2)
            return (
              <line
                key={`line-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#logoGradient)"
                strokeWidth="0.5"
                opacity="0.3"
              />
            )
          })}
        </g>

        {/* Monograma NR */}
        <g filter="url(#glow)">
          {/* Letra N */}
          <path
            d="M 35 25 L 35 95 L 40 95 L 52 75 L 52 25 Z"
            fill="url(#logoGradient)"
            opacity="0.9"
          />
          <path
            d="M 52 25 L 40 45 L 52 65 L 52 25 Z"
            fill="url(#logoGradient)"
            opacity="0.7"
          />
          
          {/* Letra R */}
          <path
            d="M 60 25 L 60 95 L 65 95 L 65 65 L 75 65 L 82 55 L 75 45 L 65 45 L 65 30 L 80 30 L 80 25 Z"
            fill="url(#logoGradient)"
            opacity="0.9"
          />
          <path
            d="M 65 30 L 75 30 Q 80 30 80 37.5 Q 80 45 75 45 L 65 45 Z"
            fill="url(#logoGradient)"
            opacity="0.6"
          />
        </g>

        {/* Nodos centrales decorativos */}
        <circle cx="60" cy="60" r="3" fill="#6366f1" opacity="0.8" />
        <circle cx="45" cy="50" r="1.5" fill="#8b5cf6" opacity="0.6" />
        <circle cx="75" cy="70" r="1.5" fill="#8b5cf6" opacity="0.6" />
      </svg>

      {withText && (
        <span
          className="font-bold tracking-tight text-gradient"
          style={{ fontSize: currentSize.fontSize }}
        >
          NikoRua
        </span>
      )}
    </div>
  )
})

LogoNikoRua.displayName = 'LogoNikoRua'