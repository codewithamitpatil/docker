FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000
EXPOSE 6000
EXPOSE 7000
CMD [ "node", "index.js" ]
