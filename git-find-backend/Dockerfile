# Use a Node.js base image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "start"]
