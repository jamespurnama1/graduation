<template>
  <div class="navbar">
    <transition name="navbar">
      <nav>
        <ul>
          <router-link tag="li" to="/" class="margin">
            <h4>About Us</h4>
          </router-link>
          <router-link tag="li" to="/aid" class="margin">
            <h4 class="unexact">The Aid</h4>
          </router-link>
          <router-link tag="li" to="/antidote" class="margin">
            <h4 class="unexact">The Antidote</h4>
          </router-link>
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
};
</script>

<style lang="scss" scoped>
@import './src/styles/fonts.module.scss';

h3 {
  color: black;
}

.router-link-exact-active h4 {
  color: $primary !important;
  transition: all 0.25s;
}

.router-link-active .unexact {
  color: $primary !important;
  transition: all 0.25s;
}

.margin {
  margin: 0 1em 0 1em;
  text-decoration: none;
}

.navbar {
  position: absolute;
  top: 0;
  z-index: 0;
}

nav {
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 50px;
  width: 100vw;
  height: 7vh;
  background-color: white;
  border-bottom-style: solid;
  border-width: 3px;
}

.logo {
  width: 50px;
}

ul {
  display: flex;
  // justify-content: flex-end;
  flex-direction: row;
  // align-items: center;
  list-style-type: none;
  padding: 0 30px;
  position: relative;
  margin: 0;
}

li {
  font-family: 'AXIS';
  // font-size: 1.3em;
  color: black;
  // margin: 0 50px;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
}

li:hover {
  color: $primary;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-150%);
  max-height: 0;
}

.slide-enter-active,
.slide-leave-active,
.navbar-enter-active,
.navbar-leave-active {
  transition: all 0.5s;
}

.navbar-enter,
.navbar-leave-to {
  transform: translateY(-100%);
}

@media (max-width: 480px) {
  nav {
    justify-content: center;
  }
  ul {
    padding: 0;
  }
}
</style>
