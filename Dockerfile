FROM node:16.14.2

ARG PORT=19006
ENV PORT $PORT

RUN npm i --unsafe-perm -g npm@latest

WORKDIR /app

COPY package.json .
RUN npm install serve --force
RUN npm install --force

EXPOSE 19006

COPY ./web-build .
