import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true, // so you don’t need to import describe/it/expect
    setupFiles: "./src/test-setup.ts",
  },
});
