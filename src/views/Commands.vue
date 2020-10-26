<template>
  <main>
    <div class="page-wrapper">
      <div class="page-selector">
        <div class="page-title">
          <h1>COMMANDS</h1>
          <p>A list of bot commands</p>
        </div>
        <aside class="menu">
          <ul class="menu-list">
            <router-link to="/commands/user">User</router-link>
            <router-link to="/commands/moderator">Moderator</router-link>
            <router-link to="/commands/management">Management</router-link>
            <router-link to="/commands/developer">Developer</router-link>
          </ul>
        </aside>
      </div>
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  name: "Commands"
};
</script>

<style scoped>
.page-content >>> .cmd-table-header {
  display: flex;
  padding: 1rem;
  background: var(--main-bg-dark);
  border-radius: 5px 5px 0 0;
}

.page-content >>> .cmd-header {
  font-weight: 700;
  font-size: 1.1rem;
}

.page-content >>> .cmd-container {
  display: flex;
  flex-flow: column;
  padding: 0 1rem 1rem 1rem;
}

.page-content >>> .cmd-header-line {
  width: 100%;
  display: flex;
  padding: 0.5rem;
}
.page-content >>> .cmd-line {
  width: 100%;
  display: flex;
  padding: 0.5rem;
}

.page-content >>> .cmd-line:not(:last-child) {
  border-bottom: 1px solid var(--subitem-bg-dark);
}

.page-content >>> .cmd-cmd {
  flex: 1;
}

.page-content >>> .cmd-desc {
  flex: 3;
  padding: 0 0.5rem 0 0.5rem;
}

.page-content >>> .cmd-usage {
  flex: 1;
}

@media only screen and (max-width: 500px) {
  .page-content >>> .cmd-container {
    padding: 1rem;
  }
  .page-content >>> .cmd-table-header {
    display: none;
  }
  .page-content >>> .cmd-line {
    flex-flow: column;
  }
  .page-content >>> .cmd-cmd {
    font-weight: 700;
    font-size: 1.1rem;
  }
  .page-content >>> .cmd-desc {
    padding: 0.5rem 0;
  }
}
</style>
