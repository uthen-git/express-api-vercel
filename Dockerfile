# Stage 1
FROM node:18.14.0-alpine3.17 as node
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]