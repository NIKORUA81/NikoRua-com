import { Resend } from 'resend'
import { ContactForm } from '../types.js'

// Inicializar Resend (o Nodemailer si prefieres)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export const handleContactSubmission = async (data: ContactForm) => {
  const { name, email, subject, message } = data

  // Validación adicional a nivel de negocio
  if (!name || !email || !message) {
    throw new Error('Campos requeridos incompletos')
  }

  // Opción 1: Usar Resend (recomendado para producción)
  if (resend && process.env.EMAIL_FROM && process.env.EMAIL_TO) {
    try {
      const { data: emailData, error } = await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `📬 Nuevo mensaje de ${name}: ${subject}`,
        html: `
          <div style="font-family: system-ui; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6366f1;">Nuevo mensaje desde nikorua.com</h2>
            <p><strong>De:</strong> ${name} &lt;${email}&gt;</p>
            <p><strong>Asunto:</strong> ${subject}</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />
            <p style="white-space: pre-wrap;">${message}</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />
            <p style="color: #64748b; font-size: 14px;">
              Enviado desde <a href="${process.env.VITE_SITE_URL}">nikorua.com</a>
            </p>
          </div>
        `,
        reply_to: email,
      })

      if (error) {
        console.error('Error enviando email:', error)
        throw new Error('No se pudo enviar el mensaje')
      }

      return { emailId: emailData?.id, sent: true }
    } catch (error) {
      console.error('Error con Resend:', error)
      throw error
    }
  }

  // Opción 2: Fallback a console.log para desarrollo
  console.log('=== NUEVO MENSAJE DE CONTACTO ===')
  console.log(`De: ${name} <${email}>`)
  console.log(`Asunto: ${subject}`)
  console.log(`Mensaje: ${message}`)
  console.log('=================================')

  return { sent: true, devMode: true }
}