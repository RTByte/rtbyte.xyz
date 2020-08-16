<template>
  <main>
    <div class="page-wrapper">
      <div class="page-selector">
        <div class="page-title">
          <h1>ABOUT US</h1>
          <p>Project contributors</p>
        </div>
        <aside class="menu">
          <ul class="menu-list">
            <a
              @click="coreTeamSelector()"
              v-bind:class="{ 'is-active': coreTeamShow }"
              href="#/core-team"
            >
              Core team & shout-outs
            </a>
            <a
              @click="sponsorSelector()"
              v-bind:class="{ 'is-active': sponsorShow }"
              href="#/sponsors"
            >
              Project sponsors
            </a>
          </ul>
        </aside>
      </div>
      <div>
        <div class="page-content" v-if="coreTeamShow">
          <div class="content-wrapper about-wrapper">
            <div class="team-member">
              <img
                class="team-member-pic"
                src="@/assets/contributors/rasmusgerdin.jpg"
              />
              <div class="team-member-details">
                <div class="about">
                  <h2>Rasmus Gerdin</h2>
                  <span class="about-label">DEVELOPER, PROJECT LEAD</span>
                </div>
                <div class="links">
                  <a
                    class="about-link"
                    href="mailto:rasmus@rtbyte.xyz"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'envelope']"
                      transform="shrink-6"
                      :mask="['fas', 'square']"
                    />
                  </a>
                  <a
                    class="about-link"
                    href="https://rasmusgerdin.com/"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'globe']"
                      transform="shrink-6"
                      :mask="['fas', 'square']"
                    />
                  </a>
                  <a
                    class="about-link"
                    href="https://github.com/rasmusgerdin"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'github']"
                      transform="shrink-6"
                      :mask="['fas', 'square']"
                    />
                  </a>
                  <a
                    class="about-link"
                    href="https://twitter.com/rasmusgerdin_"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'twitter']"
                      transform="shrink-6"
                      :mask="['fas', 'square']"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="team-member">
              <img
                class="team-member-pic"
                src="@/assets/contributors/michaelcumbers.jpg"
              />
              <div class="team-member-details">
                <div class="about">
                  <h2>Michael Cumbers</h2>
                  <span class="about-label">DEVELOPER</span>
                </div>
                <div class="links">
                  <a
                    class="about-link"
                    href="mailto:michael@rtbyte.xyz"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'envelope']"
                      transform="shrink-6"
                      :mask="['fas', 'square']"
                    />
                  </a>
                  <a
                    class="about-link"
                    href="https://michaelcumbers.ca/"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'globe']"
                      transform="shrink-6"
                      :mask="['fas', 'square']"
                    />
                  </a>
                  <a
                    class="about-link"
                    href="https://github.com/mcumbers/"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'github']"
                      transform="shrink-6"
                      :mask="['fas', 'square']"
                    />
                  </a>
                  <a
                    class="about-link"
                    href="https://twitter.com/stickmanmeyhem"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'twitter']"
                      transform="shrink-6"
                      :mask="['fas', 'square']"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="team-member">
              <img
                class="team-member-pic"
                src="@/assets/contributors/killianhiggins.jpg"
              />
              <div class="team-member-details">
                <div class="about">
                  <h2>Killian Higgins</h2>
                  <span class="about-label">DEVELOPER</span>
                </div>
                <div class="links">
                  <a
                    class="about-link"
                    href="mailto:killian@rtbyte.xyz"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'envelope']"
                      transform="shrink-6"
                      :mask="['fas', 'square']"
                    />
                  </a>
                  <a
                    class="about-link"
                    href="https://github.com/Uzui2012"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'github']"
                      transform="shrink-6"
                      :mask="['fas', 'square']"
                    />
                  </a>
                  <a
                    class="about-link"
                    href="https://twitter.com/Uzui2012"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'twitter']"
                      transform="shrink-6"
                      :mask="['fas', 'square']"
                    />
                  </a>
                  <a
                    class="about-link"
                    href="https://www.instagram.com/killian2291/"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'instagram']"
                      transform="shrink-6"
                      :mask="['fas', 'square']"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="team-member">
              <img
                class="team-member-pic"
                src="@/assets/contributors/justinshull.jpg"
              />
              <div class="team-member-details">
                <div class="about">
                  <h2>Justin Shull</h2>
                  <span class="about-label">DEVELOPER</span>
                </div>
                <div class="links">
                  <a
                    class="about-link"
                    href="mailto:justin@rtbyte.xyz"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'envelope']"
                      transform="shrink-6"
                      :mask="['fas', 'square']"
                    />
                  </a>
                  <a
                    class="about-link"
                    href="https://github.com/JShull97"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'github']"
                      transform="shrink-6"
                      :mask="['fas', 'square']"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="content-wrapper">
            <div class="content-container">
              <h2>
                <a href="https://github.com/bdistin">AoDude</a>,
                <a href="https://github.com/kyranet">Kyra</a>, and
                <a href="https://github.com/dirigeants"
                  >everyone else at Dirigeants</a
                >
              </h2>
              <p class="content-text">
                All of the contributors, whether they be part of the core team
                or the community, have done an awesome job making these
                frameworks and tools.
              </p>
            </div>
            <div class="content-container">
              <h2>
                <a href="https://github.com/amishshah">Amish Shah</a>, and the
                rest of the
                <a href="https://github.com/discordjs"
                  >team behind Discord.js</a
                >
              </h2>
              <p class="content-text">
                These ladies and gentlemen have poured countless hours into
                making one of the best interfaces around.
              </p>
            </div>
            <div class="content-container">
              <h2><a href="http://mokkaquillart.tumblr.com/">MokkaQuill</a></h2>
              <p class="content-text">
                Thanks to MokkaQuill for providing us with our logo.
              </p>
            </div>
          </div>
        </div>
        <div class="page-content" v-if="sponsorShow">
          <div class="content-wrapper">
            <div class="sponsor">
              <img class="sponsor-img" src="@/assets/sponsors/atlassian.svg" />
              <div class="sponsor-details">
                <h2 class="sponsor-title">Atlassian</h2>
                <span class="about-label sponsor-label">STATUSPAGE</span>
                <p>
                  We use
                  <a
                    href="https://www.atlassian.com/software/statuspage"
                    target="_blank"
                    >Statuspage</a
                  >
                  by Atlassian for our status page (<a
                    href="https://status.rtbyte.xyz/"
                    target="_blank"
                    >status.rtbyte.xyz</a
                  >) to display and notify our users of any downtime,
                  maintenance, or other incidents related to RTByte and any of
                  its services. We've been granted an open-source license by
                  Atlassian for this.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="page-content" v-if="sponsorShow">
          <div class="content-wrapper">
            <div class="sponsor">
              <img class="sponsor-img" src="@/assets/sponsors/crowdin.svg" />
              <div class="sponsor-details">
                <h2 class="sponsor-title">Crowdin</h2>
                <span class="about-label sponsor-label"
                  >LOCALIZATION MANAGEMENT</span
                >
                <p>
                  We use
                  <a href="https://crowdin.com/" target="_blank">Crowdin</a>
                  to manage localization for RTByte and its services. Our
                  Crowdin page can be found at
                  <a href="https://translate.rtbyte.xyz/" target="_blank"
                    >translate.rtbyte.xyz</a
                  >. We've been granted an open-source license by Crowdin for
                  this.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "About",
  data: function() {
    return {
      coreTeamShow: true,
      sponsorShow: false
    };
  },
  methods: {
    coreTeamSelector() {
      this.$data.coreTeamShow = true;
      this.$data.sponsorShow = false;
    },
    sponsorSelector() {
      this.$data.coreTeamShow = false;
      this.$data.sponsorShow = true;
    }
  }
};
</script>

