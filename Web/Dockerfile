################### Start of main image building
FROM node:12-alpine

# set working directory
WORKDIR /usr/src/web


# Copy all the required file for transpiling to js
COPY . .

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

EXPOSE 3000
# start app
CMD ["npm", "start"]