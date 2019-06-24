const { test } = require('tests');

test(({ expect }) => {
  const text = document.body.innerHTML.trim();
  expect(text).to.equal('¼');
});
