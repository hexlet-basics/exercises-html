const { test } = require('tests');

test(({ query, expect }) => {
  const form = query(document, 'form');
  const select = form.querySelector('select');
  const options = select.querySelectorAll('option');

  expect(form).to.have.attr('action', '/people');
  expect(select).to.be.visible;
  expect(options).to.have.length(3);

});
