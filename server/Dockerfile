FROM node:20-alpine

# Install Docker CLI
RUN apk add --no-cache docker-cli

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]