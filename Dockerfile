FROM node:16.14.2

ARG PORT=19006
ENV PORT $PORT

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest

RUN mkdir /opt/lert && chown node:node /opt/lert
WORKDIR /opt/lert
ENV PATH /opt/lert/.bin:$PATH

COPY --chown=node:node ./package.json ./
COPY --chown=node:node ./package-lock.json ./
USER node
RUN npm install
RUN 

WORKDIR /opt/lert/app

ENTRYPOINT ["npm", "serve", "web-build"]
CMD ["web"]