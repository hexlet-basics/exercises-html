const fs = require('fs');
const q = require('@testing-library/dom');

const html = fs.readFileSync(`${__dirname}/index.html`).toString();
const container = document.createElement('div');
container.innerHTML = html;


test('head table', () => {
  const thead = container.querySelector('table > thead');
  const th = thead.querySelectorAll('th');

  expect(th).toHaveLength(3);
});

test('body table', () => {
  const tbody = container.querySelector('table > tbody');
  const td = tbody.querySelectorAll('td');

  expect(td).toHaveLength(3);
});
