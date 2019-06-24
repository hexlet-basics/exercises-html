const fs = require('fs');
const q = require('@testing-library/dom');

const html = fs.readFileSync(`${__dirname}/index.html`).toString();
const container = document.createElement('div');
container.innerHTML = html;

test('quantity paragraphs', () => {
  const p = container.querySelectorAll('p');
  expect(p).toHaveLength(2);
});

test('content in paragraphs', () => {
  expect(q.getByText(container, /Карьерный портал «Мой круг» изучил/i, { selector: 'p' })).toBeVisible();
  expect(q.getByText(container, /«Мой круг» опросил 3500 IT-специалистов и составил/i, { selector: 'p' })).toBeVisible();
});
