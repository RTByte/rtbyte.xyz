<template>
  <div class="page-content">
    <div class="content-wrapper">
      <div class="content-container">
        <h2 class="question">How do I get started with RTByte?</h2>
        <p class="content-text">
          To get started with RTByte, simply click the
          <b>Add RTByte</b> button in the upper right corner of this page. Once
          RTByte has been invited to your server, it will automatically set up
          the following items.
        </p>
        <ul>
          <li class="content-text">An administrator role</li>
          <li class="content-text">A moderator role</li>
          <li class="content-text">A server log channel</li>
        </ul>
        <p class="content-text">
          The server owner will be granted the Administrator role automatically.
          All of these things can be reconfigured using the
          <code class="code-inline">settings</code>
          command.
        </p>
        <p class="content-text">
          For a full list of commands, please see the
          <router-link to="/commands">Commands</router-link> page, or run the
          <code class="code-inline">help</code> command.
        </p>
      </div>
      <div class="content-container">
        <h2 class="question">
          I already have moderator and/or admin roles set up! Can I remove the
          ones the bot created?
        </h2>
        <p class="content-text">
          Yes you can! Make sure you've reconfigured the bot to use your already
          existing roles using the
          <code class="code-inline">conf</code> command first, however. For
          instructions on how to use the
          <code class="code-inline">conf</code> command, please see the
          <a @click="configSelector()" href="#/configuration">Configuration</a>
          category.
        </p>
      </div>
      <div class="content-container">
        <h2 class="question">
          RTByte isn't responding to any commands, what do I do?
        </h2>
        <p class="content-text">
          This can be due to a couple of different things. Please check the
          following:
        </p>
        <ol>
          <li class="content-text">
            Check if RTByte has the
            <span class="highlighted">Read and Send Messages</span>
            permission either on the whole server or in the channel you're in.
          </li>
          <li class="content-text">
            Type <span class="highlighted">@RTByte prefix</span>, and make sure
            you're using the correct one.
          </li>
        </ol>
        <p class="content-text">
          If neither of these work, please join our
          <a href="/discord" target="_blank">support server</a> for further
          assistance.
        </p>
      </div>
      <div class="content-container">
        <h2 class="question">Is RTByte open-source?</h2>
        <p class="content-text">
          Yes. RTByte has always, and will always, be open-source. You can view
          or contribute to the source code for any of our projects over on our
          <a href="/github" target="_blank">GitHub</a> page.
        </p>
      </div>
      <div class="content-container">
        <h2 class="question">How can I contribute to the project?</h2>
        <p class="content-text">
          Of course! We'd love it if you were able to contribute to the project
          in any way you'd like - whether that's through helping with
          development, design, testing, translating, or even just helping others
          in our
          <a href="/discord" target="_blank">support server</a>.
        </p>
        <p class="content-text">
          Even if you can't contribute in any of the ways listed above, you can
          still help out by giving us suggestions for new features, or by
          <a href="/donate" target="_blank">donating</a> to the project.
        </p>
        <p class="content-text">
          Every single contribution to the project is greatly appreciated.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GeneralFAQ"
};
</script>
