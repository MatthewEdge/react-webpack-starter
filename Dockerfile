FROM node:alpine

# To speed up npm install. See https://github.com/npm/npm/issues/8836
RUN npm config set registry http://registry.npmjs.org/ && npm install

RUN mkdir -p /opt/app/rws
WORKDIR /opt/app/rws

COPY package.json /opt/app/rws
RUN npm install

COPY . /opt/app/rws
EXPOSE 3000
CMD ["npm", "start"]
