import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("attributes", () => {
  const element = query(document, "p");
  expect(element).toHaveAttribute("title");
  expect(element).toHaveAttribute("class", "hexlet");
});
