require('jsdom-global')()

const fs = require('fs');
const chai = require('chai');
const chaiDom = require('chai-dom');
const { query, querySelectorAll } = require('@github/query-selector');

chai.use(chaiDom);

module.exports = {
  test: (callback) => {
    const html = fs.readFileSync(`${process.cwd()}/index.html`).toString();
    document.body.innerHTML = html;
    callback({ query, querySelectorAll, expect: chai.expect })
  }
}
