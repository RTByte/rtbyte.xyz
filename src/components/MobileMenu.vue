<template>
  <ul id="mobile-menu" class="mobile-menu nav-container mobile-menu-inactive">
    <a href="#" @click="toggleMobileMenu()">
      <font-awesome-icon
        :icon="['fas', 'times']"
        class="close-btn mobile-menu-close"
      />
    </a>
    <li class="img-container">
      <router-link to="/">
        <img
          class="header-img"
          src="/static/rtbyte-logo-light.svg"
          alt="RTByte logo"
        />
      </router-link>
    </li>
    <li>
      <router-link to="/commands" class="mobile-menu-item">
        <span @click="toggleMobileMenu()">COMMANDS</span>
      </router-link>
    </li>
    <li>
      <a class="mobile-menu-item" href="/github" target="_blank"
        >GITHUB <font-awesome-icon :icon="['fad', 'external-link']"
      /></a>
    </li>
    <li>
      <a
        class="mobile-menu-item"
        href="https://translate.rtbyte.xyz/"
        target="_blank"
      >
        TRANSLATE <font-awesome-icon :icon="['fad', 'external-link']" />
      </a>
    </li>
    <li>
      <a class="mobile-menu-item" href="/discord" target="_blank"
        >DISCORD <font-awesome-icon :icon="['fad', 'external-link']"
      /></a>
    </li>
    <li>
      <router-link to="/faq" class="mobile-menu-item">
        <span @click="toggleMobileMenu()">F.A.Q.</span>
      </router-link>
    </li>
    <li>
      <a
        class="mobile-menu-item"
        href="https://status.rtbyte.xyz/"
        target="_blank"
      >
        STATUS <font-awesome-icon :icon="['fad', 'external-link']" />
      </a>
    </li>
    <li>
      <router-link to="/about" class="mobile-menu-item">
        <span @click="toggleMobileMenu()">ABOUT US</span>
      </router-link>
    </li>
    <li>
      <a class="mobile-menu-item" href="/donate" target="_blank"
        >DONATE <font-awesome-icon :icon="['fad', 'external-link']"
      /></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MobileMenu",
  methods: {
    toggleMobileMenu() {
      this.$store.commit("toggleMobileMenu");
    }
  }
};
</script>

<style scoped>
.mobile-menu {
  background: #0f1118fa;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100vh;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  display: flex;
}

.mobile-menu-item {
  color: var(--text-main);
  text-decoration: none;
  font-family: "Sen", sans-serif;
  font-size: 1.5rem;
}

.mobile-menu li a:hover,
.mobile-menu li a:focus-within {
  color: var(--text-dimmed);
}

.mobile-menu-close {
  color: var(--text-main);
  position: absolute;
  top: 2rem;
  right: 2rem;
}

.close-btn {
  font-size: 2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
