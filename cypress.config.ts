const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  pageLoadTimeout: 30000,
  video: false,
  env: {
    standardUsername: 'standard_user',
    lockedUsername: 'locked_out_user',
    password: '',
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: 'cypress/e2e/**/*.ts',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
