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
            <a
              @click="userSelector()"
              v-bind:class="{ 'is-active': userShow }"
              href="#/user"
              >User</a
            >
            <a
              @click="modSelector()"
              v-bind:class="{ 'is-active': modShow }"
              href="#/moderator"
              >Moderator</a
            >
            <a
              @click="mgmtSelector()"
              v-bind:class="{ 'is-active': mgmtShow }"
              href="#/management"
              >Management</a
            >
            <a
              @click="devSelector()"
              v-bind:class="{ 'is-active': devShow }"
              href="#/developer"
              >Developer</a
            >
          </ul>
        </aside>
      </div>
      <UserCommands v-if="userShow"></UserCommands>
      <ModCommands v-if="modShow"></ModCommands>
      <MgmtCommands v-if="mgmtShow"></MgmtCommands>
      <DevCommands v-if="devShow"></DevCommands>
    </div>
  </main>
</template>

<script>
import UserCommands from "@/components/commands/UserCommands.vue";
import ModCommands from "@/components/commands/ModCommands.vue";
import MgmtCommands from "@/components/commands/MgmtCommands.vue";
import DevCommands from "@/components/commands/DevCommands.vue";

export default {
  name: "Commands",
  components: {
    UserCommands,
    ModCommands,
    MgmtCommands,
    DevCommands
  },
  data: function() {
    return {
      userShow: true,
      modShow: false,
      mgmtShow: false,
      devShow: false
    };
  },
  methods: {
    userSelector() {
      this.$data.userShow = true;
      this.$data.modShow = false;
      this.$data.mgmtShow = false;
      this.$data.devShow = false;
    },
    modSelector() {
      this.$data.userShow = false;
      this.$data.modShow = true;
      this.$data.mgmtShow = false;
      this.$data.devShow = false;
    },
    mgmtSelector() {
      this.$data.userShow = false;
      this.$data.modShow = false;
      this.$data.mgmtShow = true;
      this.$data.devShow = false;
    },
    devSelector() {
      this.$data.userShow = false;
      this.$data.modShow = false;
      this.$data.mgmtShow = false;
      this.$data.devShow = true;
    }
  }
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
