const fs = require('fs');
const q = require('@testing-library/dom');

const html = fs.readFileSync(`${__dirname}/index.html`).toString();
const container = document.createElement('div');
container.innerHTML = html;


test('numeric lists', () => {
  const ol = container.querySelector('ol');
  expect(ol).toBeVisible();
});

test('count li', () => {
  const li = container.querySelectorAll('li');
  expect(li).toHaveLength(5);
});
