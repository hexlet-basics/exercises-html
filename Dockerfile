FROM hexletbasics/base-image:latest

WORKDIR /exercises-html

RUN npm i -g htmlhint
RUN npm i -g jsdom jsdom-global
RUN npm i -g chai chai-dom
RUN npm i -g @testing-library/dom
RUN npm i -g @github/query-selector

COPY --from=hexletbasics/base-image:latest /tmp/basics/common/* ./
COPY . .

ENV NODE_PATH /usr/local/lib/node_modules:/exercises-html/src
