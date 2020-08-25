<template>
  <main>
    <div class="page-wrapper">
      <div class="page-selector">
        <div class="page-title">
          <h1>F.A.Q.</h1>
          <p>A list of frequently asked questions</p>
        </div>
        <aside class="menu">
          <ul class="menu-list">
            <a
              @click="generalSelector()"
              v-bind:class="{ 'is-active': generalShow }"
              href="#/general"
              >General</a
            >
            <a
              @click="configSelector()"
              v-bind:class="{ 'is-active': configShow }"
              href="#/configuration"
              >Configuration</a
            >
          </ul>
        </aside>
      </div>
      <GeneralFAQ v-if="generalShow"></GeneralFAQ>
      <ConfigFAQ v-if="configShow"></ConfigFAQ>
    </div>
  </main>
</template>

<script>
import GeneralFAQ from "@/components/faq/GeneralFAQ.vue";
import ConfigFAQ from "@/components/faq/ConfigFAQ.vue";

export default {
  name: "FAQ",
  components: {
    GeneralFAQ,
    ConfigFAQ
  },
  data: function() {
    return {
      generalShow: true,
      configShow: false
    };
  },
  methods: {
    generalSelector() {
      this.$data.generalShow = true;
      this.$data.configShow = false;
    },
    configSelector() {
      this.$data.generalShow = false;
      this.$data.configShow = true;
    }
  }
};
</script>

<style scoped>
.page-content >>> .highlighted {
  color: var(--complementary);
}
</style>
