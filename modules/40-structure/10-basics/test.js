const { test } = require('tests');

test(({ expect, html }) => {
  expect(html).to.contain('lang');
});
