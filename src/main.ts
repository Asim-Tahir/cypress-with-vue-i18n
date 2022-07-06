import { createApp } from "vue";
import i18n from "@cypress-test-tiny/i18n";
import App from "./App.vue";

createApp(App).use(i18n).mount("#app");
