import { expect, test } from "vitest";
import { query, queryAll } from "hexlet-basics/dom";

test("main", () => {
  const header = query(document, "header");
  expect(header).toBeVisible();
  expect(query(header, "img")).toBeVisible();

  const nav = query(header, "nav");
  expect(nav).toBeVisible();

  const ul = query(nav, "ul");
  expect(ul).toBeVisible();
  expect(queryAll(ul, "li")).toHaveLength(2);

  expect(query(document, "main")).toBeVisible();
});
