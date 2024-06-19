require('jsdom-global')()

const fs = require('fs');
// const chai = require('chai');
const chaiDom = require('chai-dom');
const { query, querySelectorAll } = require('@github/query-selector');

// chai.use(chaiDom);

module.exports = {
  test: async (callback) => {
    const html = fs.readFileSync(`${process.cwd()}/index.html`).toString();
    document.write(html);
    // callback({ query, html, querySelectorAll, expect: chai.expect })
    const { expect, use } = await import('chai'); 
    use(chaiDom);

    callback({ query, html, querySelectorAll, expect });
  }
}
