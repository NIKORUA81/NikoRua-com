# 🚀 nikorua.com - Portafolio Profesional

> Portafolio innovador con efectos 3D y animaciones al hacer scroll  
> **Nicolás Rua Villalobos** • Ingeniero de Sistemas • Especialista en Bases de Datos & Edumática

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-61dafb.svg)](https://react.dev)
[![Three.js](https://img.shields.io/badge/Three.js-r3f-000000.svg)](https://threejs.org)

## ✨ Características

- 🎨 Diseño moderno con Tailwind CSS
- 🎲 Efectos 3D con Three.js + @react-three/fiber
- 📜 Animaciones sincronizadas con scroll usando @14islands/r3f-scroll-rig
- 📱 Totalmente responsive y optimizado para móviles
- 🤖 Backend Node.js para formulario de contacto
- 🐳 Docker ready para deploy en VPS

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | React 18 + Vite + TypeScript |
| 3D Engine | Three.js + @react-three/fiber + drei |
| Scroll Animations | @14islands/r3f-scroll-rig + Lenis |
| Estilos | Tailwind CSS + CSS Modules |
| Estado | Zustand |
| Backend | Node.js + Express + TypeScript |
| Email | Nodemailer + Resend/SendGrid |
| Deploy | Docker + Nginx (VPS) / Vercel (opcional) |

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- npm o pnpm
- Docker (para deploy en VPS)

### Desarrollo Local

```bash
# Clonar repositorio
git clone https://github.com/nikorua/nikorua-portfolio.git
cd nikorua-portfolio

# Instalar dependencias frontend
cd client && npm install && cd ..

# Instalar dependencias backend
cd server && npm install && cd ..

# Configurar variables de entorno
cp client/.env.example client/.env
cp server/.env.example server/.env

# Ejecutar en modo desarrollo
# Terminal 1: Frontend
cd client && npm run dev

# Terminal 2: Backend  
cd server && npm run dev