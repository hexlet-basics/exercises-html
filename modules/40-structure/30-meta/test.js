import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("meta", () => {
  expect(query(document, "title")).toBeInTheDocument();
  expect(query(document, '[name="description"]')).toBeInTheDocument();
  expect(query(document, '[charset="UTF-8"]')).toBeInTheDocument();
});
