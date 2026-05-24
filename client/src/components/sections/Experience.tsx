import { SectionWrapper } from '@components/ui/SectionWrapper'
import { workExperience, education } from '@data/experience'

const TimelineItem = ({ title, subtitle, date, current, description, achievements }: any) => (
  <div className="relative pl-8 pb-8 border-l-2 border-primary/30 last:border-0 last:pb-0">
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-darker" />
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-primary font-medium">{subtitle}</p>
    <p className="text-slate-500 text-sm mb-2">{date} {current && '• Actual'}</p>
    <p className="text-slate-300 mb-3">{description}</p>
    {achievements && (
      <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
        {achievements.map((a: string, i: number) => <li key={i}>{a}</li>)}
      </ul>
    )}
  </div>
)

export const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">Experiencia & Formación</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">💼 Experiencia Laboral</h3>
          {workExperience.map(exp => (
            <TimelineItem key={exp.id} {...exp} date={`${exp.startDate} - ${exp.current ? 'Actual' : exp.endDate}`} />
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">🎓 Formación Académica</h3>
          {education.map(edu => (
            <TimelineItem key={edu.id} title={edu.degree} subtitle={edu.institution} date={`${edu.startDate} - ${edu.current ? 'Actual' : edu.endDate}`} description={edu.description} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}