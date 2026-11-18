import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("form basics", () => {
  const form = query(document, "form");
  expect(form).toHaveAttribute("action", "/people");
});
