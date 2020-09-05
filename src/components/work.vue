<template>
  <div class='block'>
    <div class='img'>
      <img :src="require(`@/assets/group/project${img}/img0.jpg`)">
    </div>
    <h4 style='color: black'>
      Group Members:
      {{ projects.members[0] }}
      | {{ projects.members[1] }}
      | {{ projects.members[2] }}
    </h4>
    <div class='line' />
    <div style='display: flex; flex-wrap: wrap; justify-content: space-between'>
    <div style='max-width: 400px; margin-right: 10px'>
      <h3>Problem</h3>
      <p>{{ projects.problem }}
      </p>
    </div>
    <div style='max-width: 400px; margin-right: 10px'>
      <h3>Insight</h3>
      <p>{{ projects.insight }}
      </p>
    </div>
    <div style='max-width: 400px'>
      <h3>Idea</h3>
      <p>{{ projects.idea }}
      </p>
    </div>
    </div>
    <h3>Case Study Video</h3>
    <div class='img' style='margin-bottom: 10px'>
      <img :src="require(`@/assets/group/project${img}/img1.jpg`)">
    </div>
    <h3>How it Works</h3>
    <carousel
      :per-page='1'
      :loop='true'
      :navigation-enabled='true'
      :navigation-next-label='`>`'
      :navigation-prev-label='`<`'
      :pagination-active-color='`#eb2027`'
      :mouse-drag='true'
      v-model="currentIndex">
        <slide
        v-for='(item, index) in projects.carousel'
        :key='index'
        :data-index='index'>
          <img :src="require(`@/assets/group/project${img}/img${index}.jpg`)">
        </slide>
      </carousel>
    <p>
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
  methods: {
    change(dataset) {
      console.log(dataset);
      // this.i = dataset.index;
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
.block {
  flex-direction: column;
  // align-items: center;
}

.img {
  width: 100%;
  height: 45vw;
  overflow: hidden;
  margin: 0 auto;
}

img {
  width: 100%;
}

h3 {
  text-align: left;
  align-self: flex-start;
}
</style>
