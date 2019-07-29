const { test } = require('tests');

test(({ query, expect }) => {
  const links = document.querySelectorAll('a');

  expect(links).to.be.length(2);
});
