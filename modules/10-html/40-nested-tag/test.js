import { expect, test } from "vitest";
import { query, queryAll } from "hexlet-basics/dom";

test("nested tag", () => {
  query(document, "ul");
  const elements = queryAll(document, "ul > li");
  expect(elements).toHaveLength(3);
});
