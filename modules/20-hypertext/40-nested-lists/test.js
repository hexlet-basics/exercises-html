import { expect, test } from "vitest";
import { query, queryAll } from "hexlet-basics/dom";

test("nested lists", () => {
  query(document, "ol");
  const olItems = queryAll(document, "ol > li");
  expect(olItems).toHaveLength(2);

  const ul = query(document, "ol > li > ul");
  const ulItems = queryAll(ul, "li");
  expect(ulItems).toHaveLength(2);
});
