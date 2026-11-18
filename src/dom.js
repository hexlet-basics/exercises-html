import { readLessonHtml } from "./lesson.js";

export const html = readLessonHtml();

export const query = (root, selector) => {
  const element = root.querySelector(selector);
  if (element === null) {
    throw new Error(`Element "${selector}" not found`);
  }
  return element;
};

export const queryAll = (root, selector) => root.querySelectorAll(selector);
