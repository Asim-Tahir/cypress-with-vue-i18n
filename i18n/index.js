import { createI18n } from "vue-i18n";
import messages from "./locales";

export default createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});

// Minimal i18n configuration
// export default {
//   /**
//    * @type {"en" | "tr"}
//    */
//   locale: "en",
//   fallbackLocale: "en",
//   messages: {
//     en,
//     tr,
//   },
//   /**
//    *
//    * @param {"en" | "tr"} locale
//    */
//   changeLocale(locale) {
//     this.locale = locale;
//   },
//   /**
//    *
//    * @param {string} key
//    * @returns {string}
//    */
//   t(key) {
//     console.debug(
//       `%cDEBUG%c [${this.locale}] $t('${key}'): ${
//         this.messages[this.locale][key]
//       }`,
//       "padding: 0 4px; background-color: #bbb; border-radius: 4px; color: #111",
//       ""
//     );

//     if (this.locale in this.messages) {
//       return this.messages[this.locale][key];
//     } else if (this.fallbackLocale in this.messages) {
//       return this.messages[this.fallbackLocale][key];
//     } else {
//       return key;
//     }
//   },
// };
