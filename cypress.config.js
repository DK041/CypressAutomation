const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "vzd8ca",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integeration/examples/*.js",
    defaultCommandTimeout: 7000,
    scripts: {
      test: "node_modules\\.bin\\cypress run",
      chrometest: "npm run test -- --browser chrome",
    },
  },
});
