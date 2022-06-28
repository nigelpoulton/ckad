FROM node:lts-alpine

# set the current working directory inside the container
WORKDIR /app

# copy package.json and package-lock json into /app
COPY package*.json ./

# install app dependencies
RUN npm install

# node_modules folder will be ignored due to .dockerignore file
COPY . .

# expose port 8080
EXPOSE 8080

# set a default value for the APP_URL environment variable
ENV APP_URL=http://localhost

# when starting the container, by default run
# the node development server
CMD npm run serve
