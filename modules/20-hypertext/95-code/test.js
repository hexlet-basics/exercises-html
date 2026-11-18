import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("code", () => {
  expect(query(document, "code")).toBeVisible();
});
