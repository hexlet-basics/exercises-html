const { test } = require('tests');

test(({ query, expect }) => {
  const main = query(document, 'main');
  expect(main).to.be.visible;

  const article = query(main, 'article');
  expect(article).to.be.visible;

  const header = query(article, 'header');
  expect(header).to.be.visible;

  const footer = query(article, 'footer');
  expect(footer).to.be.visible;
});
