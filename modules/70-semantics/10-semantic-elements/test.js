const { test } = require('tests');

test(({ query, expect }) => {

  const article = query(document, 'header');
  expect(article).to.be.visible;

  const header = query(document, 'footer');
  expect(header).to.be.visible;
});
