const { test } = require('tests');

test(({ query, querySelectorAll, expect }) => {
  query(document, 'p', HTMLParagraphElement);
  const elements = querySelectorAll(document, 'p', HTMLParagraphElement);
  expect(elements).to.have.length(2);
  expect(elements[0]).to.contain.text('studied the IT education market');
  expect(elements[1]).to.contain.text('surveyed 3,500 IT professionals');
});
