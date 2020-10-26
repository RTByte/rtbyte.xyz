<template>
  <div class="page-content">
    <div class="content-wrapper">
      <div class="content-container">
        <h2 class="question">How do I use the management commands?</h2>
        <p class="content-text">
          All of the commands from the management category are used in much the
          same way. They all follow a similar structure of
          <code class="code-inline"
            >command (sub-command) &lt;setting&gt; [value]</code
          >. Please refer to the
          <router-link to="/commands">Commands</router-link> page for specific
          sub-command options for each command.
        </p>
      </div>
      <div class="content-container">
        <h2 class="question">
          How do I know what settings to use for each management command?
        </h2>
        <p class="content-text">
          Simply running a command without specifying a subcommand will default
          to the <span class="highlighted">show</span> option, which will show
          you what the current configured settings are.
        </p>
        <img
          src="@/assets/usage/management_example.png"
          alt="Screenshot showing the usage of the twitch notifications management command."
        />
        <p class="content-text">
          As shown in the screenshot above, each setting will have a
          <code class="code-inline">(setting)</code> denotation, informing you
          of what to write when using the command. This is the case of all
          management commands.
        </p>
      </div>
      <div class="content-container">
        <h2 class="question">
          What event and moderation logs are enabled by default?
        </h2>
        <p class="content-text">
          All moderation logs are enabled by default. The event logs that are
          enabled by default are as follows:
        </p>
        <ul>
          <li class="content-text">Server settings change</li>
          <li class="content-text">Member joins</li>
          <li class="content-text">Member leaves</li>
          <li class="content-text">Message is deleted</li>
          <li class="content-text">Message is edited</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfigFAQ"
};
</script>
