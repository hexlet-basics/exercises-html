const { test } = require('tests');

test(({ query, expect }) => {
  const form = query(document, 'form');
  const select = form.querySelector('select');
  const inputs = form.querySelectorAll('input');

  expect(form).to.have.attr('action', '/people');

  expect(select).to.be.visible;
  expect(select).to.have.attr('multiple');

  expect(inputs).to.have.length(2);
  inputs.forEach((input) => {
    expect(input).to.have.attr('type', 'text');
  });
});
