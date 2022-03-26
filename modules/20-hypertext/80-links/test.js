const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, 'a');
  expect(element).to.have.attr('href', 'https://code-basics.com/');
});
