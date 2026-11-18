import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("viewport", () => {
  const metaViewport = query(document, 'meta[name="viewport"]');
  expect(metaViewport).toHaveAttribute("content", "width=1024, user-scalable=no");
});
