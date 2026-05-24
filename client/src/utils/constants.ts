export const SITE = {
  title: 'Nicolás Rua Villalobos | Portafolio Profesional',
  description: 'Ingeniero de Sistemas especializado en Bases de Datos, Edumática e Inteligencia Artificial',
  url: import.meta.env.VITE_SITE_URL || 'https://nikorua.com',
  author: 'Nicolás Rua Villalobos',
}

export const NAVIGATION = [
  { id: 'home', label: 'Inicio', href: '#home' },
  { id: 'about', label: 'Sobre Mí', href: '#about' },
  { id: 'projects', label: 'Proyectos', href: '#projects' },
  { id: 'experience', label: 'Experiencia', href: '#experience' },
  { id: 'skills', label: 'Habilidades', href: '#skills' },
  { id: 'contact', label: 'Contacto', href: '#contact' },
]

export const SOCIAL_LINKS = [
  { 
    name: 'GitHub', 
    icon: 'github', 
    url: 'https://github.com/nikorua',
    color: '#ffffff'
  },
  { 
    name: 'LinkedIn', 
    icon: 'linkedin', 
    url: 'https://linkedin.com/in/nicolas-rua-villalobos',
    color: '#0A66C2'
  },
  { 
    name: 'Email', 
    icon: 'mail', 
    url: 'mailto:contacto@nikorua.com',
    color: '#EA4335'
  },
]

export const PERFORMANCE = {
  PARTICLES_COUNT_DESKTOP: 2000,
  PARTICLES_COUNT_MOBILE: 800,
  SCROLL_THRESHOLD: 0.1,
  ANIMATION_DURATION: 0.8,
} as const