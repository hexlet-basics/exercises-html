import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("textarea", () => {
  const form = query(document, "form");
  expect(form).toHaveAttribute("action", "/people");

  const textarea = query(form, "textarea");
  expect(textarea).toHaveAttribute("rows", "4");
  expect(textarea).toHaveAttribute("cols", "30");
});
