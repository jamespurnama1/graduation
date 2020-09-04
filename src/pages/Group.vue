<template>
  <div class='block page' style='padding: 0'>
    <div class='title'>
      <img class='smallLogo' src='@/assets/logo_red.svg'>
      <div id='titleLogo'>
      <h2>The</h2>
      <h2>Mutation</h2>
      </div>
      <div class='verticalLine' style='height:106%' />
      <div style='width: 20%; padding-left: 7%' class='center'>
      <p>
        Occurs when the viruses exchange creative info, idea strains
        and efficiency.
      </p>
      </div>
    </div>
    <!-- <div style='border-color: black;
    margin: 0; margin-bottom: 0.5%;
    transform: translateY(316%)'
    class='line' /> -->
    <div
    class='work'
    :id='`project${i}`'
    v-for='(projects, i) in projects'
    :key='i'>
      <div
      style='display: flex'
      :id='`projectBar${i}`'
      class='projectBar black clickable'
      @click='expand(i)'>
      <h3 style='padding-left: 10%'>{{ projects.title }}</h3>
      <feather style='margin-left: auto' type='plus' stroke='red' stroke-width='3' size='3vw'/>
      </div>
      <work
      v-show='`projects.expand${i}`'
      class='block groupWork'
      :projects='projects'
      :img='i'
      />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import work from '@/components/work.vue';
import groupProject from '@/components/groupProject';

export default {
  name: 'Group',
  components: {
    work,
  },
  mixins: [groupProject],
  data() {
    return {
      gsap1: new gsap.timeline(), // eslint-disable-line
    };
  },
  methods: {
    expand(e) {
      const expanded = document.querySelector('.expanded');
      const relative = document.querySelector('.relative');
      const bar = document.getElementById(`project${e}`);
      const groupWork = document.querySelectorAll('.groupWork');
      const projectBar = document.getElementById(`projectBar${e}`);
      // const scroll = bar.offsetTop;
      if (bar.classList.contains('expanded')) {
        bar.classList.remove('expanded');
        projectBar.classList.add('black');
        groupWork[e].classList.remove('relative');
      } else {
        bar.classList.add('expanded');
        projectBar.classList.remove('black');
        setTimeout(() => {
          groupWork[e].classList.add('relative');
        }, 500);
      }
      if (expanded != null) {
        expanded.classList.remove('expanded');
        relative.classList.remove('relative');
      }
      // const offset = topBar + (0.23 * window.innerHeight);
      setTimeout(() => {
        // projectBar.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        // const topBar = bar.getBoundingClientRect().top;
        // window.scrollTo({ behavior: 'smooth', top: topBar });
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.relative {
  position: relative !important;
}

.groupWork {
  position: absolute;
  padding: 0 10%;
}

#projectBar0 {
  border-top-style: solid;
}

.expanded {
  min-height: 200vw !important;
  visibility: initial !important;
}

.work {
  width: 100%;
  min-height: 0vh;
  max-height: 3%;
  transition: all .5s ease-in-out;
  overflow: hidden;
  position: relative;
  border-width: 3px;
  border-bottom-style: solid;
}

.projectBar {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 10px 0;
}

.black:hover {
  background-color: black;
}

.black:hover h3 {
  color: white;
}

#titleLogo {
  padding-right: 7%;
}

h3, p {
  color: black;
  margin: 0;
}

.smallLogo {
  width: 10%;
  margin: 0 30px;
}

h1, h2 {
  margin: 0;
}

h3 {
  // font-size: 3.5em;
}

.smallLogo {
  height: 12vw;
  width: 12vw;
}

@media screen and (min-width: 480px){
  .expanded {
    // min-height: 1700px !important;
  }
}

@media screen and (min-width: 736px){
  .expanded {
    // min-height: 2000px !important;
  }
}

@media screen and (min-width: 980px){
  .expanded {
    // min-height: 2470px !important;
  }
}

@media screen and (min-width: 1280px){
  .expanded {
    // min-height: 3070px !important;
  }
}

@media screen and (min-width: 1344px){
  .expanded {
    // min-height: 3500px !important;
  }
}
</style>
