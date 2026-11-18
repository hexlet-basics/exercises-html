import { expect, test } from "vitest";
import { query, queryAll } from "hexlet-basics/dom";

test("lists", () => {
  query(document, "ol");
  const elements = queryAll(document, "ol > li");
  expect(elements).toHaveLength(5);
});
