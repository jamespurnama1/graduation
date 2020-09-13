<template>
  <div class='block'>
    <div class='img'>
      <img
      @click='overlay(`@/assets/group/project${img}/top.jpg`)'
      :src="require(`@/assets/group/project${img}/top.jpg`)">
    </div>
    <h4 style='color: black'>
      Group Members:
      {{ projects.members[0] }}
      <span v-if='projects.members[1]'>| {{ projects.members[1] }} </span>
      <span v-if='projects.members[2]'>| {{ projects.members[2] }}</span>
    </h4>
    <div class='line' />
    <div style='display: flex; flex-wrap: wrap; justify-content: space-between'>
    <div v-if='projects.brief' class='BPII'>
      <h3>Brief</h3>
      <p v-html='projects.brief'>
      </p>
    </div>
    <div v-if='projects.problem' class='BPII'>
      <h3>Problem</h3>
      <p v-html='projects.problem'>
      </p>
    </div>
    <div v-if='projects.insight' class='BPII'>
      <h3>Insight</h3>
      <p v-html='projects.insight'>
      </p>
    </div>
    <div v-if='projects.idea' class='BPII' style='margin-right: 0'>
      <h3>Idea</h3>
      <p v-html='projects.idea'>
      </p>
    </div>
    </div>
    <div v-if='projects.video'>
    <h3 style='text-align: center'>Case Study Video</h3>
    <div class='img' style='margin: 10px auto'>
      <iframe
      :src="`${projects.video}`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
      </iframe>
    </div>
    </div>
    <h3 style='text-align: center'>{{ projects.heading }}</h3>
    <carousel
    class='vw39'
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
        style='display: flex; justify-content: center; align-items: center; height: 39.5vw'>
          <component
          :is='item.tag'
          :controls="item.src === 'img0.mp4'"
          :ref='`vidCarousel${index}`'
          :poster="require(`@/assets/group/project${img}/${item.src}`)"
          :src="require(`@/assets/group/project${img}/${item.src}`)" />
        </slide>
      </carousel>
    <p
    v-html='`${projects.carousel[currentIndex].caption}`'
    style='margin-top: 25px; text-align: center;'>
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
  methods: {
    overlay(n) {
      console.log(n);
      this.$store.commit('overlay', n);
      this.$store.commit('openOverlay');
    },
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
.vw39 > .VueCarousel-wrapper > .VueCarousel-inner {
  height: 39vw;
}

.BPII {
  max-width: 350px;
  margin-right: 10px
}

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
  overflow: hidden;
  // margin: 50px auto;
  // margin-bottom: 20px;
}

img, video {
  width: 100%;
  height: auto;
}

iframe {
  width: 100%;
  height: 39vw;
}

h3 {
  text-align: left;
}

p {
  margin-top: 0;
}

@media (max-width: 1530px) {
  .BPII {
    max-width: 33vw;
    min-width: 250px;
  }
};
@media (max-width: 728px) {
  .BPII {
    max-width: 70vw;
    min-width: 250px;
  }
};
</style>
