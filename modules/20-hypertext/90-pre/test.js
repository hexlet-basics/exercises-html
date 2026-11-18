import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("pre", () => {
  expect(query(document, "pre")).toBeVisible();
});
