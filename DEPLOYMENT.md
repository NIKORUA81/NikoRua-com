# Deployment Guide — nikorua.com

## Prerequisites

- Docker & Docker Compose
- A VPS (Ubuntu 22.04 recommended)
- Domain pointed to VPS IP
- Resend API key for email

## Local development

```bash
# Frontend
cd client && npm install && npm run dev   # http://localhost:5173

# Backend (separate terminal)
cd server && npm install && npm run dev   # http://localhost:3001
```

## Environment variables

Copy and fill in the example files:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

## Production deploy (VPS)

```bash
# 1. Clone the repo on the server
git clone https://github.com/nikorua/nikorua.com.git
cd nikorua.com

# 2. Set env vars
cp server/.env.example server/.env
nano server/.env   # fill in real values

# 3. Build and start with Docker Compose
docker compose up -d --build

# 4. Verify
curl http://localhost/api/health
```

## Deploy script (from local)

```bash
chmod +x scripts/deploy-vps.sh
./scripts/deploy-vps.sh
```

## SSL (Let's Encrypt)

```bash
apt install certbot
certbot certonly --standalone -d nikorua.com -d www.nikorua.com

# Certificates will be at:
# /etc/letsencrypt/live/nikorua.com/fullchain.pem
# /etc/letsencrypt/live/nikorua.com/privkey.pem

# Then uncomment the HTTPS block in docker/nginx.conf
```

## Health check

- Frontend: `https://nikorua.com`
- Backend: `https://nikorua.com/api/health`
- Contact form: `POST https://nikorua.com/api/contact`
