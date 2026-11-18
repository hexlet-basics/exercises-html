FROM hexletbasics/base-image

WORKDIR /exercises-html

ENV PATH=/exercises-html/bin:/exercises-html/node_modules/.bin:$PATH

COPY package.json package-lock.json .

RUN npm ci

COPY . .
