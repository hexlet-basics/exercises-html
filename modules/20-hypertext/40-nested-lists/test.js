const { test } = require('tests');

test(({ query, querySelectorAll, expect }) => {
  const ol = query(document, 'ol', HTMLOListElement);
  const olLis = querySelectorAll(document, 'ol > li', HTMLLIElement);
  expect(olLis).to.have.length(2);

  const ul = query(document, 'ol > li > ul', HTMLUListElement);
  const ulLis = querySelectorAll(ul, 'li', HTMLLIElement);
  expect(ulLis).to.have.length(2);
});
