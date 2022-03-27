const { test } = require('tests');

test(({ query, expect }) => {

  const p = query(document, 'p');
  expect(p).to.be.visible;

  const img = query(document, 'img');
  expect(img).to.have.attr('alt');
});
