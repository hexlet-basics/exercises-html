import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("semantic elements", () => {
  expect(query(document, "header")).toBeVisible();
  expect(query(document, "footer")).toBeVisible();
});
