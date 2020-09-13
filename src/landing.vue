<template>
  <div class='page' style='padding: 0 8vw' v-images-loaded:on.progress="imageProgress">
    <h1>CREAID</h1>
    <div class='block' style='position: relative'>
      <img id='overlay' src='@/assets/logo_red.svg'>
      <ul class="card-list grid">
        <li v-for="(user, i) in allUsers" class="card-item" :key='`user${i}`'>
         <div
         class='videoMask'>
            <img
            :ref='`photo${i++}`'
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

      <div class='line' />
      <p>Board of Advisors</p>
      <div class='board'>
      <div>
        <img
        class='photo'
        style='height: 35vw'
        src='@/assets/debbie.jpg'>
        <p style='margin:0'>Debbie Chin</p>
      </div>
      <div>
        <img
        class='photo'
        style='height: 35vw'
        src='@/assets/chan.jpg'>
        <p style='margin:0'>Chan Kon Loong</p>
      </div>
      <div>
        <img
        class='photo'
        style='height: 35vw'
        src='@/assets/deanie.jpg'>
        <p style='margin:0'>Deanie Cham</p>
      </div>
      </div>

      <div class='line' />
      <p>Posters</p>
      <carousel
      :per-page='1'
      :loop='true'
      :navigation-enabled='true'
      :navigation-next-label='`>`'
      :navigation-prev-label='`<`'
      :pagination-active-color='`#FFFFFF`'
      :pagination-color='`#F89996`'
      :autoplay='true'
      :mouse-drag='true'>
      <slide
        v-for='(img) in poster'
        :key='img'
        style='display: flex; justify-content: center; align-items: center; height: 47vw'>
        <img class='slide' :src="require(`@/assets/posters/${img}.jpg`)" />
      </slide>
    </carousel>

      <!-- <div class='line' />
      <div class='center' style='flex-direction: column'>
      <p>Download Our Graduation Showcase Book</p>
      <a href='/book.pdf' download>
        <button><p>Download Book</p></button>
      </a>
      </div> -->
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import imagesLoaded from 'vue-images-loaded';
import { Carousel, Slide } from 'vue-carousel';
import users from '@/components/users';
import loading from '@/components/loading';

export default {
  name: 'JamesHenry',
  mixins: [users, loading],
  data() {
    return {
      tl: gsap.timeline(),
      renderOverlay: false,
      poster: [0, 1, 2, 3],
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
  components: {
    Carousel,
    Slide,
  },
  mounted() {
    this.tl.set('#overlay', {
      xPercent: -50,
      yPercent: -50,
      left: '50%',
      top: '50%',
    })
      .to('#overlay', {
        scale: 1.1,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        duration: 5,
      });
    this.$nextTick(() => {
      document.querySelectorAll('.VueCarousel-navigation-button').forEach((e) => {
        e.style.color = 'white';
      });
      window.dispatchEvent(new Event('resize'));
    });
  },
};

</script>

<style lang="scss" scoped>
@import './src/styles/fonts.module.scss';

button p {
  color: white;
  cursor: pointer;
}

button:hover p {
  color: $primary;
}

.board {
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 1fr;
  grid-template-columns: auto auto auto;
}

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

.slide {
  width: 100%;
  height: 47vw;
  object-fit: cover;
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
