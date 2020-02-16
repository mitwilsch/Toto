FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

#RUN npm install
# If you are building your code for production
RUN npm ci --only=production

COPY . .

EXPOSE 8080

CMD ["npm", "run", "prodServer"]
