import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("hypertext header", () => {
  expect(query(document, "h1")).toBeVisible();
  expect(query(document, "h2")).toBeVisible();
});
