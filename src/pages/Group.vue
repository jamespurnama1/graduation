<template>
  <div class='block page'>
    <div class='title'>
      <img class='smallLogo' src='@/assets/logo_red.svg'>
      <div id='titleLogo'>
      <h2>The</h2>
      <h2>Mutation</h2>
      </div>
      <div class='verticalLine' />
      <div style='width: 20%; padding-left: 7%' class='center'>
      <p>
        Occurs when the viruses exchange creative info, idea strains
        and efficiency.
      </p>
      </div>
    </div>
    <div style='border-color: black; margin: 0' class='line' />
    <div @click='expand(i)'
    v-for='(project, i) in projects'
    class='projectBar'
    :key='`project${i}`'>
      <h3>{{ project.title }}</h3>
      <feather style='margin-left: auto' type='plus' stroke='red' stroke-width='3' />
      <div v-show='`projects.expand${i}`' class='block'>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'Principles',
  components: {
  },
  data() {
    return {
      gsap1: new gsap.timeline(), // eslint-disable-line
      projects: [
        { title: 'Concert in The Clouds', members: 'Vianka, Aurelius Kevin, Chaterine', expand: false },
        { title: "The Tigers That Won't return", members: 'Vianka, Aurelius Kevin, Chaterine', expand: false },
        { title: 'Untold Fact', members: 'Vianka, Aurelius Kevin, Chaterine', expand: false },
        { title: 'Tree of Ash', members: 'Vianka, Aurelius Kevin, Chaterine', expand: false },
        { title: 'Hard Rock', members: 'Vianka, Aurelius Kevin, Chaterine', expand: false },
        { title: 'Mama Miss U', members: 'Vianka, Aurelius Kevin, Chaterine', expand: false },
        { title: 'Eco Pack', members: 'Vianka, Aurelius Kevin, Chaterine', expand: false },
      ],
      expand1: false,
    };
  },
  methods: {
    expand() {
      const bar = document.querySelectorAll('projectBar');
      console.log(bar);
      gsap.to(bar, {
        maxHeight: '100vh',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.projectBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-height: 100px;
    border: 3px solid black;
    border-top-style: none;
    padding-left: 1%;
}

.projectBar:hover {
  background-color: black;
}

.projectBar:hover h3 {
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

</style>
