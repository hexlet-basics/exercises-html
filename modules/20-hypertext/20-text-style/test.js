import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("text style", () => {
  const b = query(document, "p > b");
  expect(b.textContent.trim()).toBe("courses");

  const em = query(document, "p > em");
  expect(em.textContent.trim()).toBe("programming");
});
