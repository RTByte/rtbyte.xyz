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
            <router-link to="/about/core-team">
              Core team & shout-outs
            </router-link>
            <router-link to="/about/sponsors">
              Sponsors & usage
            </router-link>
          </ul>
        </aside>
      </div>
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.page-content,
div >>> .page-content {
  width: auto;
}

.page-content >>> .about-wrapper {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}

.page-content >>> .team-member {
  min-width: 400px;
  flex: 0 0 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
}

.page-content >>> .team-member-pic {
  min-width: 125px;
  max-width: 125px;
  border-radius: 25%;
  margin-right: 1.5rem;
}

.page-content >>> .team-member-details {
  width: 100%;
  display: flex;
  flex-flow: column;
}

.page-content >>> .about {
  display: flex;
  flex-flow: column;
  margin: 0.5rem;
  white-space: nowrap;
}

.page-content >>> .about-label,
div >>> .about-label {
  color: var(--text-sub);
  font-family: "Sen", sans-serif;
}

div >>> .sponsor {
  flex: 1;
  padding: 1rem;
  display: flex;
  align-items: center;
}

div >>> .sponsor-img {
  max-width: 12rem;
  min-width: 12rem;
  margin-right: 2rem;
  flex: 1;
}

div >>> .sponsor-details {
  flex: 3;
  display: flex;
  flex-flow: column;
}

div >>> .title-container {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
}

div >>> .sponsor-title {
  font-size: 2rem;
}

div >>> .sponsor-icon {
  margin-left: 8px;
}

div >>> .sponsor-label {
  margin-bottom: 0.75rem;
}

.page-content >>> .links {
  display: flex;
  margin: 0.5rem;
}

.page-content >>> .about-link {
  font-size: 2rem;
  color: var(--text-main);
  margin-right: 1rem;
}

.page-content >>> .about-link:hover,
.page-content >>> .about-link:focus {
  color: var(--text-dimmed);
}

.page-content >>> .contributor {
  padding: 1rem;
}

@media only screen and (max-width: 850px) {
  div >>> .sponsor {
    padding: 0.5rem;
  }
  div >>> .sponsor-img {
    margin-right: 1.5rem;
  }
}

@media only screen and (max-width: 540px) {
  .page-content >>> .team-member {
    flex-flow: column;
    min-width: auto;
  }
  div >>> .sponsor {
    flex-flow: column;
  }
  .page-content >>> .team-member-pic {
    min-width: 100px;
    margin-right: 0;
  }
  .page-content >>> .team-member-details {
    align-items: center;
  }
  .page-content >>> .about h2 {
    text-align: center;
  }
  .page-content >>> .about-label {
    text-align: center;
  }
  div >>> .sponsor-img {
    margin: 0;
    margin-bottom: 1rem;
  }
  div >>> .sponsor-label {
    text-align: left;
  }
  .page-content >>> .about-link {
    margin: 0 0.5rem;
  }
}
</style>
