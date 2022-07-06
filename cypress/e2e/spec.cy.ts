describe("spec", () => {
  it("should convert i18n keys", () => {
    expect(cy.$t("hello")).to.equal("Hello Vue 3 + Vite");
    expect(cy.$t("countIs", { n: 0 })).to.equal("count is 0");

    cy.$toggleLocale();

    expect(cy.$t("hello")).to.equal("Merhaba Vue 3 + Vite");
    expect(cy.$t("countIs", { n: 0 })).to.equal("sayı 0'dır");
  });
});
