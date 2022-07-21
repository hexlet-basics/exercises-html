const { test } = require('tests');

test(({ query, expect }) => {
  const form = query(document, 'form');
  const select = form.querySelector('select');
  const inputs = form.querySelectorAll('input');
  const button = query(form, 'button');

  expect(form).to.have.attr('action', '/people');

  expect(select).to.be.visible;
  expect(select).to.have.attr('multiple');

  expect(options).to.have.length(3);

  expect(button).to.be.visible;
});
