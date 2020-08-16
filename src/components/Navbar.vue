<template>
  <div class='navbar'>
    <transition name='navbar'>
      <nav>
        <ul>
          <router-link tag='li' to='/home' class='margin'>What's COVID-12?</router-link>
          <router-link tag='li' to='/infected' class='margin'>The Outbreak</router-link>
          <router-link tag='li' to='/virus' class='margin'>Virus Evolution</router-link>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      lastScrollPosition: 0,
    };
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  computed() {
    // return this.$route.path;
  },
};

</script>

<style lang="scss">
.router-link-exact-active {
  background-color: #ed1c24 !important;
  color: white !important;
  transition: all 0.25s;
}

.margin {
  margin: 0 1em 1em 1em;
  text-decoration: none;
}
</style>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  right: 5%;
  top: 0;
  z-index: 0;
}

nav {
  position: fixed;
  min-width: 50px;
  width: 5vw;
  height: 100vh;
  padding-top: 5%;
}

.logo {
  width: 50px;
  transform: rotate(-90deg);
}

ul {
  transform: rotate(90deg);
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  padding: 0;
  position: relative;
}

li {
  font-size: 1em;
  color: #575F6B;
  margin: 0 10px;
  text-decoration: none;
  white-space: nowrap;
  background-color: #D8D9DA;
  border-radius: 15px 15px 0 0;
  box-shadow: -3px -3px 20px 0px rgba(36,65,93,0.3);
  padding: 0.5em 1.2em;
  cursor: pointer;
}

li:hover {
  color: #ed1c24;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateY(-150%);
  max-height: 0;
}

.slide-enter-active, .slide-leave-active,
.navbar-enter-active, .navbar-leave-active {
  transition: all .5s;
}

.navbar-enter, .navbar-leave-to {
  transform: translateY(-100%);
}

</style>
