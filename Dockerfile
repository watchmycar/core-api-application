FROM node:12.16.0-slim
RUN apt-get update && apt-get install -y \
    python \
    build-essential \
    curl \
 && rm -rf /var/lib/apt/lists/*

#RUN mkdir /app && chown -R node:node /app 
WORKDIR /app
USER node
COPY --chown=node:node package.json package-lock*.json ./

COPY . /app/

RUN npm install
