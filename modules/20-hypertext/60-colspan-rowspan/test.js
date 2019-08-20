const { test } = require('tests');

test(({ querySelectorAll, query, expect }) => {
  const trs = querySelectorAll(document, 'table > tbody > tr', HTMLElement);
  expect(trs).to.have.length(1);

  const trHead = querySelectorAll(document, 'table > thead > tr');
  expect(trHead).to.have.length(1);

  const tds = querySelectorAll(document, 'table > tbody > tr > td', HTMLElement);
  expect(tds).to.have.length(2);

  const tdWithColspan = query(document, 'table > tbody > tr > td:nth-child(1)', HTMLElement);
  expect(tdWithColspan).to.have.attribute('colspan', '2');
});
