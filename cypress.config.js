const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  projectId: 'vjqije',
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        downloadFile,
      });
      // implement node event listeners here
    },
  },
});
