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
          Get information on a specified channel. If no channel is specified, it
          returns your current channel.
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
          Lists moderation actions taken against a user in the past. Refers to a
          specific case if a case ID is provided.
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
        <p class="cmd-desc">Warns a specified user and logs the reason.</p>
        <p class="cmd-usage">
          <code class="code-inline">-warn &lt;user&gt; [reason] [-s]</code>
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">mute</p>
        <p class="cmd-desc">Mutes a specified user and logs the reason.</p>
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
        <p class="cmd-desc">Kicks a specified user and logs the reason.</p>
        <p class="cmd-usage">
          <code class="code-inline">-lyrics &lt;song&gt;</code>
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">softban</p>
        <p class="cmd-desc">Softbans a specified user and logs the reason.</p>
        <p class="cmd-usage">
          <code class="code-inline">-softban &lt;user&gt; [reason] [-s]</code>
        </p>
      </div>
      <div class="cmd-line">
        <p class="cmd-cmd">ban</p>
        <p class="cmd-desc">Bans a specified user and logs the reason.</p>
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
          <code class="code-inline">-vckick &lt;user&gt; [reason] [-s]</code>
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
</template>
