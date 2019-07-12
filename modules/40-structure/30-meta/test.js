const { test } = require('tests');

test(({ query, expect }) => {
  const title = query(document, 'title');
  expect(title).to.be.visible;

  const description = query(document, '[name="description"]');
  expect(description).to.be.visible;

  const ogImage = query(document, '[name="og:image"]');
  expect(ogImage).to.be.visible;
});
