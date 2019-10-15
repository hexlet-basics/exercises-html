const { test } = require('tests');

test(({ query, expect }) => {
  const links = document.querySelectorAll('span');

  expect(links).to.be.length(2);
});
