FROM hexletbasics/base-image

WORKDIR /exercises-html

ENV PATH=$PATH:/exercises-html/node_modules/.bin

COPY package.json package-lock.json .

RUN npm ci

COPY . .

ENV NODE_PATH=/usr/lib/node_modules:/exercises-html/src
