const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, 'h1', HTMLHeadingElement);
  expect(element).to.have.text('Hello, World!');
});
