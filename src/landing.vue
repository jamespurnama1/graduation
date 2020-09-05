<template>
  <div class='page' style='padding: 0 8vw'>
    <div class='block'>
      <h1>COVID-12</h1>
      <img id='overlay' src='@/assets/logo_red.svg'>
      <ul class="card-list grid">
        <li v-for="(user, i) in users" class="card-item" :key='`user${i}`'>
         <div class='videoMask'>
            <video
            :ref='`photo${i++}`'
            muted
            preload="auto"
            autobuffer
            class='photo'>
            <source :src="require(`@/assets/people/${user.photo}.mp4`)" >
            </video>
         </div>
        </li>
      </ul>
    </div>
    <div class='block center' style='margin-top:100px'>
      <h1 style='font-size: 8.4vw; white-space: nowrap'>What is COVID-12</h1>
      <div class='line' />
      <p id='about'>
        As the world is still struggling with the outbreak of Covid-19,
        at The One Academy, a new mind-altering, top-grade virus has just been found.
        It is believed that once released, this virus will impact the world of design greatly.
        we are the&nbsp;COVID-12.
      </p>
      <img style='width: 28vw; height: 28vw; margin: 20px' src='@/assets/logo_red.svg'>
      <div class='line' />
      <div style='margin-bottom: 50px'>
        <h2 style='font-size: 4.7vw; white-space: nowrap; text-align: center;'>
          We are the creative virus&nbsp;12.
        </h2>
        <h2 style='font-size: 4.7vw; white-space: nowrap; text-align: center;'>
          We are designed to&nbsp;spread.
        </h2>
      </div>
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
        { name: 'James Henry', photo: 'james' },
        { name: 'Chaterine A.', photo: 'huisan' },
        { name: 'Vianka', photo: 'vianka' },
      ],
      cards: [1, 2, 3, 4],
    };
  },
  methods: {
    nextBlock(e) {
      const el = this.$el.getElementsByClassName('nextBlock')[e];
      el.scrollIntoView({ behavior: 'smooth' });
    },
  },
  computed: {
  },
};

</script>

<style lang="scss" scoped>
@import './src/styles/fonts.module.scss';

.block {
  padding: 0;
}

#about {
  width: 100%;
  font-size: 100%;
}

.grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  padding: 0;
}

.videoMask {
  overflow: hidden;
}

#overlay {
  position: absolute;
  z-index: 5;
  width: 50%;
  top: 26vw;
  mix-blend-mode: multiply;
}

.videoMask {
    height: 20vw;
    width: 20vw;
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

@media screen and (max-width: 480px) {
  #overlay {
    top: 28vw;
  }
}

@media screen and (min-width: 736px) {
  #about {
    font-size: 160%;
    margin-right: auto;
    width: 50%;
  }
  #overlay {
    top: 24vw;
  }
}
</style>
