#!/bin/bash
# deploy-vps.sh - Script para deploy automático en VPS

set -e

# Configuración
VPS_USER="nikorua"
VPS_HOST="tu-vps-ip"
VPS_PATH="/home/nikorua/app"
BRANCH="main"

echo "🚀 Iniciando deploy de nikorua.com..."

# 1. Build local
echo "📦 Construyendo aplicación..."
cd client && npm run build && cd ..
cd server && npm run build && cd ..

# 2. Sincronizar archivos al VPS (excluyendo node_modules y .git)
echo "📤 Subiendo archivos al VPS..."
rsync -avz --delete \
  --exclude 'node_modules' \
  --exclude '.git' \
  --exclude '*.log' \
  --exclude '.env' \
  --exclude 'dist' \
  --exclude 'coverage' \
  ./ $VPS_USER@$VPS_HOST:$VPS_PATH/

# 3. Ejecutar comandos remotos
echo "🔧 Configurando VPS..."
ssh $VPS_USER@$VPS_HOST << 'EOF'
  cd /home/nikorua/app
  
  # Instalar dependencias si es necesario
  if [ ! -d "client/node_modules" ]; then
    echo "📥 Instalando dependencias frontend..."
    cd client && npm ci --production && cd ..
  fi
  
  if [ ! -d "server/node_modules" ]; then
    echo "📥 Instalando dependencias backend..."
    cd server && npm ci --production && cd ..
  fi
  
  # Reiniciar servicios con Docker Compose
  echo "🔄 Reiniciando servicios..."
  docker compose -f docker-compose.prod.yml up -d --build
  
  # Limpiar imágenes antiguas
  docker image prune -f
  
  echo "✅ Deploy completado!"
EOF

echo "✨ ¡Deploy exitoso! Visita https://nikorua.com"