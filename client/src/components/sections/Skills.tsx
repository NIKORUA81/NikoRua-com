import { SectionWrapper } from '@components/ui/SectionWrapper'
import { skills } from '@data/skills'
import { skillLevelToProgress } from '@data/skills'

const categoryNames: Record<string, string> = {
  frontend: 'Frontend', backend: 'Backend', database: 'Bases de Datos',
  ai: 'IA & Data', devops: 'DevOps', soft: 'Habilidades Blandas'
}

export const Skills = () => {
  const grouped = Object.entries(
    skills.reduce((acc, skill) => {
      acc[skill.category] = acc[skill.category] || []
      acc[skill.category].push(skill)
      return acc
    }, {} as Record<string, typeof skills>)
  )

  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">Stack Tecnológico</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {grouped.map(([cat, skills]) => (
          <div key={cat} className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 capitalize">{categoryNames[cat]}</h3>
            <div className="space-y-3">
              {skills.map(skill => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-slate-400">{skill.years || '-'} años</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skillLevelToProgress(skill.level)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}