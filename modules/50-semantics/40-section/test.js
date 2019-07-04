const { test } = require('tests');

test(({ query, expect }) => {
  const sectionMain = query(document, 'section');
  expect(sectionMain).to.be.visible;

  const sectionsChildren = sectionMain.querySelectorAll('section');
  expect(sectionsChildren).to.have.lengthOf(3);
});
