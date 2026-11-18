import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("article semantics", () => {
  const article = query(document, "article");
  expect(article).toBeVisible();
  expect(query(article, "header")).toBeVisible();
  expect(query(article, "footer")).toBeVisible();
});
