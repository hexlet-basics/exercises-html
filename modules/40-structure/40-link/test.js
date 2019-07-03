const { test } = require('tests');

test(({ query, expect }) => {
  const linkIcon = query(document, 'link[rel="icon"]');

  expect(linkIcon).to.have.attr('href', 'https://www.w3schools.com/favicon.ico');
  expect(linkIcon).to.have.attr('sizes', '64x64');
  expect(linkIcon).to.have.attr('media', 'handheld');
});
