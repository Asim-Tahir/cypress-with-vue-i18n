/// <reference types="cypress" />
describe("i18n", () => {
  it("should i18n works correctly", () => {
    cy.visit("/");

    cy.contains("h1", cy.$i18n.t("hello")).should("exist");
    cy.contains("p", cy.$i18n.t("ideSetup")).should("exist");
    cy.contains("a", cy.$i18n.t("viteDocs")).should("exist");
    cy.contains("a", cy.$i18n.t("vue3Docs")).should("exist");
    cy.contains("button", cy.$i18n.t("countIs", { n: 0 })).should("exist");
    cy.contains(
      "button",
      cy.$i18n.t("changeLocale", { locale: cy.$i18n.locale.value })
    ).should("exist");

    cy.contains(
      "button",
      cy.$i18n.t("changeLocale", { locale: cy.$i18n.locale.value })
    ).click();
    cy.$i18n.toggleLocale();

    cy.contains("h1", cy.$i18n.t("hello")).should("exist");
    cy.contains("p", cy.$i18n.t("ideSetup")).should("exist");
    cy.contains("a", cy.$i18n.t("viteDocs")).should("exist");
    cy.contains("a", cy.$i18n.t("vue3Docs")).should("exist");
    cy.contains("button", cy.$i18n.t("countIs", { n: 0 })).should("exist");
    cy.contains(
      "button",
      cy.$i18n.t("changeLocale", { locale: cy.$i18n.locale.value })
    ).should("exist");
  });
});
