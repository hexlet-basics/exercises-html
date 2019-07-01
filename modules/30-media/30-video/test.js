const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, 'video');
  expect(element).to.have.attr('controls', '');
  expect(element).to.have.attr('width', '320');
  expect(element).to.have.attr('height', '240');
  expect(element).to.have.attr('src', 'https://www.w3schools.com/html/movie.mp4');
});
