const fs = require('fs');
const q = require('@testing-library/dom');

const html = fs.readFileSync(`${__dirname}/index.html`).toString();
const container = document.createElement('div');
container.innerHTML = html;


test('special-characters 1/4', () => {
  const char = html.trim();
  const isCorrectChar = char === '&frac14;';

  expect(isCorrectChar).toBe(true);
});
