FROM node as builder
WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/
RUN npm install

COPY ./src /usr/src/app/src
RUN npm run dist

FROM nginx-alpine
COPY --from=builder /usr/src/app/public /usr/share/nginx/html
EXPOSE 80
