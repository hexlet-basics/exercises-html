import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("video", () => {
  const element = query(document, "video");
  expect(element).toHaveAttribute("controls", "");
  expect(element).toHaveAttribute("width", "320");
  expect(element).toHaveAttribute("height", "240");
  expect(element).toHaveAttribute("src", "https://www.w3schools.com/html/movie.mp4");
});
