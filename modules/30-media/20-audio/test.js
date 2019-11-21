const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, 'audio');
  expect(query(element, 'source:nth-child(1)')).to.exist;
  expect(query(element, 'source:nth-child(2)')).to.exist;
});
