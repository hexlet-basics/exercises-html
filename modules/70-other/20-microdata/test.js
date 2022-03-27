const { test } = require('tests');

test(({ query, expect, html }) => {

  const name = query(document, '[itemprop="name"]');
  expect(name).to.be.visible;

  const email = query(document, '[itemprop="email"]');
  expect(email).to.be.visible;

  expect(html).to.contain('itemscope');
  expect(html).to.contain('itemtype="http://schema.org/Organization"');
});
