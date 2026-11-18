import { expect, test } from "vitest";
import { query, queryAll } from "hexlet-basics/dom";

test("colspan and rowspan", () => {
  expect(queryAll(document, "table > tbody > tr")).toHaveLength(1);
  expect(queryAll(document, "table > thead > tr")).toHaveLength(1);
  expect(queryAll(document, "table > tbody > tr > td")).toHaveLength(2);

  const tdWithColspan = query(document, "table > tbody > tr > td:nth-child(1)");
  expect(tdWithColspan).toHaveAttribute("colspan", "2");
});
