#!/bin/sh
set -e

# Iniciar backend en segundo plano
echo "🚀 Iniciando backend..."
cd /app/backend
node server.js &
BACKEND_PID=$!

# Esperar a que el backend esté listo
echo "⏳ Esperando backend..."
sleep 3

# Iniciar Nginx en primer plano
echo "🌐 Iniciando Nginx..."
exec nginx -g 'daemon off;'
