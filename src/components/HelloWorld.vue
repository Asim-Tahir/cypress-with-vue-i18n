<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    {{ t("ideSetup") }}:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      {{ t("viteDocs") }}
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">{{ t("vue3Docs") }}</a>
  </p>

  <button type="button" @click="count++">
    {{ t("countIs", { n: count }) }}
  </button>
  <p v-html="t('editComponent', { code: 'components/HelloWorld.vue' })"></p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
