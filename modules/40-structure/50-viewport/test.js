const { test } = require('tests');

test(({ query, expect }) => {
  const metaViewport = query(document, 'meta[name="viewport"]');

  expect(metaViewport).to.have.attr('content', 'width=1024, user-scalable=no');
});
