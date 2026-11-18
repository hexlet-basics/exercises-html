import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("tags", () => {
  const element = query(document, "p");
  expect(element).toHaveTextContent("lazy");
});
