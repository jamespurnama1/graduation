<template>
  <div id="app">
    <main>
      <transition
        name="fade"
        mode="out-in">
        <router-view/>
      </transition>
    </main>
    <Navbar v-if="$route.name !== 'Splash'" />
    <scrollTop v-show='scrollButton' @click.native='scrollToTop(); $refs.fullpage.api.moveTo(3)' />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import scrollTop from './components/scrollTop.vue';

export default {
  name: 'Graduation',
  components: {
    Navbar,
    scrollTop,
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
@import './src/styles/buefy.module.scss';
@import './src/styles/fonts.module.scss';

.page {
  background-color: white;
  width: 101.2%;
  min-height: 100vh;
  left: 0;
}

.right {
  position: relative;
  right: 0;
}

.bg{
  position: fixed;
  z-index: -1;
}

.clickable {
  cursor: pointer;
}

button:active {
  border:none
}

main {
  position: relative;
  width: 94.45vw;
  z-index: 1;
}

block {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;
  flex-wrap: wrap;
  height: 90vh;
}

.center {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
}

h1 {
  font-family: 'AXIS';
  font-weight: 800;
  text-align: left;
  font-size: 10em;
  color: black;
  font-weight: 700;
  line-height: 0.7em;
  text-indent: -0.2em;
  margin: 0.2em;
}

h3 {
  font-family: 'AXIS';
  font-weight: 800;
  font-size: 1.5em;
  color:black;
  text-decoration: none;
}

p {
  width: 40%;
  color: black;
  margin-bottom: 1em;
}

html {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #575F6B;
}

</style>
