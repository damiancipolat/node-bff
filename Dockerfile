FROM node:10.16.0-alpine
LABEL Maintainer="Damian Cipolat"
ENV APP_DIR microservice_template
ENV TZ=America/Buenos_Aires
WORKDIR /usr/app/${APP_DIR}
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run test
RUN npm prune --production
EXPOSE 8080
CMD [ "npm" , "start" ]