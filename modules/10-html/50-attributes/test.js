const { test } = require('tests');

test(({ query, expect }) => {
  const elements = query(document, 'p', HTMLElement);
  expect(elements).to.have.attr('title').match(/,*/);
  expect(elements).to.have.attr('align', 'right');
});
