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
              id="coreTeamSelector"
              class="is-active"
              onclick="coreTeamActive()"
              href="#/core-team"
            >
              Core team & shout-outs
            </a>
            <a id="sponsorSelector" onclick="sponsorActive()" href="#/sponsors">
              Project sponsors
            </a>
          </ul>
        </aside>
      </div>
      <div class="page-content">
        <div id="core-team">
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
        <div id="sponsors">
          <div class="content-wrapper"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
/* ABOUT US */
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
  .about-link {
    margin: 0 0.5rem;
  }
}
</style>
