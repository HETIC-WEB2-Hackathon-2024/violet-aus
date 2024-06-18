FROM node:21-alpine

WORKDIR /app
COPY package.json /app
COPY package-lock.json /app

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "run", "serve"]
