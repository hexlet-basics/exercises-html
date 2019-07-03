const { test } = require('tests');

test(({ expect, html }) => {
  expect(html).to.contain('<!DOCTYPE html>');
  expect(html).to.contain('lang');
  expect(html).to.contain('<head>');
  expect(html).to.contain('<body>');
});
