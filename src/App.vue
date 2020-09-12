<template>
  <div id="app">
    <splash style='z-index: 20'
      v-show="(this.$store.state.splash) && (this.$route.name != '404')" />
    <navbar v-if='renderSwitchSet' style='z-index: 10' />
    <main v-if='renderSwitchSet'>
      <transition
        name="fade"
        mode="out-in">
      </transition>
      <transition
        name="fade"
        mode="out-in">
        <router-view
        :key='$route.fullPath' />
      </transition>
      <div id='footer'>
        <p style='font-size: calc(5px + 1vw);'>Copyright 2020 TheCREAID</p>
        <div style='display: flex; flex-direction: row'>
          <a href='http://instagram.com/the_creaid' target='_blank' style='color: black; padding: 0 20%'>
            <feather type='instagram' stroke-width='1.8' />
          </a>
          <a href='https://www.facebook.com/Cre-Aid-111544010687433/' target='_blank' style='color: black'>
            <feather type='facebook' stroke-width='1.6' />
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
const navbar = () => import('@/components/nav.vue');
const splash = () => import('@/pages/splash.vue');

export default {
  name: 'Graduation',
  components: {
    navbar,
    splash,
  },
  data() {
    return {
      scrollButton: false,
      renderSwitchSet: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  created() {
    window.addEventListener('scroll', this.getPos);
    this.$on('start', () => {
      this.renderSwitchSet = true;
    });
  },
  destroyed() {
    window.removeEventListener('scroll', this.getPos);
  },
};

</script>

<style lang="scss">
@import './src/styles/fonts.module.scss';
@import './src/styles/transitions.module.scss';

.feather--instagram, .feather--facebook {
  width: calc(10px + 1.5vw);
}

#footer {
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8vw;
}

.VueCarousel-pagination {
  display: flex !important;
  justify-content: center !important;
}

.VueCarousel-navigation-button {
  font-family: "AXIS" !important;
  font-size: calc(10px + 1vw) !important;
  color: #eb2027 !important;
  transform: translate(0%, -100%) !important;
}

.VueCarousel-slide {
  width: 100% !important;
}

.VueCarousel-inner {
  // height: 47vw !important;
}

.VueCarousel-dot-container {
  position: absolute !important;
  transform: translateY(-200%) !important;
}

.VueCarousel-dot {
  min-height: 5px;
  min-width: 5px;
  width: 0.5vw !important;
  height: 0.5vw !important;
  margin-left: 0;
}

.VueCarousel-dot {
  padding: 0 10px !important;
}

button {
  font-family: 'AXIS';
  padding: 0 10px;
  color: white;
  background-color: $primary;
  border: solid 3px $primary;
  margin-left: 15px;
}

button:hover {
  background-color: white;
  color: $primary;
}

.title {
  display: flex;
  justify-content: center;
  padding: 4%;
  flex-wrap: wrap;
  align-items: center;
}

.line {
  border-width: 3px;
  border-bottom-style: solid;
  border-color: $primary;
  width: 100%;
  height: 0;
  margin: 4% 0;
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
  margin: 0;
}

.videoMask {
  overflow: hidden;
}

.photo {
  width: 100%;
  height: auto;
  // transform: translateY(-20%);
  object-fit: cover;
}

.page {
  position: relative;
  top: 6.46vh;
  margin-bottom: 100px;
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
  line-height: calc(10px + 4.5vw);
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

body {
  margin: 0;
}

body.noScroll {
  overflow: hidden;
}

html {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
