import { useRef } from 'react'
import { Button } from '@components/ui/Button'
import { useScrollReveal } from '@hooks/useScrollReveal'

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const titleRef = useScrollReveal()
  const subtitleRef = useScrollReveal({ threshold: 0.2 })
  const buttonsRef = useScrollReveal({ threshold: 0.3 })

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden"
      id="home"
    >

      {/* Contenido DOM sobre el canvas 3D */}
      <div className="relative z-10 text-center max-w-5xl mx-auto pt-20">
        <h1 
          ref={titleRef}
          className="reveal-on-scroll text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="block text-gradient">Nicolás Rua Villalobos</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="reveal-on-scroll text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto"
        >
          <span className="block md:inline">Ingeniero de Sistemas</span>
          <span className="hidden md:inline mx-2 text-slate-600">•</span>
          <span className="block md:inline">Especialista en Bases de Datos & Edumática</span>
          <br className="md:hidden" />
          <span className="block mt-2 md:mt-0 md:inline md:ml-2 text-primary font-medium">
            🎓 Máster en IA & Gestión TI
          </span>
        </p>
        
        <div 
          ref={buttonsRef}
          className="reveal-on-scroll flex flex-wrap gap-4 justify-center"
        >
          <Button variant="primary" href="#projects" size="lg">
            Ver Proyectos
          </Button>
          <Button variant="outline" href="#contact" size="lg">
            Contáctame
          </Button>
          <Button variant="ghost" href="/cv-nicolas-rua.pdf" download size="lg">
            📄 Descargar CV
          </Button>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <svg 
            className="w-6 h-6 text-slate-400 hover:text-primary transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>

      {/* Overlay degradado para mejor legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-darker/0 via-darker/20 to-darker pointer-events-none" />
    </section>
  )
}