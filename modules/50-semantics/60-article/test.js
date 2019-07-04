const { test } = require('tests');

test(({ query, expect }) => {
  const section = query(document, 'section');
  expect(section).to.be.visible;

  const articles = section.querySelectorAll('article');
  expect(articles).to.have.lengthOf(3);
});
