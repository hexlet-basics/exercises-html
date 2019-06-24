const { test } = require('tests');

test(({ querySelectorAll, query, expect }) => {
  query(document, 'table > thead', HTMLTableHeaderCellElement);
  const ths = querySelectorAll(document, 'table > thead > tr > th', HTMLElement);
  expect(ths).to.have.length(3);

  const tds = querySelectorAll(document, 'table > tbody > tr > td', HTMLElement);
  expect(tds).to.have.length(3);
});
