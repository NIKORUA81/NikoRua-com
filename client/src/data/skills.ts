import { Skill } from '@types'

export const skills: Skill[] = [
  // Frontend
  { id: 'react', name: 'React', category: 'frontend', level: 'expert', years: 5 },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', level: 'expert', years: 4 },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', level: 'advanced', years: 3 },
  { id: 'threejs', name: 'Three.js / R3F', category: 'frontend', level: 'advanced', years: 2 },
  
  // Backend
  { id: 'nodejs', name: 'Node.js', category: 'backend', level: 'expert', years: 6 },
  { id: 'express', name: 'Express / FastAPI', category: 'backend', level: 'advanced', years: 5 },
  { id: 'python', name: 'Python', category: 'backend', level: 'advanced', years: 4 },
  
  // Bases de Datos
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', level: 'expert', years: 6 },
  { id: 'mongodb', name: 'MongoDB', category: 'database', level: 'advanced', years: 4 },
  { id: 'redis', name: 'Redis', category: 'database', level: 'intermediate', years: 3 },
  { id: 'sql-optimization', name: 'Optimización SQL', category: 'database', level: 'expert', years: 5 },
  
  // IA & Data
  { id: 'tensorflow', name: 'TensorFlow / PyTorch', category: 'ai', level: 'intermediate', years: 2 },
  { id: 'ml-ops', name: 'MLOps', category: 'ai', level: 'intermediate', years: 1 },
  { id: 'nlp', name: 'Procesamiento de Lenguaje', category: 'ai', level: 'intermediate', years: 2 },
  
  // DevOps
  { id: 'docker', name: 'Docker', category: 'devops', level: 'advanced', years: 4 },
  { id: 'ci-cd', name: 'CI/CD (GitHub Actions)', category: 'devops', level: 'advanced', years: 3 },
  { id: 'linux', name: 'Linux / Bash', category: 'devops', level: 'advanced', years: 7 },
  
  // Habilidades Blandas
  { id: 'leadership', name: 'Liderazgo Técnico', category: 'soft', level: 'advanced' },
  { id: 'teaching', name: 'Enseñanza & Mentoría', category: 'soft', level: 'expert' },
  { id: 'communication', name: 'Comunicación Técnica', category: 'soft', level: 'expert' },
]

export const getSkillsByCategory = (category: Skill['category']) => 
  skills.filter(s => s.category === category)

export const skillLevelToProgress = (level: Skill['level']): number => ({
  beginner: 25,
  intermediate: 50,
  advanced: 75,
  expert: 100,
}[level])