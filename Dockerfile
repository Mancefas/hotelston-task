FROM node:18.17.0

WORKDIR /src/

COPY . .
RUN npm install
RUN npm run build

CMD ["npm", "start"]