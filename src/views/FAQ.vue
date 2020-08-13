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
      <div class="page-content">
        <div v-if="generalShow">
          <div class="content-wrapper">
            <div class="content-container">
              <h2 class="question">How do I get started with RTByte?</h2>
              <p class="content-text">
                To get started with RTByte, simply click the
                <b>Add RTByte</b> button in the upper right corner of this page.
                Once RTByte has been invited to your server, it will
                automatically set up the following items.
              </p>
              <ul>
                <li class="content-text">An administrator role</li>
                <li class="content-text">A moderator role</li>
                <li class="content-text">A server log channel</li>
              </ul>
              <p class="content-text">
                The server owner will be granted the Administrator role
                automatically. All of these things can be reconfigured using the
                <code class="code-inline">settings</code>
                command.
              </p>
              <p class="content-text">
                For a full list of commands, please see the
                <a href="/commands">Commands</a> page, or run the
                <code class="code-inline">help</code> command.
              </p>
            </div>
            <div class="content-container">
              <h2 class="question">
                I already have moderator and/or admin roles set up! Can I remove
                the ones the bot created?
              </h2>
              <p class="content-text">
                Yes you can! Make sure you've reconfigured the bot to use your
                already existing roles using the
                <code class="code-inline">conf</code> command first, however.
                For instructions on how to use the
                <code class="code-inline">conf</code> command, please see the
                <a onclick="configActive()" href="#/configuration"
                  >Configuration</a
                >
                category.
              </p>
            </div>
            <div class="content-container">
              <h2 class="question">
                RTByte isn't responding to any commands, what do I do?
              </h2>
              <p class="content-text">
                This can be due to a couple of different things. Please check
                the following:
              </p>
              <ol>
                <li class="content-text">
                  Check if RTByte has the
                  <span class="highlighted">Read and Send Messages</span>
                  permission either on the whole server or in the channel you're
                  in.
                </li>
                <li class="content-text">
                  Type <span class="highlighted">@RTByte prefix</span>, and make
                  sure you're using the correct one.
                </li>
              </ol>
              <p class="content-text">
                If neither of these work, please join our
                <a href="/discord" target="_blank">support server</a> for
                further assistance.
              </p>
            </div>
            <div class="content-container">
              <h2 class="question">Is RTByte open-source?</h2>
              <p class="content-text">
                Yes. RTByte has always, and will always, be open-source. You can
                view or contribute to the source code for any of our projects
                over on our <a href="/github" target="_blank">GitHub</a> page.
              </p>
            </div>
            <div class="content-container">
              <h2 class="question">How can I contribute to the project?</h2>
              <p class="content-text">
                Of course! We'd love it if you were able to contribute to the
                project in any way you'd like - whether that's through helping
                with development, design, testing, translating, or even just
                helping others in our
                <a href="/discord" target="_blank">support server</a>.
              </p>
              <p class="content-text">
                Even if you can't contribute in any of the ways listed above,
                you can still help out by giving us suggestions for new
                features, or by
                <a href="/donate" target="_blank">donating</a> to the project.
              </p>
              <p class="content-text">
                Every single contribution to the project is greatly appreciated.
              </p>
            </div>
          </div>
        </div>
        <div v-if="configShow">
          <div class="content-wrapper">
            <div class="content-container">
              <h2 class="question">How do I use the configuration command?</h2>
              <p class="content-text">
                While the <code class="code-inline">conf</code> command looks
                complicated at first, it's actually pretty easy to use. Every
                configuration is stored as a
                <span class="highlighted">key</span>, and that key has a
                <span class="highlighted">value</span>. Keys can also be stored
                in folders, and those folders can have subfolders.
              </p>
              <p class="content-text">
                To view the configuration, you can run the following command.
              </p>
              <pre><code>-conf show</code></pre>
              <p class="content-text">
                This will show you the root folder of the configuration. You'll
                see a list of folders, as well as a couple of keys. To view one
                of those folders, simply type in the folder name. To view a
                subfolder of a folder, simply type in the folder name, followed
                by <code class="code-inline">.subfolder</code>
              </p>
              <pre><code>-conf show channels</code><br/><code>-conf show logs.events</code></pre>
              <p class="content-text">
                Setting a value for a configuration key follows the same
                structure of viewing the configuration, but is slightly
                different.
              </p>
              <pre><code>-conf set logs.events.channelUpdate <span class="highlighted">true</span></code><br/><code>           <b>🠕</b>     <b>🠕</b>           <b>🠕</b>        <b>🠕</b></code><br/><code>       folder  subfolder   key     value</code></pre>
              <p class="content-text">
                In this example, we're first telling the command that we want to
                <i>set</i> a configuration instead of showing one. After that,
                we're defining the folder (and optionally any subfolders), then
                the actual key itself. The key, much like a folder, is accessed
                by typing its name. If it's in a folder, you'd need to add
                <code class="code-inline">.key</code> after the folder name. If
                the key isn't in a folder, you can simply type in the name of
                the key.
              </p>
            </div>
            <div class="content-container">
              <h2 class="question">
                Why are configuration options named the way they are?
              </h2>
              <p class="content-text">
                The configuration keys are named the way they are due to our
                coding guidelines. The same way you access a configuration key
                when running the <code class="code-inline">conf</code> command,
                we do in the code. We're currently working on a server dashboard
                for this website, which will let you configure all your server
                settings via your browser (with the command as a backup).
              </p>
              <p class="content-text">
                We try to name the configuration options as clearly as possible,
                but in some cases it doesn't come across as clearly as we
                intended.
              </p>
            </div>
            <div class="content-container">
              <h2 class="question">
                What event and moderation logs are enabled by default?
              </h2>
              <p class="content-text">
                All moderation logs are enabled by default. The event logs that
                are enabled by default are as follows:
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
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "FAQ",
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
.highlighted {
  color: var(--complementary-lighter);
}

#general {
  display: block;
}
#configuration {
  display: none;
}
</style>
