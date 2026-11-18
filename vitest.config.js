import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["modules/**/test.js"],
    environment: "jsdom",
    setupFiles: ["./src/setup.js"],
  },
});
