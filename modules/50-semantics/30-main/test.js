const { test } = require('tests');

test(({ query, expect }) => {
  const main = query(document, 'main');
  expect(main).to.be.visible;

  const header = query(main, 'header');
  expect(header).to.be.visible;
});
