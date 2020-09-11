<template>
  <div class='block page'>
    <div class='title'>
      <img class='smallLogo' src='@/assets/logo_red.svg'>
      <div id='titleLogo'>
      <h2>The</h2>
      <h2>Mutation</h2>
      </div>
      <div class='center mutation'>
      <p>
        Occurs when the viruses exchange creative info, idea strains
        and efficiency.
        <br>
        <br>
        [Click to view our group works]
      </p>
      </div>
    </div>
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
      <feather style='margin-left: auto' type='plus' stroke='red' stroke-width='3' />
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
      if (bar.classList.contains('expanded')) {
        bar.classList.remove('expanded');
        projectBar.classList.add('black');
        groupWork[e].classList.remove('relative');
        // console.log('closing', bar);
        // console.log(groupWork[e]);
      } else {
        bar.classList.add('expanded');
        projectBar.classList.remove('black');
        setTimeout(() => {
          groupWork[e].classList.add('relative');
        }, 500);
        // console.log('opening', bar);
        // console.log(groupWork[e]);
      }
      if (expanded != null) {
        expanded.classList.remove('expanded');
        relative.classList.remove('relative');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
    padding: 0 2%;
    min-height: 170px;
    height: 20vw;
    width: 100vw;
    flex-wrap: nowrap;
}

.mutation {
  min-height: 80px;
  width: 40vw;
  height: 100%;
  border-left-style: solid;
  border-width: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 7%;
}

.relative {
  position: relative !important;
}

.groupWork {
  position: absolute;
  padding: 0 15%;
}

#projectBar0 {
  border-top-style: solid;
  border-width: 3px;
}

.expanded {
  min-height: 100vw !important;
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
  padding: 3% 3% 3% 0;
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

.smallLogo {
  height: 12vw;
  width: 12vw;
}

.feather {
  margin: auto 10px auto 0;
  min-width: 5px;
  width: 35px;
}

.page {
  padding: 0;
}

@media screen and (max-width: 980px) {
  .mutation {
    width: 100vw;
    height: 10vw;
    border-top-style: solid;
    border-left-style: none;
  }
  .title {
    flex-wrap: wrap;
    height: initial;
  }
}
</style>