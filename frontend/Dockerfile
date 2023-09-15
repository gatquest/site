FROM node:latest


COPY package.json package-lock.json ./
WORKDIR /usr/src/app
RUN npm install
COPY . .

RUN npm run build

