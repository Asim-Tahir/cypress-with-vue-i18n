/// <reference types="cypress" />
describe("page", () => {
  it("should convert i18n keys", () => {
    cy.visit("https://example.cypress.io");

    cy.$t("hello").should("be.eq", "Hello");
    cy.$t("world").should("be.eq", "World");

    cy.$changeLocale("tr");

    cy.$t("hello").should("be.eq", "Merhaba");
    cy.$t("world").should("be.eq", "Dünya");
  });
});
