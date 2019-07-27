const { test } = require('tests');

test(({ query, expect }) => {
  const form = query(document, 'form');

  expect(form).to.have.attr('action', '/people.php');
});
