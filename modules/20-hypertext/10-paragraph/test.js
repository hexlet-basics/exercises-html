import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("paragraph", () => {
  const element = query(document, "p");
  expect(element).toHaveTextContent("Hello, World");
});
