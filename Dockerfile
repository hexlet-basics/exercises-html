FROM node:13.7

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

RUN apt-get update && apt-get install -yqq git curl python3-pip libyaml-dev zip unzip

RUN pip3 install yamllint
RUN apt-get install -yqq jq
RUN pip3 install yq
RUN npm install -g ajv-cli
RUN npm install -g htmlhint

WORKDIR /exercises-html

# COPY package.json package.json
# COPY package-lock.json package-lock.json
# RUN npm ci
# RUN npm i -g jest jest-dom
RUN npm i -g jsdom jsdom-global
RUN npm i -g chai chai-dom
RUN npm i -g @testing-library/dom
RUN npm i -g @github/query-selector
# "chai": "^4.2.0",
# "clean-stack": "^2.0.0",
# "expect": "^23.6.0",
# "lodash": "^4.17.11"

ENV NODE_PATH /usr/local/lib/node_modules:/exercises-html/src

COPY . .
