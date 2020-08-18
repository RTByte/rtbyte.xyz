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
        <p class="cmd-cmd">customcmds</p>
        <p class="cmd-desc">
          A series of commands to let you manage your custom commands.
        </p>
        <p class="cmd-usage">
          <code class="code-inline"
            >-customcmds &lt;enable/disable/create/delete/update/show&gt; (cmd
            name) (response)</code
          >
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">filters</p>
        <p class="cmd-desc">
          A series of commands to let you modify the filter settings for your
          server.
        </p>
        <p class="cmd-usage">
          <code class="code-inline"
            >-filters &lt;enable/disable/set/remove/reset/show&gt; (setting)
            (subsetting) (value)</code
          >
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">greetings</p>
        <p class="cmd-desc">
          A series of commands to let you modify the greeting settings for your
          server. When setting the welcome message, you can type
          <code class="code-inline">%user%</code> to get the user's @mention.
        </p>
        <p class="cmd-usage">
          <code class="code-inline"
            >-greetings &lt;enable/disable/set/reset/show&gt; (setting)
            (value)</code
          >
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">logs</p>
        <p class="cmd-desc">
          A series of commands to let you modify the log settings for your
          server.
        </p>
        <p class="cmd-usage">
          <code class="code-inline"
            >-logs &lt;enable/disable/set/reset/show&gt; (setting) (value)</code
          >
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">moderation</p>
        <p class="cmd-desc">
          A series of commands to let you modify the log settings for your
          server.
        </p>
        <p class="cmd-usage">
          <code class="code-inline"
            >-moderation &lt;enable/disable/set/reset/show&gt; (value)</code
          >
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">pinboard</p>
        <p class="cmd-desc">
          A series of commands to let you modify the pinboard settings for your
          server.
        </p>
        <p class="cmd-usage">
          <code class="code-inline"
            >-pinboard &lt;enable/disable/set/remove/reset/show&gt; (setting)
            (value)</code
          >
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">settings</p>
        <p class="cmd-desc">
          A series of commands to let you modify the general and role settings
          for your server.
        </p>
        <p class="cmd-usage">
          <code class="code-inline"
            >-settings &lt;enable/disable/set/remove/reset/show&gt; (setting)
            (subsetting) (value)</code
          >
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">starboard</p>
        <p class="cmd-desc">
          A series of commands to let you modify the starboard settings for your
          server.
        </p>
        <p class="cmd-usage">
          <code class="code-inline"
            >-starboard &lt;enable/disable/set/remove/reset/show&gt; (setting)
            (value)</code
          >
        </p>
      </div>
    </div>
  </div>
</template>
