const { test } = require('tests');

test(({ query, expect }) => {
  const head = document.documentElement;

  const metaCharset = query(head, 'meta[charset]');
  const title = query(head, 'title');
  const description = query(head, 'meta[name="description"]');
  const viewport = query(head, 'meta[name="viewport"]');

  expect(metaCharset).to.have.attr('charset', 'utf-8');
  expect(title).to.be.visible;
  expect(description).to.have.attr('content');
  expect(viewport).to.have.attr('content', 'width=device-width');

});
