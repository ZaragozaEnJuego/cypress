const { defineConfig } = require("cypress");
// Proceso.env con valores del archivo env
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implementa los event listeners de node aquí
    },
  },
  env: {
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }
});