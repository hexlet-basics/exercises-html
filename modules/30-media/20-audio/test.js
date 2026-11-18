import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("audio", () => {
  const element = query(document, "audio");
  query(element, "source:nth-child(1)");
  query(element, "source:nth-child(2)");
});
