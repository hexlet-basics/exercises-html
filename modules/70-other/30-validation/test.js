import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("validation", () => {
  expect(query(document, "p")).toBeVisible();
  expect(query(document, "img")).toHaveAttribute("alt");
});
