import { expect, test } from "vitest";
import { query, queryAll } from "hexlet-basics/dom";

test("input", () => {
  const form = query(document, "form");
  expect(form).toHaveAttribute("action", "/people");
  expect(queryAll(form, "input")).toHaveLength(2);
});
