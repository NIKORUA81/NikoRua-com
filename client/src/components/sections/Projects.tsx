import { useState } from 'react'
import { SectionWrapper } from '@components/ui/SectionWrapper'
import { projects } from '@data/projects'
import { cn } from '@utils/math'

const categoryMeta: Record<string, { icon: string; gradient: string }> = {
  ai:             { icon: '🤖', gradient: 'from-violet-600 via-purple-600 to-indigo-700' },
  data:           { icon: '🗄️', gradient: 'from-blue-600 via-cyan-600 to-teal-700' },
  web:            { icon: '🌐', gradient: 'from-indigo-600 via-blue-600 to-cyan-700' },
  mobile:         { icon: '📱', gradient: 'from-pink-600 via-rose-600 to-red-700' },
  education:      { icon: '🎓', gradient: 'from-emerald-600 via-green-600 to-teal-700' },
  infrastructure: { icon: '⚙️', gradient: 'from-slate-600 via-gray-600 to-zinc-700' },
}

export const Projects = () => {
  const [filter, setFilter] = useState<string>('all')
  const categories = ['all', 'web', 'mobile', 'data', 'ai', 'education']

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient">
        Proyectos Destacados
      </h2>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all',
              filter === cat
                ? 'bg-primary text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            )}
          >
            {cat === 'all' ? 'Todos' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Grilla de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(project => {
          const meta = categoryMeta[project.category] ?? categoryMeta.web
          const hasRealImage = Boolean(project.image) && !project.image.startsWith('/projects/')

          return (
            <div
              key={project.id}
              className="glass-card group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Imagen o placeholder */}
              <div className="h-48 rounded-xl mb-4 overflow-hidden relative">
                {hasRealImage ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className={cn(
                      'w-full h-full bg-gradient-to-br flex flex-col items-center justify-center gap-3',
                      meta.gradient
                    )}
                  >
                    <span className="text-5xl">{meta.icon}</span>
                    <span className="text-white/80 text-sm font-medium px-4 text-center leading-tight">
                      {project.title}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {project.featured && (
                  <span className="absolute top-3 right-3 bg-primary/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    Destacado
                  </span>
                )}
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map(tech => (
                  <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                    🔗 Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm">
                    📦 Código
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
