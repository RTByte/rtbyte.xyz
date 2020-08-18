<template>
  <div class="page-content">
    <div class="content-wrapper">
      <div class="content-container">
        <h2 class="question">How do I use the configuration command?</h2>
        <p class="content-text">
          While the <code class="code-inline">conf</code> command looks
          complicated at first, it's actually pretty easy to use. Every
          configuration is stored as a <span class="highlighted">key</span>, and
          that key has a <span class="highlighted">value</span>. Keys can also
          be stored in folders, and those folders can have subfolders.
        </p>
        <p class="content-text">
          To view the configuration, you can run the following command.
        </p>
        <pre><code>-conf show</code></pre>
        <p class="content-text">
          This will show you the root folder of the configuration. You'll see a
          list of folders, as well as a couple of keys. To view one of those
          folders, simply type in the folder name. To view a subfolder of a
          folder, simply type in the folder name, followed by
          <code class="code-inline">.subfolder</code>
        </p>
        <pre><code>-conf show channels</code><br/><code>-conf show logs.events</code></pre>
        <p class="content-text">
          Setting a value for a configuration key follows the same structure of
          viewing the configuration, but is slightly different.
        </p>
        <pre><code>-conf set logs.events.channelUpdate <span class="highlighted">true</span></code><br/><code>           <b>🠕</b>     <b>🠕</b>           <b>🠕</b>        <b>🠕</b></code><br/><code>       folder  subfolder   key     value</code></pre>
        <p class="content-text">
          In this example, we're first telling the command that we want to
          <i>set</i> a configuration instead of showing one. After that, we're
          defining the folder (and optionally any subfolders), then the actual
          key itself. The key, much like a folder, is accessed by typing its
          name. If it's in a folder, you'd need to add
          <code class="code-inline">.key</code> after the folder name. If the
          key isn't in a folder, you can simply type in the name of the key.
        </p>
      </div>
      <div class="content-container">
        <h2 class="question">
          Why are configuration options named the way they are?
        </h2>
        <p class="content-text">
          The configuration keys are named the way they are due to our coding
          guidelines. The same way you access a configuration key when running
          the <code class="code-inline">conf</code> command, we do in the code.
          We're currently working on a server dashboard for this website, which
          will let you configure all your server settings via your browser (with
          the command as a backup).
        </p>
        <p class="content-text">
          We try to name the configuration options as clearly as possible, but
          in some cases it doesn't come across as clearly as we intended.
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
