FROM node:alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force
RUN npm install
RUN npm install -g typescript
RUN npm install --save sequelize

COPY . ./

RUN npm run build

ENV NODE_ENV=local

ENV DEBUG=authService:*

CMD ["npm","run","dev"]