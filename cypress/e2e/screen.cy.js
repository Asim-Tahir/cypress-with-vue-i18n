/// <reference types="cypress" />
describe("i18n", () => {
  it("should i18n works correctly", () => {
    cy.visit("/");

    cy.contains("h1", cy.$t("hello")).should("exist");
    cy.contains("p", cy.$t("ideSetup")).should("exist");
    cy.contains("a", cy.$t("viteDocs")).should("exist");
    cy.contains("a", cy.$t("vue3Docs")).should("exist");
    cy.contains("button", cy.$t("countIs", { n: 0 })).should("exist");
    cy.contains(
      "button",
      cy.$t("changeLocale", { locale: cy.$getLocale() })
    ).should("exist");

    cy.contains(
      "button",
      cy.$t("changeLocale", { locale: cy.$getLocale() })
    ).click();
    cy.$toggleLocale();

    cy.contains("h1", cy.$t("hello")).should("exist");
    cy.contains("p", cy.$t("ideSetup")).should("exist");
    cy.contains("a", cy.$t("viteDocs")).should("exist");
    cy.contains("a", cy.$t("vue3Docs")).should("exist");
    cy.contains("button", cy.$t("countIs", { n: 0 })).should("exist");
    cy.contains(
      "button",
      cy.$t("changeLocale", { locale: cy.$getLocale() })
    ).should("exist");
  });
});
