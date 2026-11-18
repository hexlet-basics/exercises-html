import fs from "node:fs";
import path from "node:path";
import { expect } from "vitest";

export const readLessonHtml = () => {
  const { testPath } = expect.getState();
  return fs.readFileSync(path.join(path.dirname(testPath), "index.html"), "utf8");
};
