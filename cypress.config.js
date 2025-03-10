const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vjqije',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
