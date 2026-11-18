import { expect, test } from "vitest";
import { query, queryAll } from "hexlet-basics/dom";

test("select", () => {
  const form = query(document, "form");
  expect(form).toHaveAttribute("action", "/people");

  const select = query(form, "select");
  expect(select).toBeVisible();
  expect(queryAll(select, "option")).toHaveLength(3);
});
