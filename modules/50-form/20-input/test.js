const { test } = require('tests');

test(({ query, expect }) => {
  const form = query(document, 'form');
  const inputs = form.querySelectorAll('input');

  expect(form).to.have.attr('action', '/people');
  expect(inputs).to.have.length(2);
});
