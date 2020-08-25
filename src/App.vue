<template>
  <div id="app">
    <Header @mobileMenu="mobileMenu = !mobileMenu"></Header>
    <transition name="fade">
      <MobileMenu
        @mobileMenu="mobileMenu = !mobileMenu"
        v-if="mobileMenu"
      ></MobileMenu>
    </transition>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MobileMenu from "@/components/MobileMenu.vue";

export default {
  name: "App",
  data: function() {
    return {
      mobileMenu: false
    };
  },
  components: {
    Header,
    MobileMenu
  }
};
</script>

<style>
/* VARIABLES */
:root {
  --accent: #fe3132;
  --complementary: #31fefd;
  --accent-lighter: #ff5050;
  --complementary-lighter: #50ffff;
  --body-bg-dark: #0f1118;
  --main-bg-dark: #181a22;
  --item-bg-dark: #1c1f29;
  --subitem-bg-dark: #2a2d3b;
  --text-main: #ffffff;
  --text-sub: #e6e6e6;
  --text-dimmed: #cecece;
}

/* CSS RESET */
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* CSS RESET END */

body {
  color: var(--text-main);
  background-color: var(--body-bg-dark);
  background-image: url(./assets/bg.svg);
  font-family: "Roboto", sans-serif;
}

#app {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: 100px minmax(calc(100vh - 100px), auto) auto;
  grid-template-areas:
    "header header header header header header header header header header header header"
    "main   main   main   main   main   main   main   main   main   main   main   main  "
    "footer footer footer footer footer footer footer footer footer footer footer footer";
}

main {
  grid-area: main;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

* {
  animation-duration: 0.2ms;
  animation-iteration-count: 1;
  transition-duration: 0.2ms;
  scroll-behavior: auto;
  transition: all 0.2s;
}

h2,
b,
p,
a,
li {
  font-family: "Roboto", sans-serif;
}

.buttons {
  padding: 1rem;
  display: flex;
  align-items: center;
}

.btn {
  border-radius: 5px;
  background-color: var(--item-bg-dark);
}

.btn:hover,
.btn:focus-within {
  transform: translateY(-4px);
}

.page-wrapper {
  width: 80%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.page-selector {
  min-width: 250px;
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-flow: column;
}

.page-title {
  padding: 1rem;
  margin-bottom: 1rem;
}

.page-title h1 {
  color: var(--text-main);
  text-align: center;
}

.page-title p {
  color: var(--text-sub);
  text-align: center;
}

.page-content {
  width: 100%;
  margin: 1rem;
  background: var(--item-bg-dark);
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.content-wrapper {
  padding: 1rem;
}

main h1 {
  font-family: "Sen", sans-serif;
}

code {
  font-size: 0.9rem;
  font-family: "Roboto Mono", monospace;
}

.code-inline {
  background: var(--main-bg-dark);
  padding: 0.2rem;
  border-radius: 5px;
}

pre {
  color: var(--text-sub);
  padding: 0.5rem;
  background: var(--main-bg-dark);
  border-radius: 5px;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16);
  white-space: pre-wrap;
}

main a {
  color: var(--accent-lighter);
  text-decoration: none;
}

.page-content a:hover,
.page-content a:focus {
  text-decoration: underline;
}

.content-container {
  padding: 1rem;
}

.content-text {
  color: var(--text-sub);
  margin: 0.5rem 0;
}

.menu {
  background: var(--main-bg-dark);
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.menu-list {
  display: flex;
  flex-flow: column;
}

.menu-list a {
  width: 100%;
  padding: 0.5rem;
  color: var(--text-main);
  text-decoration: none;
  border-radius: 5px;
}

.menu-list a:not(.is-active):hover {
  background: var(--item-bg-dark);
}

.is-active {
  background: var(--accent);
}

.nav-container li:not(.dropdown-item),
.nav-container li:not(.img-container) {
  padding: 1rem;
}

.img-container:hover,
.img-container:focus-within {
  filter: brightness(1.2);
}

@media only screen and (max-width: 1500px) {
  .page-wrapper {
    width: 100%;
  }
}

@media only screen and (max-width: 800px) {
  .page-wrapper {
    flex-flow: column;
    align-items: center;
  }
  .page-content {
    margin: 0;
    margin-bottom: 1rem;
  }
  .page-selector {
    width: 100%;
    padding: 0;
    margin-bottom: 1rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
