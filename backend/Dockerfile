FROM node:latest

WORKDIR /app-backend

COPY package*.json .
RUN npm i

COPY . .

EXPOSE 3001:3001
ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]