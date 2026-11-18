import { expect, test } from "vitest";
import { query, queryAll } from "hexlet-basics/dom";

test("section", () => {
  const header = query(document, "header");
  expect(header).toBeVisible();
  expect(query(header, "img")).toBeVisible();

  const nav = query(header, "nav");
  expect(nav).toBeVisible();

  const ul = query(nav, "ul");
  expect(ul).toBeVisible();
  expect(queryAll(ul, "li")).toHaveLength(2);

  const main = query(document, "main");
  expect(main).toBeVisible();

  const sections = queryAll(main, "section");
  expect(sections).toHaveLength(2);
  sections.forEach((section) => {
    expect(query(section, "h2")).toBeVisible();
  });
});
