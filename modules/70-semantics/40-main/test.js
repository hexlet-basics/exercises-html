const { test } = require('tests');

test(({ query, querySelectorAll, expect }) => {

  const header = query(document, 'header');
  expect(header).to.be.visible;

  const img = query(header, 'img');
  expect(img).to.be.visible;

  const nav = query(header, 'nav');
  expect(nav).to.be.visible;

  const ul = query(nav, 'ul');
  expect(ul).to.be.visible;

  const li = querySelectorAll(ul, 'li');
  expect(li).to.be.length(2);

  const main = query(document, 'main');
  expect(main).to.be.visible;
});
