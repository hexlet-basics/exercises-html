const { test } = require('tests');

test(({ query, expect }) => {
  const form = query(document, 'form');
  const textarea = form.querySelector('textarea');

  expect(form).to.have.attr('action', '/people');
  expect(textarea).to.have.attr('rows', '4');
  expect(textarea).to.have.attr('cols', '30');

});
