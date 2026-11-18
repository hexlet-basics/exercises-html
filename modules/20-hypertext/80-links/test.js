import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("links", () => {
  const element = query(document, "a");
  expect(element).toHaveAttribute("href", "https://code-basics.com/");
});
