<template>
  <div class="page-content">
    <div class="cmd-table-header">
      <div class="cmd-header-line">
        <p class="cmd-cmd cmd-header">Command</p>
        <p class="cmd-desc cmd-header">Description</p>
        <p class="cmd-usage cmd-header">Usage</p>
      </div>
    </div>
    <div class="cmd-container">
      <div class="cmd-line">
        <p class="cmd-cmd">stats</p>
        <p class="cmd-desc">Provides bot owners with statistics.</p>
        <p class="cmd-usage"><code class="code-inline">-stats</code></p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">blacklist</p>
        <p class="cmd-desc">
          Blacklists or un-blacklists users and servers from the bot.
        </p>
        <p class="cmd-usage">
          <code class="code-inline">-blacklist &lt;user/server&gt;</code>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCommands"
};
</script>
