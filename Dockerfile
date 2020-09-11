FROM node:10.15.0-alpine
EXPOSE 3000
RUN mkdir /app
WORKDIR /app
ENV NODE_ENV development
ENV PATH $PATH:/app/node_modules/.bin
COPY package.json /app/package.json
RUN npm install
RUN npm install -g react-scripts@3.3.0
CMD ["npm", "start"]
