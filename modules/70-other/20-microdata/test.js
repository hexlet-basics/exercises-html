import { expect, test } from "vitest";
import { html, query } from "hexlet-basics/dom";

test("microdata", () => {
  expect(query(document, '[itemprop="name"]')).toBeVisible();
  expect(query(document, '[itemprop="email"]')).toBeVisible();
  expect(html).toContain("itemscope");
  expect(html).toContain('itemtype="http://schema.org/Organization"');
});
