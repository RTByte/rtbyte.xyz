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
      <div class="page-content">
        <div v-if="userShow">
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
                Checks Discord's status and lets you know if there are any
                ongoing incidents.
              </p>
              <p class="cmd-usage">
                <code class="code-inline">-discordstatus</code>
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">enlarge</p>
              <p class="cmd-desc">
                Enlarges a specified emoji. Standard emojis unfortunately do not
                work.
              </p>
              <p class="cmd-usage">
                <code class="code-inline">-enlarge &lt;emoji&gt;</code>
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">help</p>
              <p class="cmd-desc">
                Displays a list of commands, or extended help for a specified
                command. Links to this page.
              </p>
              <p class="cmd-usage">
                <code class="code-inline">-help [command]</code>
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">info</p>
              <p class="cmd-desc">
                Provides bot information, such as a list of authors and
                libraries.
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
                Displays your account creation date along with the date you
                joined the current server you're on. Other users can be
                specified to fetch their info.
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
                Fetch a random message from the pinboard. Specify a user at the
                end to limit the selection to messages sent by the specified
                user.
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
                Quotes a message by ID. Mention the channel if the message you
                want to quote is not the same as the one you're sending the
                message in.
              </p>
              <p class="cmd-usage">
                <code class="code-inline"
                  >-quote &lt;message ID&gt; [channel]</code
                >
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">reminder</p>
              <p class="cmd-desc">
                Sets a reminder for you, append <i>-dm</i> to have the reminder
                sent to you via DM.
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
                <i>top</i> to get the top starred message instead. Specify a
                user at the end to limit the selection to messages sent by the
                specified user.
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
        <div v-if="modShow">
          <div class="cmd-table-header">
            <div class="cmd-header-line">
              <p class="cmd-cmd cmd-header">Command</p>
              <p class="cmd-desc cmd-header">Description</p>
              <p class="cmd-usage cmd-header">Usage</p>
            </div>
          </div>
          <div class="cmd-container">
            <div class="cmd-line">
              <p class="cmd-cmd">userinfo</p>
              <p class="cmd-desc">
                Get information on a specified user. If no user is specified, it
                returns your info.
              </p>
              <p class="cmd-usage">
                <code class="code-inline">-userinfo [user]</code>
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">channelinfo</p>
              <p class="cmd-desc">
                Get information on a specified channel. If no channel is
                specified, it returns your current channel.
              </p>
              <p class="cmd-usage">
                <code class="code-inline">-channelinfo [channel]</code>
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">roleinfo</p>
              <p class="cmd-desc">
                Get information on a specified role. If no role is specified, it
                returns your highest role.
              </p>
              <p class="cmd-usage">
                <code class="code-inline">-roleinfo [role]</code>
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">serverinfo</p>
              <p class="cmd-desc">Displays server information.</p>
              <p class="cmd-usage">
                <code class="code-inline">-serverinfo</code>
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">sendmsg</p>
              <p class="cmd-desc">
                Sends a message to the specified channel or user using RTByte.
              </p>
              <p class="cmd-usage">
                <code class="code-inline"
                  >-sendmsg &lt;channel or user&gt; &lt;message&gt;</code
                >
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">modhistory</p>
              <p class="cmd-desc">
                Lists moderation actions taken against a user in the past.
                Refers to a specific case if a case ID is provided.
              </p>
              <p class="cmd-usage">
                <code class="code-inline">-modhistory [user] [case ID]</code>
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">purge</p>
              <p class="cmd-desc">
                Removes X amount of messages, optionally sent by Y user. Append
                <i>-all</i>
                to ignore the role hierarchy.
              </p>
              <p class="cmd-usage">
                <code class="code-inline"
                  >-purge [user] &lt;amount&gt; [-all] [-s]</code
                >
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">warn</p>
              <p class="cmd-desc">
                Warns a specified user and logs the reason.
              </p>
              <p class="cmd-usage">
                <code class="code-inline"
                  >-warn &lt;user&gt; [reason] [-s]</code
                >
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">mute</p>
              <p class="cmd-desc">
                Mutes a specified user and logs the reason.
              </p>
              <p class="cmd-usage">
                <code class="code-inline"
                  >-mute &lt;user&gt; [when] [reason] [-s]</code
                >
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">unmute</p>
              <p class="cmd-desc">Unmutes a specified user.</p>
              <p class="cmd-usage">
                <code class="code-inline">-unmute &lt;user&gt;</code>
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">kick</p>
              <p class="cmd-desc">
                Kicks a specified user and logs the reason.
              </p>
              <p class="cmd-usage">
                <code class="code-inline">-lyrics &lt;song&gt;</code>
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">softban</p>
              <p class="cmd-desc">
                Softbans a specified user and logs the reason.
              </p>
              <p class="cmd-usage">
                <code class="code-inline"
                  >-softban &lt;user&gt; [reason] [-s]</code
                >
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">ban</p>
              <p class="cmd-desc">
                Bans a specified user and logs the reason.
              </p>
              <p class="cmd-usage">
                <code class="code-inline"
                  >-ban &lt;user&gt; [when] [reason] [-s]</code
                >
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">vckick</p>
              <p class="cmd-desc">
                Kicks a specified user from voice chat and logs the reason.
              </p>
              <p class="cmd-usage">
                <code class="code-inline"
                  >-vckick &lt;user&gt; [reason] [-s]</code
                >
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">vcban</p>
              <p class="cmd-desc">
                Bans a specified user from voice chat and logs the reason.
              </p>
              <p class="cmd-usage">
                <code class="code-inline"
                  >-vcban &lt;user&gt; [when] [reason] [-s]</code
                >
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">vcunban</p>
              <p class="cmd-desc">Unbans a specified user from voice chat.</p>
              <p class="cmd-usage">
                <code class="code-inline">-vcunban &lt;user&gt;</code>
              </p>
            </div>
          </div>
        </div>
        <div v-if="mgmtShow">
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
                  >-customcmds &lt;enable/disable/create/delete/update/show&gt;
                  (cmd name) (response)</code
                >
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">filters</p>
              <p class="cmd-desc">
                A series of commands to let you modify the filter settings for
                your server.
              </p>
              <p class="cmd-usage">
                <code class="code-inline"
                  >-filters &lt;enable/disable/set/remove/reset/show&gt;
                  (setting) (subsetting) (value)</code
                >
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">greetings</p>
              <p class="cmd-desc">
                A series of commands to let you modify the greeting settings for
                your server. When setting the welcome message, you can type
                <code class="code-inline">%user%</code> to get the user's
                @mention.
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
                  >-logs &lt;enable/disable/set/reset/show&gt; (setting)
                  (value)</code
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
                  >-moderation &lt;enable/disable/set/reset/show&gt;
                  (value)</code
                >
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">pinboard</p>
              <p class="cmd-desc">
                A series of commands to let you modify the pinboard settings for
                your server.
              </p>
              <p class="cmd-usage">
                <code class="code-inline"
                  >-pinboard &lt;enable/disable/set/remove/reset/show&gt;
                  (setting) (value)</code
                >
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">settings</p>
              <p class="cmd-desc">
                A series of commands to let you modify the general and role
                settings for your server.
              </p>
              <p class="cmd-usage">
                <code class="code-inline"
                  >-settings &lt;enable/disable/set/remove/reset/show&gt;
                  (setting) (subsetting) (value)</code
                >
              </p>
            </div>
            <div class="cmd-line">
              <p class="cmd-cmd">starboard</p>
              <p class="cmd-desc">
                A series of commands to let you modify the starboard settings
                for your server.
              </p>
              <p class="cmd-usage">
                <code class="code-inline"
                  >-starboard &lt;enable/disable/set/remove/reset/show&gt;
                  (setting) (value)</code
                >
              </p>
            </div>
          </div>
        </div>
        <div v-if="devShow">
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
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Commands",
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
#user {
  display: block;
}
#moderator {
  display: none;
}
#management {
  display: none;
}
#admin {
  display: none;
}
#developer {
  display: none;
}

.cmd-table-header {
  display: flex;
  padding: 1rem;
  background: var(--main-bg-dark);
  border-radius: 5px 5px 0 0;
}

.cmd-header {
  font-weight: 700;
  font-size: 1.1rem;
}

.cmd-container {
  display: flex;
  flex-flow: column;
  padding: 0 1rem 1rem 1rem;
}

.cmd-header-line {
  width: 100%;
  display: flex;
  padding: 0.5rem;
}
.cmd-line {
  width: 100%;
  display: flex;
  padding: 0.5rem;
}

.cmd-line:not(:last-child) {
  border-bottom: 1px solid var(--subitem-bg-dark);
}

.cmd-cmd {
  flex: 1;
}

.cmd-desc {
  flex: 3;
  padding: 0 0.5rem 0 0.5rem;
}

.cmd-usage {
  flex: 1;
}

@media only screen and (max-width: 500px) {
  .cmd-container {
    padding: 1rem;
  }
  .cmd-table-header {
    display: none;
  }
  .cmd-line {
    flex-flow: column;
  }
  .cmd-cmd {
    font-weight: 700;
    font-size: 1.1rem;
  }
  .cmd-desc {
    padding: 0.5rem 0;
  }
}
</style>
