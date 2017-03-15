FROM node:7-alpine

MAINTAINER Matt Edge <mattedgeis@gmail.com>

# To speed up npm install. See https://github.com/npm/npm/issues/8836
RUN npm config set registry http://registry.npmjs.org/ && npm install

# Create application directory
RUN mkdir -p /opt/app/rws
WORKDIR /opt/app/rws

# Copy package.json in separate layer to cache contents of package.json for docker build
COPY package.json /opt/app/rws

# Copy application sources and install NodeJS dependencies
COPY . /opt/app/rws
RUN npm install

# Finally, start the app
CMD ["npm", "start"]

EXPOSE 3000
EXPOSE 8080