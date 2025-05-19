FROM node:22.15.0

WORKDIR /Todo-add

COPY package*.json ./

RUN npm install

COPY . .

ENV DB_HOST=juan-todo.cbuucgiqsve2.us-west-2.rds.amazonaws.com
ENV DB_USER=postgres
ENV DB_PASSWORD=Password.123
ENV DB_DATABASE=todo
ENV DB_PoORT=5432

EXPOSE 3000

CMD ["node","src/index.js"]