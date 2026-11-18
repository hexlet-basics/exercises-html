import { expect, test } from "vitest";
import { query, queryAll } from "hexlet-basics/dom";

test("radio", () => {
  const form = query(document, "form");
  expect(form).toHaveAttribute("action", "/people");

  const labels = queryAll(form, "label");
  expect(labels).toHaveLength(2);
  labels.forEach((label) => {
    const input = query(label, "input");
    expect(input).toHaveAttribute("type", "radio");
    expect(input).toHaveAttribute("name", "delivery");
    expect(input).toHaveAttribute("value");
  });
});
