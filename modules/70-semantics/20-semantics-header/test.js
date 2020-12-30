const { test } = require('tests');

test(({ query, querySelectorAll, expect }) => {

  const header = query(document, 'header');
  expect(header).to.be.visible;

  const img = query(header, 'img');
  expect(img).to.be.visible;

  const ul = query(header, 'ul');
  expect(ul).to.be.visible;

  const li = querySelectorAll(ul, 'li');
  expect(li).to.be.length(2);

  const link = querySelectorAll(ul, 'a');
  expect(link).to.be.length(2);
});
