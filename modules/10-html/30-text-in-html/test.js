const { test } = require('tests');

test(({ query, querySelectorAll, expect }) => {
  query(document, 'p', HTMLParagraphElement);
  const elements = querySelectorAll(document, 'p', HTMLParagraphElement);
  expect(elements).to.have.length(2)
  // expect(elements).to.contain.text(['surveyed', 'studied'])
});
