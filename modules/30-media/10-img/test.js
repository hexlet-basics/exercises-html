const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, 'img');
  expect(element).to.have.attr('src', 'https://www.w3.org/2008/site/images/logo-w3c-screen-lg.png');
  expect(element).to.have.attr('alt', 'W3C');
});
