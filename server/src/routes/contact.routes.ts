import { Router, Request, Response } from 'express'
import { handleContactSubmission } from '../controllers/contact.controller'
import { validateContact, contactSchema } from '../middleware/validation.middleware'

export const contactRoutes = Router()

contactRoutes.post('/', validateContact(contactSchema), async (req: Request, res: Response) => {
  try {
    const result = await handleContactSubmission(req.body)
    res.status(200).json({
      success: true,
      message: 'Mensaje enviado correctamente',
      data: result
    })
  } catch (error: any) {
    console.error('Error en contacto:', error)
    res.status(500).json({
      success: false,
      message: error.message || 'Error al procesar el mensaje'
    })
  }
})

contactRoutes.get('/stats', (_req: Request, res: Response) => {
  res.json({
    totalMessages: 0,
    lastReceived: null,
  })
})
