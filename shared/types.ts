export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  errors?: { field: string; message: string }[]
}