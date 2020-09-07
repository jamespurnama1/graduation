<template>
  <div class='block'>
    <div class='img'>
      <img :src="require(`@/assets/group/project${img}/top.jpg`)">
    </div>
    <h4 style='color: black'>
      Group Members:
      {{ projects.members[0] }}
      | {{ projects.members[1] }}
      | {{ projects.members[2] }}
    </h4>
    <div class='line' />
    <div style='display: flex; flex-wrap: wrap; justify-content: space-between'>
    <div v-if='projects.brief' style='max-width: 400px; margin-right: 10px'>
      <h3>Brief</h3>
      <p>
        {{ projects.brief }}
      </p>
    </div>
    <div v-if='projects.problem' style='max-width: 400px; margin-right: 10px'>
      <h3>Problem</h3>
      <p>
        {{ projects.problem }}
      </p>
    </div>
    <div v-if='projects.insight' style='max-width: 400px; margin-right: 10px'>
      <h3>Insight</h3>
      <p>
        {{ projects.insight }}
      </p>
    </div>
    <div v-if='projects.idea' style='max-width: 400px'>
      <h3>Idea</h3>
      <p>
        {{ projects.idea }}
      </p>
    </div>
    </div>
    <div v-if='projects.video'>
    <h3>Case Study Video</h3>
    <div class='img' style='margin-bottom: 10px'>
      <iframe
      :src="`${projects.video}`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
      </iframe>
    </div>
    </div>
    <h3>{{ projects.heading }}</h3>
    <carousel
      style='margin-top: 50px'
      :per-page='1'
      :loop='true'
      :navigation-enabled='true'
      :navigation-next-label='`>`'
      :navigation-prev-label='`<`'
      :pagination-active-color='`#eb2027`'
      :mouse-drag='true'
      :centerMode='true'
      v-if='projects.carousel'
      v-model="currentIndex">
        <slide
        v-for='(item, index) in projects.carousel'
        :key='index'
        :data-index='index'
        style='display: flex; justify-content: center; align-items: center;'>
          <video
          :controls="item.src === 'img0.mp4'"
          :ref='`vidCarousel${index}`'
          :poster="require(`@/assets/group/project${img}/${item.src}`)"
          :src="require(`@/assets/group/project${img}/${item.src}`)" />
        </slide>
      </carousel>
    <p style='margin-top: 0;'>
      {{ projects.carousel[currentIndex].caption }}
    </p>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Work',
  props: {
    projects: Object,
    img: Number,
  },
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      i: 0,
      currentIndex: 0,
    };
  },
};
</script>

<style scoped lang="scss">
.feather--play-circle {
  position: absolute;
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 10vw;
}

.block {
  flex-direction: column;
}

.img {
  width: 100%;
  height: 45vw;
  overflow: hidden;
  margin: 50px auto;
}

img, video, iframe {
  width: 100%;
  height: auto;
}

iframe {
  height: 100%;
}

h3 {
  text-align: left;
  align-self: flex-start;
}
</style>
