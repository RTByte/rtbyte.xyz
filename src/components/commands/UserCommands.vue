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
        <p class="cmd-cmd">8ball</p>
        <p class="cmd-desc">
          Magic 8-ball, does exactly what the toy does, memes included.
        </p>
        <p class="cmd-usage">
          <code class="code-inline">-8ball &lt;question&gt;</code>
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">call</p>
        <p class="cmd-desc">
          Generates a video chat link for use in servers.
        </p>
        <p class="cmd-usage"><code class="code-inline">-call</code></p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">choice</p>
        <p class="cmd-desc">
          Makes a decision based off of the choices given.
        </p>
        <p class="cmd-usage">
          <code class="code-inline"
            >-choose &lt;option&gt;, &lt;option&gt;...</code
          >
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">coinflip</p>
        <p class="cmd-desc">
          Flips a coin. 🙂 for heads, 🙃 for tails.
        </p>
        <p class="cmd-usage">
          <code class="code-inline">-coinflip</code>
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">discordstatus</p>
        <p class="cmd-desc">
          Checks Discord's status and lets you know if there are any ongoing
          incidents.
        </p>
        <p class="cmd-usage">
          <code class="code-inline">-discordstatus</code>
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">enlarge</p>
        <p class="cmd-desc">
          Enlarges a specified emoji. Standard emojis unfortunately do not work.
        </p>
        <p class="cmd-usage">
          <code class="code-inline">-enlarge &lt;emoji&gt;</code>
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">help</p>
        <p class="cmd-desc">
          Displays a list of commands, or extended help for a specified command.
          Links to this page.
        </p>
        <p class="cmd-usage">
          <code class="code-inline">-help [command]</code>
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">info</p>
        <p class="cmd-desc">
          Provides bot information, such as a list of authors and libraries.
        </p>
        <p class="cmd-usage"><code class="code-inline">-info</code></p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">invite</p>
        <p class="cmd-desc">
          Displays the link to invite RTByte to your server.
        </p>
        <p class="cmd-usage">
          <code class="code-inline">-invite</code>
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">joindate</p>
        <p class="cmd-desc">
          Displays your account creation date along with the date you joined the
          current server you're on. Other users can be specified to fetch their
          info.
        </p>
        <p class="cmd-usage">
          <code class="code-inline">-joindate [user]</code>
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">lyrics</p>
        <p class="cmd-desc">
          Fetches lyrics and information from Genius for you.
        </p>
        <p class="cmd-usage">
          <code class="code-inline">-lyrics &lt;song&gt;</code>
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">pin</p>
        <p class="cmd-desc">
          Fetch a random message from the pinboard. Specify a user at the end to
          limit the selection to messages sent by the specified user.
        </p>
        <p class="cmd-usage">
          <code class="code-inline">-pin [user]</code>
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">ping</p>
        <p class="cmd-desc">Runs a connection test to Discord.</p>
        <p class="cmd-usage"><code class="code-inline">-ping</code></p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">prefix</p>
        <p class="cmd-desc">
          Returns the prefix(es) for the current server.
        </p>
        <p class="cmd-usage">
          <code class="code-inline">-prefix</code>
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">quote</p>
        <p class="cmd-desc">
          Quotes a message by ID. Mention the channel if the message you want to
          quote is not the same as the one you're sending the message in.
        </p>
        <p class="cmd-usage">
          <code class="code-inline">-quote &lt;message ID&gt; [channel]</code>
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">reminder</p>
        <p class="cmd-desc">
          Sets a reminder for you, append <i>-dm</i> to have the reminder sent
          to you via DM.
        </p>
        <p class="cmd-usage">
          <code class="code-inline"
            >-reminder &lt;when&gt; &lt;message&gt; [-dm]</code
          >
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">roles</p>
        <p class="cmd-desc">
          A series of commands to allow you to join roles by yourself.
        </p>
        <p class="cmd-usage">
          <code class="code-inline"
            >-roles &lt;list/join/leave/add/remove&gt; [user] [role]</code
          >
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">star</p>
        <p class="cmd-desc">
          Fetch a random message from the starboard. Append
          <i>top</i> to get the top starred message instead. Specify a user at
          the end to limit the selection to messages sent by the specified user.
        </p>
        <p class="cmd-usage">
          <code class="code-inline">-star [top] [user]</code>
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">weather</p>
        <p class="cmd-desc">
          Fetch the current weather for a specified location.
        </p>
        <p class="cmd-usage">
          <code class="code-inline">-weather &lt;location&gt;</code>
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">wiki</p>
        <p class="cmd-desc">Find a Wikipedia article by title.</p>
        <p class="cmd-usage">
          <code class="code-inline">-wiki &lt;article&gt;</code>
        </p>
      </div>
    </div>
  </div>
</template>
