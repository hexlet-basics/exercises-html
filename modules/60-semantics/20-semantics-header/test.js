import { expect, test } from "vitest";
import { query, queryAll } from "hexlet-basics/dom";

test("semantic header", () => {
  const header = query(document, "header");
  expect(header).toBeVisible();
  expect(query(header, "img")).toBeVisible();

  const ul = query(header, "ul");
  expect(ul).toBeVisible();
  expect(queryAll(ul, "li")).toHaveLength(2);
  expect(queryAll(ul, "a")).toHaveLength(2);
});
