const { test } = require('tests');

test(({ query, expect }) => {
  const head = document.documentElement;

  const metaCharset = query(head, 'meta[charset="Windows-1251"]');
  const description = query(head, 'meta[name="description"]');
  const keywords = query(head, 'meta[name="keywords"]');

  expect(metaCharset).to.be.visible;
  expect(description).to.have.attr('content');
  expect(keywords).to.have.attr('content');
});
