import { expect, test } from "vitest";
import { query, queryAll } from "hexlet-basics/dom";

test("button", () => {
  const form = query(document, "form");
  expect(form).toHaveAttribute("action", "/people");

  const select = query(form, "select");
  expect(select).toBeVisible();
  expect(select).toHaveAttribute("multiple");

  const inputs = queryAll(form, "input");
  expect(inputs).toHaveLength(2);
  inputs.forEach((input) => {
    expect(input).toHaveAttribute("type", "text");
  });

  expect(query(form, "button")).toBeVisible();
});
