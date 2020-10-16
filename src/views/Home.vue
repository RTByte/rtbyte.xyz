<template>
  <div class="hero">
    <div class="hero-content">
      <object
        type="image/svg+xml"
        data="static/rtbyte-text-light-horizontal.svg"
        class="hero-img"
      ></object>
      <p class="hero-desc">Your one-stop-shop for Discord server moderation.</p>
      <div class="buttons">
        <a class="btn hero-btn" href="/discord" target="_blank">
          COMMUNITY SERVER
        </a>
        <a class="btn hero-btn addbot-btn" href="/invite" target="_blank">
          ADD RTBYTE
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.hero {
  grid-area: main;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

/* HERO */
.hero a {
  text-decoration: none;
  color: var(--text-main);
}

.hero-content {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.hero-img {
  font-family: "Sen", sans-serif;
  max-width: 50rem;
  margin: 2rem;
}

.hero-img text {
}

.hero-desc {
  padding: 0 1rem;
  text-align: center;
  font-size: 1.75rem;
}

.hero-btn {
  text-align: center;
  font-family: "Sen", sans-serif;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  margin: 1rem;
}

.addbot-btn {
  background-color: var(--accent);
}

.hero-btn:hover {
  filter: brightness(1.2);
}

@media only screen and (max-width: 1010px) {
  .hero-img {
    padding: 0 2rem;
  }
  .hero-desc {
    font-size: 1.5rem;
  }
  .hero-btn {
    font-size: 1.25rem;
  }
}

@media only screen and (max-width: 500px) {
  .hero .buttons {
    flex-flow: column;
  }
}
</style>
