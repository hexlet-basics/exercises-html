import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("link", () => {
  const linkIcon = query(document, 'link[rel="icon"]');
  expect(linkIcon).toHaveAttribute("href", "https://www.w3schools.com/favicon.ico");
  expect(linkIcon).toHaveAttribute("sizes", "64x64");
});
