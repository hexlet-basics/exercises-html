import { expect, test } from "vitest";
import { query, queryAll } from "hexlet-basics/dom";

test("table", () => {
  query(document, "table > thead");
  expect(queryAll(document, "table > thead > tr > th")).toHaveLength(2);
  expect(queryAll(document, "table > tbody > tr")).toHaveLength(2);
  expect(queryAll(document, "table > tbody > tr > td")).toHaveLength(4);
});
