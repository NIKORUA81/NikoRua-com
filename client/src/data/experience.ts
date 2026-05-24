import { Experience, Education } from '@types'

export const workExperience: Experience[] = [
  {
    id: 'exp-current',
    company: 'Consultoría TI Independiente',
    role: 'Ingeniero de Sistemas & Consultor IA',
    location: 'Remoto / Colombia',
    startDate: '2024-01',
    current: true,
    description: 'Asesoría en arquitectura de software, bases de datos e implementación de soluciones de IA para empresas educativas y del sector público.',
    achievements: [
      'Diseño de arquitecturas escalables con Node.js y React',
      'Implementación de pipelines de datos para analytics educativo',
      'Capacitación en herramientas TIC para equipos docentes',
    ],
    technologies: ['Node.js', 'React', 'PostgreSQL', 'TensorFlow', 'Docker'],
  },
  // Añadir más experiencias...
]

export const education: Education[] = [
  {
    id: 'edu-master',
    institution: 'Universidad [Nombre]',
    degree: 'Máster en Dirección y Gestión de TI e Inteligencia Artificial',
    field: 'Tecnologías de la Información',
    location: 'Modalidad Virtual',
    startDate: '2024-09',
    current: true,
    description: 'Especialización en gestión estratégica de TI, machine learning aplicado y transformación digital.',
    logo: '/logos/university-master.png',
  },
  {
    id: 'edu-edumatica',
    institution: 'Universidad [Nombre]',
    degree: 'Especialización',
    field: 'Edumática - Educación mediada por TICs',
    location: 'Colombia',
    startDate: '2022-01',
    endDate: '2023-12',
    description: 'Enfoque en diseño instruccional, entornos virtuales de aprendizaje y evaluación educativa con tecnología.',
  },
  {
    id: 'edu-databases',
    institution: 'Universidad [Nombre]',
    degree: 'Especialización',
    field: 'Bases de Datos',
    location: 'Colombia',
    startDate: '2020-01',
    endDate: '2021-12',
    description: 'Administración avanzada, modelado dimensional, optimización de consultas y NoSQL.',
  },
  {
    id: 'edu-systems',
    institution: 'Universidad [Nombre]',
    degree: 'Pregrado',
    field: 'Ingeniería de Sistemas',
    location: 'Colombia',
    startDate: '2015-01',
    endDate: '2019-12',
    description: 'Formación integral en desarrollo de software, redes, sistemas operativos y gestión de proyectos TI.',
  },
]