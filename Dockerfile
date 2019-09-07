FROM node:10
WORKDIR /src/index
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 4000
CMD ["npm", "start"]