<style scoped>
.page-content {
  width: auto;
}

.about-wrapper {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}

.team-member {
  min-width: 400px;
  flex: 0 0 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
}

.team-member-pic {
  min-width: 125px;
  max-width: 125px;
  border-radius: 25%;
  margin-right: 1.5rem;
}

.team-member-details {
  width: 100%;
  display: flex;
  flex-flow: column;
}

.about {
  display: flex;
  flex-flow: column;
  margin: 0.5rem;
  white-space: nowrap;
}

.about-label {
  color: var(--text-sub);
  font-family: "Sen", sans-serif;
}

.sponsor {
  flex: 1;
  padding: 1rem;
  display: flex;
  align-items: center;
}

.sponsor-img {
  max-width: 12rem;
  min-width: 12rem;
  margin-right: 2rem;
  flex: 1;
}

.sponsor-details {
  flex: 3;
  display: flex;
  flex-flow: column;
}

.sponsor-title {
  font-size: 2rem;
}

.sponsor-label {
  margin-bottom: 0.75rem;
}

.links {
  display: flex;
  margin: 0.5rem;
}

.about-link {
  font-size: 2rem;
  color: var(--text-main);
  margin-right: 1rem;
}

.about-link:hover,
.about-link:focus {
  color: var(--text-dimmed);
}

.contributor {
  padding: 1rem;
}

#core-team {
  display: block;
}

#shoutouts {
  display: none;
}

@media only screen and (max-width: 500px) {
  .team-member {
    flex-flow: column;
    min-width: auto;
  }
  .sponsor {
    flex-flow: column;
  }
  .team-member-pic {
    min-width: 100px;
    margin-right: 0;
  }
  .team-member-details {
    align-items: center;
  }
  .about h2 {
    text-align: center;
  }
  .about-label {
    text-align: center;
  }
  .sponsor-img {
    margin: 0;
    margin-bottom: 1rem;
  }
  .sponsor-label {
    text-align: left;
  }
  .about-link {
    margin: 0 0.5rem;
  }
}
</style>
