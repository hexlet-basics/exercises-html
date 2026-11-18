import { expect, test } from "vitest";
import { query, queryAll } from "hexlet-basics/dom";

test("aside", () => {
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

  const section = query(main, "section");
  expect(section).toBeVisible();
  expect(query(section, "h2")).toBeVisible();

  const articles = queryAll(section, "article");
  expect(articles).toHaveLength(2);
  articles.forEach((article) => {
    expect(query(article, "h3")).toBeVisible();
  });

  expect(query(document, "aside")).toBeVisible();
});
