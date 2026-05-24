import { Project } from '@types'

export const projects: Project[] = [
  {
    id: 'proj-edu-ai',
    title: 'Plataforma Educativa Adaptativa con IA',
    description: 'Sistema de aprendizaje personalizado que adapta contenidos según el progreso del estudiante usando machine learning.',
    longDescription: 'Proyecto de investigación aplicado que combina pedagogía con inteligencia artificial para crear experiencias de aprendizaje únicas...',
    image: '/projects/edu-ai-platform.jpg',
    model3d: '/models/edu-platform.glb',
    technologies: ['React', 'Node.js', 'TensorFlow.js', 'MongoDB', 'Python'],
    liveUrl: 'https://edu.nikorua.com',
    githubUrl: 'https://github.com/nikorua/edu-ai-platform',
    category: 'ai',
    featured: true,
    year: 2025,
    role: 'Arquitecto Full-Stack & Investigador',
  },
  {
    id: 'proj-db-optimizer',
    title: 'Optimizador de Consultas SQL con IA',
    description: 'Herramienta que analiza y sugiere optimizaciones para consultas de bases de datos usando modelos de lenguaje.',
    longDescription: '...',
    image: '/projects/sql-optimizer.jpg',
    technologies: ['Python', 'PostgreSQL', 'Transformers', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/nikorua/sql-optimizer',
    category: 'data',
    featured: true,
    year: 2024,
    role: 'Desarrollador Backend & Data Engineer',
  },
  {
    id: 'proj-portfolio-3d',
    title: 'Portafolio 3D Interactivo (este sitio)',
    description: 'Portafolio profesional con efectos 3D, animaciones al scroll y arquitectura moderna React + Three.js.',
    longDescription: '...',
    image: '/projects/portfolio-3d.jpg',
    technologies: ['React', 'Three.js', 'R3F', 'Tailwind', 'Node.js', 'Docker'],
    liveUrl: 'https://nikorua.com',
    githubUrl: 'https://github.com/nikorua/nikorua-portfolio',
    category: 'web',
    featured: true,
    year: 2026,
    role: 'Desarrollador Full-Stack & Diseñador UX',
  },
  // Añadir más proyectos aquí...
]

export const getFeaturedProjects = () => projects.filter(p => p.featured)
export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(p => p.category === category)