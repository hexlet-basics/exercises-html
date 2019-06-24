const { test } = require('tests');

test(({ query, querySelectorAll, expect }) => {
  query(document, 'ol', HTMLOListElement);
  const elements = querySelectorAll(document, 'ol > li', HTMLLIElement);
  expect(elements).to.have.length(5);
});
