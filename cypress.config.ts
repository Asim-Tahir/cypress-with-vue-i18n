import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://thissiteisunexist.com:4173",
    specPattern: "cypress/e2e/**/*.{test,cy}.{js,ts}",
  },
});
