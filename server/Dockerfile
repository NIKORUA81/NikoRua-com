# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar package files
COPY package*.json ./
COPY tsconfig.json ./

# Instalar dependencias de producción
RUN npm ci --only=production

# Copiar código fuente
COPY src/ ./src/
COPY shared/ ./shared/

# Compilar TypeScript
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Crear usuario no-root por seguridad
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nikorua

# Copiar archivos necesarios
COPY --from=builder --chown=nikorua:nodejs /app/dist ./dist
COPY --from=builder --chown=nikorua:nodejs /app/package*.json ./
COPY --from=builder --chown=nikorua:nodejs /app/node_modules ./node_modules

# Exponer puerto
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001/api/health', r => process.exit(r.statusCode === 200 ? 0 : 1))"

# Ejecutar como usuario no-root
USER nikorua

# Comando de inicio
CMD ["node", "dist/server.js"]