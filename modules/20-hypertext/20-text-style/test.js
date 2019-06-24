const fs = require('fs');
const q = require('@testing-library/dom');

const html = fs.readFileSync(`${__dirname}/index.html`).toString();
const container = document.createElement('div');
container.innerHTML = html;

test('paragraph', () => {
  const p = container.querySelector('p');
  expect(p).toBeVisible();
});

test('bold', () => {
  expect(q.getByText(container, 'курсы', { selector: 'b' })).toBeVisible();
});

test('italics', () => {
  expect(q.getByText(container, 'по программированию', { selector: 'em' })).toBeVisible();
});
