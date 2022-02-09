FROM node:16-alpine as develop-stage

ENV NODE_PATH "/node_modules"

EXPOSE 3000

WORKDIR /app

RUN set -x && chown node:node /app

USER node

ADD --chown=node:node ./package.json ./yarn.lock ./
RUN yarn install

ADD --chown=node:node ./ ./

CMD ["yarn", "dev"]


FROM develop-stage as build-stage

RUN yarn build

CMD ["yarn", "start"]
