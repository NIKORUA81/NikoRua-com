import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
import { contactRoutes } from './routes/contact.routes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(helmet({
  contentSecurityPolicy: false,
}))

app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Demasiadas peticiones, intenta más tarde' },
  standardHeaders: true,
  legacyHeaders: false,
})
app.use('/api/', limiter)

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'nikorua-backend',
    version: '1.0.0'
  })
})

app.use('/api/contact', contactRoutes)

app.use('*', (_req, res) => {
  res.status(404).json({ error: 'Endpoint no encontrado' })
})

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Error:', err)
  const isProd = process.env.NODE_ENV === 'production'
  res.status(500).json({
    error: isProd ? 'Error interno del servidor' : err.message,
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en http://localhost:${PORT}`)
  console.log(`📧 Endpoint de contacto: POST /api/contact`)
})

export default app
