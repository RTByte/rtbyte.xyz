<template>
  <div class="page-content">
    <div class="content-wrapper about-wrapper">
      <div
        v-for="teamMember in coreTeam"
        :key="teamMember.name"
        class="team-member"
      >
        <img class="team-member-pic" :src="teamMember.image" />
        <div class="team-member-details">
          <div class="about">
            <h2>{{ teamMember.name }}</h2>
            <span class="about-label">{{ teamMember.title }}</span>
          </div>
          <div class="links">
            <a
              v-for="link in teamMember.links"
              :key="link.url"
              class="about-link"
              :href="link.url"
              target="_blank"
            >
              <font-awesome-icon
                :icon="[`${link.icon.style}`, `${link.icon.icon}`]"
                :transform="link.icon.mask ? 'shrink-6' : ''"
                :mask="link.icon.mask ? ['fas', 'square'] : ''"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content-container">
        <h2>
          <a href="https://github.com/kyranet">Kyra</a>,
          <a href="https://github.com/vladfrangu">Vlad</a>, and
          <a href="https://github.com/dirigeants"
            >everyone else at Dirigeants</a
          >
        </h2>
        <p class="content-text">
          All of the contributors, whether they be part of the core team or the
          community, have done an awesome job making these frameworks and tools.
        </p>
      </div>
      <div class="content-container">
        <h2>
          <a href="https://github.com/amishshah">Amish Shah</a>, and the rest of
          the
          <a href="https://github.com/discordjs">team behind Discord.js</a>
        </h2>
        <p class="content-text">
          These ladies and gentlemen have poured countless hours into making one
          of the best interfaces around.
        </p>
      </div>
      <div class="content-container">
        <h2><a href="https://twitter.com/ArtsyDiego">ArtsyDiego</a></h2>
        <p class="content-text">
          Thanks to ArtsyDiego for providing us with our logo.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoreTeamAbout",
  computed: {
    coreTeam() {
      return this.$store.state.coreTeam;
    }
  }
};
</script>
