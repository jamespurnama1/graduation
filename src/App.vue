<template>
  <div id="app">
    <navbar style='z-index: 10' />
    <main>
      <transition
        name="fade"
        mode="out-in">
      <splash style='z-index: 20' v-show='this.$store.state.splash' />
      </transition>
      <transition
        name="fade"
        mode="out-in">
        <router-view />
      </transition>
    </main>
    <scrollTop v-show='scrollButton' @click.native='scrollToTop(); $refs.fullpage.api.moveTo(3)' />
  </div>
</template>

<script>
import navbar from './components/nav.vue';
import scrollTop from './components/scrollTop.vue';
import splash from './pages/splash.vue';

export default {
  name: 'Graduation',
  components: {
    navbar,
    scrollTop,
    splash,
  },
  data() {
    return {
      scrollButton: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    // getPos() {
    //   const scrollPos = window.scrollY ||
    // window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
    //   console.log(scrollPos);
    // },
  },
  created() {
    window.addEventListener('scroll', this.getPos);
  },
  destroyed() {
    window.removeEventListener('scroll', this.getPos);
  },
};

</script>

<style lang="scss">
@import './src/styles/fonts.module.scss';
@import './src/styles/transitions.module.scss';

.VueCarousel-navigation-button {
  font-family: "AXIS" !important;
  font-size: calc(10px + 1vw) !important;
  color: #eb2027 !important;
  transform: translate(0%, -100%) !important;
}

.VueCarousel-slide {
  width: 100%;
  height: 45vw;
}

.VueCarousel-dot-container {
  margin: 0 !important;
}

.VueCarousel-dot {
  padding: 0 10px !important;
}

button {
  font-family: 'AXIS';
  padding: 0 10px;
  color: white;
  background-color: $primary;
  border: solid 3px white;
}

button:hover {
  background-color: white;
  border: 3px solid $primary;
  color: $primary;
}

.title {
  display: flex;
  justify-content: center;
  padding: 2%;
  flex-wrap: wrap;
  align-items: center;
}

.line {
  border-width: 3px;
  border-bottom-style: solid;
  border-color: $primary;
  width: 100%;
  height: 0;
  margin: 40px 0;
}

.verticalLine {
  position: absolute;
  border-width: 3px;
  border-right-style: solid;
  width: 0;
  height: 106.5%;
  right: 38%;
  top: -5.5%;
}

.card-list {
  display: grid;
  grid-gap: 1em;
  list-style-type: none;
  align-items: center;
  justify-items: center;
}

.videoMask {
  overflow: hidden;
}

.photo {
  width: 100%;
  transform: translateY(-20%);
  filter: grayscale(1);
  -webkit-filter: grayscale(1);
  object-fit: cover;
}

video{
  width: 70vw;
  max-height: 70vh;
  z-index: 0;
}

.page {
  position: relative;
  top: 6.46vh;
}

.bg{
  position: fixed;
  z-index: 0;
}

.clickable {
  cursor: pointer;
}

.block {
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-wrap: wrap;
  overflow-y: hidden;
}

.center {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1, h2 ,h3, h4 {
  font-family: 'AXIS';
  font-weight: 900;
  color: $primary;
  margin: 0.2em 0;
  text-decoration: none;
}

h1 {
  text-align: center;
  font-size: calc(12px + 13.5vw);
  line-height: 0.7em;
  text-indent: -0.2em;
  white-space: nowrap;
}

h2 {
  widows: 3;
  orphans: 3;
  font-size: calc(10px + 5vw);
}

h3 {
  font-size: calc(10px + 3vw);
}

h4 {
  font-size: calc(7px + 1vw);
  color: black;
}

a {
  text-decoration: none;
}

p {
  font-family: 'AXIS';
  color: black;
  text-decoration: none;
  font-size: calc(8px + 1vw);
}

html {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
