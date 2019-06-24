const fs = require('fs');
const q = require('@testing-library/dom');

const html = fs.readFileSync(`${__dirname}/index.html`).toString();
const container = document.createElement('div');
container.innerHTML = html;


test('numeric lists', () => {
  const li = container.querySelectorAll('ol > li');

  expect(li).toHaveLength(2);
});

test('nested lists', () => {
  const ul = container.querySelector('ol > li > ul');
  const li = ul.querySelectorAll('li');

  expect(li).toHaveLength(2);
});
