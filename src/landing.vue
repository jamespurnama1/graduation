<template>
  <div class='page' style='padding: 0 8vw' v-images-loaded:on.progress="imageProgress">
    <h1>CREAID</h1>
    <div class='block' style='position: relative'>
      <img v-if='renderOverlay' id='overlay' src='@/assets/logo_red.svg'>
      <ul class="card-list grid">
        <li v-for="(user, i) in allUsers" class="card-item" :key='`user${i}`'>
         <div
         class='videoMask'>
            <img
            :ref='`photo${i++}`'
            muted
            preload="auto"
            autobuffer
            class='photo'
            :src="`/faces/${user.path}.jpg`">
         </div>
        </li>
      </ul>
    </div>
    <div class='block center' style='margin-top:10%'>
      <h1 style='font-size: 8.4vw; white-space: nowrap'>What is CREAID?</h1>
      <div class='line' />
      <p id='about'>
        The world is currently sick and suffering from<span v-html='` the&nbsp;pandemic`'></span>.
        But eureka!
        The One Academy has successfully manifested a mind-altering, top grade creative cure.
        It is believed that once introduced,
         this cure will impact the world of <span v-html='` design&nbsp;greatly`'></span>.
      </p>
      <img style='width: 28vw; height: 28vw; margin: 20px' src='@/assets/logo_red.svg'>
      <div class='line' />
      <div>
        <h2 style='font-size: 6.5vw; white-space: nowrap; text-align: center;'>
          We are the Cre-Aid,
        </h2>
        <h2 style='font-size: 6.7vw; white-space: nowrap; text-align: center;'>
          The creative cure.
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import imagesLoaded from 'vue-images-loaded';
import users from '@/components/users';
import loading from '@/components/loading';

export default {
  name: 'JamesHenry',
  mixins: [users, loading],
  data() {
    return {
      tl: gsap.timeline(),
      renderOverlay: false,
    };
  },
  directives: {
    imagesLoaded,
  },
  methods: {
    nextBlock(e) {
      const el = this.$el.getElementsByClassName('nextBlock')[e];
      el.scrollIntoView({ behavior: 'smooth' });
    },
    gsap() {
      this.tl.to('#overlay', {
        scale: 1.1,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        duration: 5,
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.renderOverlay = true;
      setTimeout(() => {
        this.gsap();
      }, 500);
    });
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
  margin-left: 3%;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  margin-top: 1%;
}

#description {
  position: relative;
  left: 5%;
  width: 30%;
}

@media (min-width: 736px) {
  #about {
    font-size: 160%;
    margin-right: auto;
    width: 50%;
  }
}
</style>
