import { SectionWrapper } from '@components/ui/SectionWrapper'
import { personal } from '@data/personal'

export const About = () => {
  return (
    <SectionWrapper id="about" className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Sobre Mí</h2>
      <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
        {personal.title} con sólida experiencia en arquitectura de software, optimización de bases de datos 
        y educación mediada por TICs. Actualmente cursando un Máster en IA y Gestión TI, combinando 
        rigor técnico con visión pedagógica para crear soluciones que transforman procesos y aprendizajes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {[
          { icon: '🎓', title: 'Edumática', desc: 'Diseño instruccional con TICs' },
          { icon: '🗄️', title: 'Bases de Datos', desc: 'Modelado, optimización y escalabilidad' },
          { icon: '🤖', title: 'Inteligencia Artificial', desc: 'ML aplicado y automatización inteligente' }
        ].map((item) => (
          <div key={item.title} className="glass-card text-center p-6 hover:border-primary/50 transition-all">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}