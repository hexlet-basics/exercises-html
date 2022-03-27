const { test } = require('tests');

test(({ query, expect }) => {

  const article = query(document, 'article');
  expect(article).to.be.visible;

  const header = query(article, 'header');
  expect(header).to.be.visible;

  const footer = query(article, 'footer');
  expect(footer).to.be.visible;
});
