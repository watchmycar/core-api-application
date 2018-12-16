FROM mhart/alpine-node:10.4.1

WORKDIR /app

COPY . /app/

RUN npm install