<template>
  <div class='block page' style='padding: 0'>
    <div class='title'>
      <img class='smallLogo' src='@/assets/logo_red.svg'>
      <div id='titleLogo'>
      <h2>The</h2>
      <h2>Mutation</h2>
      </div>
      <div class='verticalLine' style='height:110%' />
      <div style='width: 20%; padding-left: 7%' class='center'>
      <p>
        Occurs when the viruses exchange creative info, idea strains
        and efficiency.
      </p>
      </div>
    </div>
    <div style='border-color: black; margin: 0; transform: translateY(316%)' class='line' />
    <div @click='expand(i)'
    v-for='(project, i) in projects'
    class='projectBar black clickable'
    :key='i'
    :id='`projectBar${i}`'>
    <div style='display: flex'>
      <h3>{{ project.title }}</h3>
      <feather style='margin-left: auto' type='plus' stroke='red' stroke-width='3' />
    </div>
      <work
      v-show='`projects.expand${i}`'
      class='block work'
      :id='`project${i}`' />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import work from '@/components/work.vue';

export default {
  name: 'Principles',
  components: {
    work,
  },
  data() {
    return {
      gsap1: new gsap.timeline(), // eslint-disable-line
      projects: [
        { title: 'Concert in The Clouds', members: 'Vianka, Aurelius Kevin, Chaterine' },
        { title: "The Tigers That Won't return", members: 'Vianka, Aurelius Kevin, Chaterine' },
        { title: 'Untold Fact', members: 'Vianka, Aurelius Kevin, Chaterine' },
        { title: 'Tree of Ash', members: 'Vianka, Aurelius Kevin, Chaterine' },
        { title: 'Hard Rock', members: 'Vianka, Aurelius Kevin, Chaterine' },
        { title: 'Mama Miss U', members: 'Vianka, Aurelius Kevin, Chaterine' },
        { title: 'Eco Pack', members: 'Vianka, Aurelius Kevin, Chaterine' },
      ],
    };
  },
  methods: {
    expand(e) {
      const bar = document.getElementById(`project${e}`);
      const projectBar = document.getElementById(`projectBar${e}`);
      if (bar.classList.contains('expanded')) {
        bar.classList.remove('expanded');
        projectBar.classList.add('black');
      } else {
        bar.classList.add('expanded');
        projectBar.classList.remove('black');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.expanded {
  min-height: 100vh !important;
  max-height: 350vh !important;
  visibility: initial !important;
  padding-top: 5%;
}

.work {
  width: 100%;
  min-height: 0vh;
  max-height: 0vh;
  transition: all .5s ease-in-out;
  visibility: hidden;
  overflow: hidden;
}

.projectBar {
    display: flex;
    flex-direction: column;
    width: 100vw;
    // max-height: 7vh;
    border-width: 3px;
    border-bottom-style: solid;
    padding: 30px 10% 0 10%;
    overflow: hidden;
}

.black:hover {
  background-color: black;
}

.black:hover h3 {
  color: white;
}

#titleLogo {
  padding-right: 7%;
  // border-right-style: solid;
  // border-width: 3px;
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
  font-size: 3.5em;
}

.smallLogo {
  height: 12vw;
  width: 12vw;
}
</style>
