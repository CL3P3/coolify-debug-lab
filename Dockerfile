FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ERROR INTENCIONAL: Coolify se configurará inicialmente para el puerto 3000,
# pero el servidor de preview escucha en el puerto 4173.
EXPOSE 3000

CMD ["npm", "run", "preview"]
