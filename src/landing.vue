<template>
  <div class='page' style='padding: 0 10vw'>
    <div class='block'>
      <h1>COVID-12</h1>
      <img id='overlay' src='@/assets/logo_red.svg'>
      <div>
      <ul :style="gridStyle" class="card-list">
        <li v-for="(user, i) in users" class="card-item" :key='`user${i}`'>
         <router-link :to="'outbreak/' + user.photo">
         <div class='videoMask'>
            <video
            :ref='`photo${i++}`'
            muted
            preload="auto"
            autobuffer
            class='photo'>
            <source :src="require(`@/assets/faces/${user.photo}.mp4`)" >
            </video>
         </div>
          </router-link>
        </li>
      </ul>
    </div>
    </div>
    <div class='block center'>
      <h1>What is COVID-12</h1>
      <div class='line' />
      <p style='width: 40%; margin-right: auto;'>
        As the world is still struggling with the outbreak of Covid-19,
        at The One Academy, a new mind-altering, top-grade virus has just been found.
        It is believed that once released, this virus will impact the world of design greatly.
      </p>
      <img style='width: 28vw; height: 28vw; margin: 20px' src='@/assets/logo_red.svg'>
      <div class='line' />
      <h3>We are the Covid-12,</h3>
      <h3 style='margin-bottom: 5%'>the Creative Virus 12.</h3>
      <p id='footer'>copyright 2020 thecovid12</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JamesHenry',
  components: {
  },
  data() {
    return {
      overlayVideo: false,
      users: [
        { name: 'Phuong Anh', photo: 'anh' },
        { name: 'Wei Hang', photo: 'weihang' },
        { name: 'Hui San', photo: 'huisan' },
        { name: 'Wai Yee', photo: 'waiyee' },
        { name: 'Kar Mun', photo: 'karmun' },
        { name: 'Sze Chien', photo: 'szechien' },
        { name: 'Samantha', photo: 'sam' },
        { name: 'Zhi Jian', photo: 'zhijian' },
        { name: 'Aurelius Kevin', photo: 'aurel' },
        { name: 'Wei Hang', photo: 'weihang' },
        { name: 'Hui San', photo: 'huisan' },
        { name: 'Wai Yee', photo: 'waiyee' },
      ],
      cards: [1, 2, 3, 4],
      numberOfColumns: 4,
    };
  },
  methods: {
    nextBlock(e) {
      const el = this.$el.getElementsByClassName('nextBlock')[e];
      el.scrollIntoView({ behavior: 'smooth' });
    },
  },
  computed: {
    gridStyle() {
      return {
        gridTemplateColumns: `repeat(${this.numberOfColumns}, minmax(100px, 1fr))`,
      };
    },
  },
};

</script>

<style lang="scss" scoped>
@import './src/styles/fonts.module.scss';

#footer {
  position: absolute;
  font-size: 0.7em;
  bottom: 0;
  left: 0;
  margin: 20px;
}

.videoMask {
  height: 35vh;
  width: 35vh;
}

h3 {
  // font-size: 5em;
}

p {
  // font-size: 2em;
  font-family: 'AXIS';
}

#overlay {
  position: absolute;
  z-index: 5;
  width: 50%;
  top: 13%;
  mix-blend-mode: multiply;
}

#close {
  position: relative;
  right: 5%;
}

.card-list {
  grid-gap: 0;
}

#description {
  position: relative;
  left: 5%;
  width: 30%;
}
</style>
