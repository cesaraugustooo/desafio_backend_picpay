FROM node:20-alpine as node_build

WORKDIR /app

COPY ./package.json ./
RUN npm install

COPY . .

CMD ["npm","run","dev"]

EXPOSE 3000
