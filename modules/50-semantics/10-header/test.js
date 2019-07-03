const { test } = require('tests');

test(({ query, expect }) => {
  const header = query(document, 'header');

  expect(header).to.be.visible;
});
