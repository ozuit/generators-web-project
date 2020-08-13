FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install prerequisites
RUN npm install gulp -g
RUN npm install bower -g

# Bundle app source
COPY bower.json ./
COPY gulpfile.babel.js ./
COPY package*.json ./

# Install app dependencies
RUN bower install --allow-root
RUN npm install

# EXPOSE 9000

# Run on local
CMD ["gulp", "serve"]