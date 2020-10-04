FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN export NG_CLI_ANALYTICS=off off
RUN npm i -g @angular/cli npm yarn
RUN yarn install

COPY . .

EXPOSE 4200

CMD ["ng","serve"]