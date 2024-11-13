FROM node:18

WORKDIR /app/backend

COPY ./backend/index.js .
COPY ./backend/package.json .
COPY ./backend/src ./src

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]