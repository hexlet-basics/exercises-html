const { test } = require('tests');

test(({ query, expect }) => {

  const code = query(document, 'code');
  expect(code).to.be.visible;

});
