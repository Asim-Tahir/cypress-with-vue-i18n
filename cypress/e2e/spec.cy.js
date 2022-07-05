/// <reference types="cypress" />
describe("spec", () => {
  it("should convert i18n keys", () => {
    expect(cy.$i18n.t("hello")).to.equal("Hello Vue 3 + Vite");
    expect(cy.$i18n.t("countIs", { n: 0 })).to.equal("count is 0");

    cy.$i18n.toggleLocale();

    expect(cy.$i18n.t("hello")).to.equal("Merhaba Vue 3 + Vite");
    expect(cy.$i18n.t("countIs", { n: 0 })).to.equal("sayı 0'dır");
  });
});
