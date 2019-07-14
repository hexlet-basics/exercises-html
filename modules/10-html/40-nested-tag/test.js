const { test } = require('tests');

test(({ query, querySelectorAll, expect }) => {
  query(document, 'ul', HTMLUListElement);
  const elements = querySelectorAll(document, 'ul > li', HTMLLIElement);
  expect(elements).to.have.length(3);
});
