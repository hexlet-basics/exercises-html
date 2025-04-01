FROM hexletbasics/base-image

WORKDIR /exercises-html

COPY package.json package-lock.json .

RUN npm ci

COPY . .

ENV NODE_PATH=/usr/lib/node_modules:/exercises-html/src
