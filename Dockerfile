FROM node:12.4

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

RUN apt-get update && apt-get install -yqq git python3-pip

RUN pip3 install yamllint

WORKDIR /exercises-html

# COPY package.json package.json
# COPY package-lock.json package-lock.json
# RUN npm ci
RUN npm i -g jest jest-dom
RUN npm i -g  @testing-library/dom
# "chai": "^4.2.0",
# "clean-stack": "^2.0.0",
# "expect": "^23.6.0",
# "lodash": "^4.17.11"

ENV NODE_PATH /usr/local/lib/node_modules

COPY . /exercises-html
