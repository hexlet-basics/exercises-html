const { test } = require('tests');

test(({ query, expect }) => {
  const form = query(document, 'form');
  const labels = form.querySelectorAll('label');

  expect(form).to.have.attr('action', '/people');
  expect(labels).to.have.length(2);

  labels.forEach((label) => {
    const input = label.querySelector('input');
    expect(input).to.have.attr('type', 'radio');
    expect(input).to.have.attr('name', 'gender');
  });
});
