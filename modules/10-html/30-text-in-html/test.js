import { expect, test } from "vitest";
import { queryAll } from "hexlet-basics/dom";

test("text in html", () => {
  const elements = queryAll(document, "p");
  expect(elements).toHaveLength(2);
  expect(elements[0]).toHaveTextContent("studied the IT education market");
  expect(elements[1]).toHaveTextContent("surveyed 3,500 IT professionals");
});
