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
            <router-link to="/faq/general">General</router-link>
            <router-link to="/faq/configuration">Configuration</router-link>
          </ul>
        </aside>
      </div>
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  name: "FAQ"
};
</script>

<style scoped>
.page-content >>> .highlighted {
  color: var(--complementary);
}
</style>
