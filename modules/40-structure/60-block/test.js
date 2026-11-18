import { expect, test } from "vitest";
import { queryAll } from "hexlet-basics/dom";

test("block and inline elements", () => {
  expect(queryAll(document, "span")).toHaveLength(2);
});
