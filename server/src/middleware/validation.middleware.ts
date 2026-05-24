import { Request, Response, NextFunction } from 'express'
import { z, ZodSchema } from 'zod'

// Schema para formulario de contacto
export const contactSchema = z.object({
  name: z.string().min(2, 'Nombre muy corto').max(100),
  email: z.string().email('Email inválido'),
  subject: z.string().min(5, 'Asunto muy corto').max(200),
  message: z.string().min(10, 'Mensaje muy corto').max(2000),
})

export type ContactFormData = z.infer<typeof contactSchema>

// Middleware de validación genérico con Zod
export const validateContact = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body)
      next()
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.map(e => ({
          field: e.path.join('.'),
          message: e.message,
        }))
        return res.status(400).json({
          success: false,
          message: 'Validación fallida',
          errors,
        })
      }
      next(error)
    }
  }
}