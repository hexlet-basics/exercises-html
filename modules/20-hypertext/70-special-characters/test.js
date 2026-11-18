import { expect, test } from "vitest";

test("special characters", () => {
  expect(document.body.innerHTML.trim()).toBe("¼");
});
