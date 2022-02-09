FROM node:16-alpine as develop-stage

ENV NODE_PATH "/node_modules"

EXPOSE 8080

WORKDIR /app

RUN set -x \
    && yarn global add @vue/cli \
    && chown node:node /app

USER node

ADD --chown=node:node ./package.json ./yarn.lock ./
RUN yarn install

ADD --chown=node:node ./ ./

CMD ["yarn", "serve"]


FROM develop-stage as build-stage

RUN yarn build


FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
