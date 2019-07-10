const { test } = require('tests');

test(({ query, expect }) => {

  const pre = query(document, 'pre');
  expect(pre).to.be.visible;

});
