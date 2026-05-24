import { SOCIAL_LINKS } from '@utils/constants'
import { LogoNikoRua } from '@components/ui/LogoNikoRua'

export const Footer = () => (
  <footer className="border-t border-slate-800 py-12 px-4 relative z-10">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">

      {/* Logo central */}
      <LogoNikoRua size="lg" withText animated />

      {/* Links sociales */}
      <div className="flex gap-6">
        {SOCIAL_LINKS.map(s => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary transition-colors text-sm font-medium"
          >
            {s.name}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-slate-500 text-sm text-center">
        © {new Date().getFullYear()} Nicolás Rua Villalobos · Todos los derechos reservados
      </p>
    </div>
  </footer>
)
