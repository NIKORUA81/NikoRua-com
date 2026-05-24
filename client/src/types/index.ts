export interface PersonalInfo {
  name: string
  title: string
  subtitle: string
  location: string
  email: string
  phone?: string
  avatar?: string
  cvUrl: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  model3d?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  category: 'web' | 'mobile' | 'data' | 'ai' | 'education' | 'infrastructure'
  featured?: boolean
  year: number
  role?: string
}

export interface Experience {
  id: string
  company: string
  role: string
  location: string
  startDate: string
  endDate?: string
  current?: boolean
  description: string
  achievements: string[]
  technologies: string[]
  logo?: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  location: string
  startDate: string
  endDate?: string
  current?: boolean
  description?: string
  logo?: string
}

export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'ai' | 'soft'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  icon?: string
  years?: number
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export type SectionId = 'home' | 'about' | 'projects' | 'experience' | 'skills' | 'contact'