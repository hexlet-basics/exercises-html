import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("img", () => {
  const element = query(document, "img");
  expect(element).toHaveAttribute("src", "https://www.w3.org/2008/site/images/logo-w3c-screen-lg.png");
  expect(element).toHaveAttribute("alt", "W3C");
});
