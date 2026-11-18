import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("html markup", () => {
  const element = query(document, "h1");
  expect(element.textContent.trim()).toBe("Hello, World!");
});
