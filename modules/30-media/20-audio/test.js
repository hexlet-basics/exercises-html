const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, 'audio');
  expect(query(element, 'source:nth-child(1)')).to.have.attr('src', 'https://www.w3schools.com/html/horse.ogg');
  expect(query(element, 'source:nth-child(2)')).to.have.attr('src', 'https://www.w3schools.com/html/horse.mp3');
});
