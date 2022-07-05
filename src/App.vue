<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useI18n } from "vue-i18n";
import HelloWorld from "./components/HelloWorld.vue";

const { t, locale } = useI18n();

function toggleLocale() {
  switch (locale.value) {
    case "en":
      locale.value = "tr";
      break;

    case "tr":
      locale.value = "en";
      break;

    default:
      locale.value = "tr";
      break;
  }
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="t('hello')" />
  <button @click="toggleLocale()">Change Locale from {{ locale }}</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
