<template>
  <div class='block'>
    <h3 style='margin: 5% 0 1% 0'>{{ works.sections.one.name }}</h3>
    <carousel
      :per-page='1'
      :loop='true'
      :navigation-enabled='true'
      :navigation-next-label='`>`'
      :navigation-prev-label='`<`'
      :pagination-active-color='`#eb2027`'
      :autoplay='true'
      :mouse-drag='true'>
      <slide
        v-for='(img) in works.sections.one.img'
        :key='img'
        style='display: flex; justify-content: center; align-items: center; height: 47vw'>
        <img :src="require(`@/assets/people/${path}/work${works.id}/one/${img}`)" />
      </slide>
    </carousel>

    <h3 style='margin: 5% 0 1% 0'>{{ works.sections.two.name }}</h3>
    <div class='grid'>
      <div v-for='(secondImg, i) in works.sections.two.img'
      :key='i'
      :id='`grid-item-${i}`'>
      <img
      :src="require(`@/assets/people/${path}/work${works.id}/two/${secondImg}`)">
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
// import safari from '@/components/safari';

export default {
  name: 'Work',
  props: {
    works: Object,
    path: String,
  },
  // mixins: [safari],
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
    };
  },
  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.VueCarousel-navigation-button').forEach((e) => {
        e.style.color = '#eb2027';
      });
    });
  },
};
</script>

<style scoped lang='scss'>
@import './src/styles/fonts.module.scss';

#grid-item-0 {
  grid-area: top;
  height: auto;
  overflow: hidden;
}

#grid-item-1 {
  grid-area: leftone;
  height: auto;
  overflow: hidden;
}

#grid-item-2 {
  grid-area: rightone;
  height: auto;
  overflow: hidden;
}

#grid-item-3 {
  grid-area: lefttwo;
  height: auto;
  overflow: hidden;
}

#grid-item-4 {
  grid-area: righttwo;
  height: auto;
  overflow: hidden;
}

.grid {
  display: grid;
  grid-gap: 10px;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: minmax(0, 47vw) minmax(0, 31.5vw) minmax(0, 31.5vw);
  grid-template-areas:
    "top top"
    "leftone rightone"
    "lefttwo righttwo";
}

.block {
  flex-direction: column;
}

img, video {
  width: 100%;
  min-height: 100%;
  max-height: 100%;
  height: auto;
  object-fit: cover;
}

h3 {
  text-align: center;
  align-self: center;
  font-size: calc(5px + 2vw);
}
</style>
