import { expect, test } from "vitest";
import { html } from "hexlet-basics/dom";

test("document structure", () => {
  expect(html).toContain("<!DOCTYPE html>");
  expect(html).toContain("lang");
  expect(html).toContain("<head>");
  expect(html).toContain("<body>");
});
