const { test } = require('tests');

test(({ query, expect }) => {
  const h1 = query(document, 'h1');
  expect(h1).to.be.visible;

  const h2 = query(document, 'h2');
  expect(h2).to.be.visible;
});
