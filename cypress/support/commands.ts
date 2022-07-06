// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

declare global {
  namespace Cypress {
    interface Chainable {
      $t: typeof i18n.global.t;
      $toggleLocale: () => "tr" | "en";
      $getLocale: () => "tr" | "en";
    }
  }
}

import i18n from "@cypress-test-tiny/i18n";

Object.defineProperties(cy, {
  $t: {
    value: i18n.global.t,
    writable: false,
    configurable: false,
  },
  $toggleLocale: {
    value: () => {
      switch (i18n.global.locale.value) {
        case "tr":
          i18n.global.locale.value = "en";
          return i18n.global.locale.value;

        case "en":
          i18n.global.locale.value = "tr";
          return i18n.global.locale.value;

        default:
          i18n.global.locale.value = "tr";
          return i18n.global.locale.value;
      }
    },
    writable: false,
    configurable: false,
  },
  $getLocale: {
    value: () => i18n.global.locale.value,
    writable: false,
    configurable: false,
  },
});
