<template>
  <header>
    <div class="navbar">
      <nav class="header-container header-container-left">
        <ul class="nav-container">
          <li class="img-container">
            <router-link to="/">
              <img
                class="header-img"
                src="/static/rtbyte-logo-light.svg"
                alt="RTByte logo"
              />
            </router-link>
          </li>
          <li><router-link to="/commands">COMMANDS</router-link></li>
          <li class="has-dropdown" aria-haspopup="true">
            <a href="#">
              CONTRIBUTE
              <font-awesome-icon :icon="['fas', 'chevron-down']" />
            </a>
            <ul class="nav-dropdown" aria-label="submenu">
              <li class="dropdown-item">
                <a href="/github" target="_blank">GITHUB</a>
              </li>
              <li class="dropdown-item">
                <a href="https://translate.rtbyte.xyz/" target="_blank">
                  TRANSLATE
                </a>
              </li>
            </ul>
          </li>
          <li class="has-dropdown" aria-haspopup="true">
            <a href="#">
              SUPPORT
              <font-awesome-icon :icon="['fas', 'chevron-down']" />
            </a>
            <ul class="nav-dropdown" aria-label="submenu">
              <li class="dropdown-item">
                <a href="/discord" target="_balnk">DISCORD</a>
              </li>
              <li class="dropdown-item">
                <router-link to="/faq">F.A.Q.</router-link>
              </li>
              <li class="dropdown-item">
                <a href="https://status.rtbyte.xyz/" target="_blank">STATUS</a>
              </li>
            </ul>
          </li>
          <li><router-link to="/about">ABOUT US</router-link></li>
        </ul>
      </nav>
      <nav class="header-container header-container-middle">
        <ul class="nav-container">
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
            <a href="#" @click="toggleMobileMenu()">
              <font-awesome-icon :icon="['fad', 'bars']" class="header-menu" />
            </a>
          </li>
        </ul>
        <div class="buttons on-right">
          <a class="btn header-btn" href="/invite" target="_blank">
            ADD RTBYTE
          </a>
          <a class="btn header-btn donate-btn" href="/donate" target="_blank">
            DONATE
          </a>
        </div>
      </nav>
      <nav class="header-container header-container-right">
        <div class="buttons">
          <a class="btn header-btn" href="/invite" target="_blank">
            ADD RTBYTE
          </a>
          <a class="btn header-btn donate-btn" href="/donate" target="_blank">
            DONATE
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    toggleMobileMenu() {
      this.$store.commit("toggleMobileMenu");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* HEADER */
header {
  grid-area: header;
  display: flex;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(10, 11, 16, 1) 0%,
    rgba(10, 11, 16, 0) 100%
  );
}

.navbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header a,
header li {
  color: var(--text-main);
  font-size: 1.1rem;
  font-family: "Sen", sans-serif;
  text-decoration: none;
  white-space: nowrap;
}

header i {
  font-size: 0.9rem;
}

.header-container {
  display: flex;
  align-items: center;
  margin: 1rem;
}

.header-container-left {
  justify-content: flex-start;
}

.header-container-middle {
  width: 100%;
  display: none;
  justify-content: center;
}

.header-container-right {
  margin-left: auto;
  justify-content: flex-end;
}

.nav-container {
  display: flex;
  align-items: center;
}

.nav-container li {
  display: block;
}

.nav-container li .nav-dropdown {
  background-color: var(--main-bg-dark);
  visibility: hidden;
  opacity: 0;
  margin-top: 1rem;
  position: absolute;
}

.nav-dropdown {
  border-radius: 5px;
}

.dropdown-item {
  width: 100%;
  padding: 1rem 1.25rem 1rem 1.25rem;
}

.nav-container li:hover > .nav-dropdown,
.nav-container li:focus-within > .nav-dropdown,
.nav-container li .nav-dropdown:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

.has-dropdown:hover svg {
  transform: rotate(-180deg);
}

.header-btn {
  padding: 0.55rem;
}

.donate-btn {
  background-color: var(--accent);
  margin-left: 1rem;
}

.header-img {
  width: 50px;
  min-width: 50px;
}

.header-img-big {
  height: 50px;
}

header li a {
  border-bottom: 2px solid transparent;
}

header li a:hover,
header li a:focus-within {
  color: var(--text-dimmed);
}

.header-btn:hover,
.header-btn:focus-within {
  filter: brightness(1.2);
}

.active-page,
.router-link-active {
  border-bottom: 2px solid var(--text-main);
}

.active-page:hover,
.active-page:focus-within {
  border-bottom: 2px solid var(--text-dimmed);
}

.header-menu {
  font-size: 2rem;
}

.on-right {
  margin-left: auto;
  justify-content: flex-end;
}

.mobile-menu {
  background: #0f1118fa;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100vh;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  display: none;
}

.mobile-menu-item {
  color: var(--text-main);
  text-decoration: none;
  font-family: "Sen", sans-serif;
  font-size: 1.5rem;
}

.mobile-menu-inactive {
  opacity: 0;
  visibility: hidden;
}

.mobile-menu-hide {
  display: none;
}

.mobile-menu-active {
  opacity: 1;
  visibility: visible;
}

.mobile-menu-show {
  display: flex;
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

@media only screen and (max-width: 1010px) {
  .header-container-left {
    display: none;
  }

  .header-container-right {
    display: none;
  }

  .header-container-middle {
    display: flex;
  }
}

@media only screen and (max-width: 500px) {
  .donate-btn {
    display: none;
  }
}
</style>
