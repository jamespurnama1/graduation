<template>
  <div class='page' style='padding: 0 8vw' v-images-loaded:on.progress="imageProgress">
    <div class='block'>
      <h1>CREAID</h1>
      <img id='overlay' src='@/assets/logo_red.svg'>
      <ul class="card-list grid">
        <li v-for="(user, i) in allUsers" class="card-item" :key='`user${i}`'>
         <div class='videoMask'>
            <img
            :ref='`photo${i++}`'
            muted
            preload="auto"
            autobuffer
            class='photo'
            :src="require(`@/assets/people/${user.path}/face.jpg`)">
         </div>
        </li>
      </ul>
    </div>
    <div class='block center' style='margin-top:10%'>
      <h1 style='font-size: 8.4vw; white-space: nowrap'>What is CREAID?</h1>
      <div class='line' />
      <p id='about'>
        The world is currently sick and suffering from the pandemic.
        <br>But eureka!
        The One Academy has successfully manifested a mind-altering, top grade creative cure.
         <br>It is believed that once introduced,
         this cure will impact the world of design&nbsp;greatly.
      </p>
      <img style='width: 28vw; height: 28vw; margin: 20px' src='@/assets/logo_red.svg'>
      <div class='line' />
      <div style='margin-bottom: 50px'>
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
  },
  mounted() {
    this.tl.to('#overlay', {
      scale: 1.1,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      duration: 5,
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
  margin-top: 1%;
}

#description {
  position: relative;
  left: 5%;
  width: 30%;
}

@media (max-width: 480px) {
  #overlay {
    top: 28vw;
  }
}

@media (min-width: 736px) {
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
