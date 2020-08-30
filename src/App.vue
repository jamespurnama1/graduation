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

.title {
  position: relative;
  left: -5%;
  display: flex;
  justify-content: center;
  padding: 2%;
  flex-wrap: wrap;
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
  height: 40vh;
  width: 40vh;
}

.photo {
  width: 100%;
  transform: translateY(-20%);
  filter: grayscale(1);
  -webkit-filter: grayscale(1);
}

video{
  width: 70vw;
  max-height: 70vh;
  z-index: 0;
}

.page {
  position: relative;
  top: 7vh;
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
  min-height: 100vh;
  // overflow: hidden;
}

.center {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: 'AXIS';
  font-weight: 800;
  text-align: left;
  font-size: 10em;
  color: $primary;
  font-weight: 700;
  line-height: 0.7em;
  text-indent: -0.2em;
  margin: 0.2em 0;
}

h2 {
  font-family: 'AXIS';
  font-weight: 800;
  font-size: 5em;
  color: $primary;
  text-decoration: none;
  margin: 0.2em 0;
}

h3 {
  font-family: 'AXIS';
  font-weight: 800;
  font-size: 1.5em;
  color: $primary;
  text-decoration: none;
  margin: 0.2em 0;
}

a {
  text-decoration: none;
}

p {
  font-family: 'AXIS';
  font-size: 1em;
  color: black;
  text-decoration: none;
}

html {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
