<template>
  <div class='block'>
      <h3 style='margin-top: 5%'>{{ works.sections.one.name }}</h3>
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
        :key='img'>
          <video muted loop autoplay preload="true"
          :poster="require(`@/assets/people/${path}/work${works.id}/one/${img}`)"
          :src="require(`@/assets/people/${path}/work${works.id}/one/${img}`)" />
        </slide>
      </carousel>
    <h3 style='margin-top: 5%'>{{ works.sections.two.name }}</h3>
    <!-- <div class='grid'>
      <img v-for='(secondImg) in works.sections.two.img'
      :key='secondImg'
      class='gridImg'
      :src="require(`@/assets/people/${path}/work${works.id}/two/${secondImg}`)">
    </div> -->
    <stack
    :gutter-width="8"
    :gutter-height="8"
    :column-min-width="500"
    :monitor-images-loaded='true'>
      <stack-item v-for='(medias) in works.sections.two.img'
      :key='medias'
      class='gridImg'>
        <img
        :src="require(`@/assets/people/${path}/work${works.id}/two/${medias}`)">
      </stack-item>
    </stack>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import { Stack, StackItem } from 'vue-stack-grid';

export default {
  name: 'Work',
  props: {
    works: Object,
    path: String,
  },
  components: {
    Carousel,
    Slide,
    Stack,
    StackItem,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped lang='scss'>
@import './src/styles/fonts.module.scss';

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 40vw);
  grid-gap: 10px;
}

.block {
  flex-direction: column;
  // align-items: center;
}

img, video {
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  // height: 45vw;
}

.gridImg {
  transition: transform 0.3 ease-in-out;
}

h3 {
  text-align: center;
  align-self: center;
}
</style>
