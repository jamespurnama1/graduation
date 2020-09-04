<template>
  <div class='block'>
    <h3 style='margin-top: 5%'>{{ works.sections.two.name }}</h3>
    <div class='grid'>
      <img v-for='(secondImg, index) in works.sections.two.img'
      :key='index'
      :id='`grid-item-${index}`'
      :src="require(`@/assets/people/${path}/work${works.id}/two/${secondImg}`)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work',
  props: {
    works: Object,
    path: String,
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

#grid-item-1 {
  grid-area: top;
}

#grid-item-2 {
  grid-area: leftone;
}

#grid-item-3 {
  grid-area: rightone;
}

#grid-item-4 {
  grid-area: lefttwo;
}

#grid-item-5 {
  grid-area: righttwo;
}

.grid {
  display: grid;
  grid-gap: 10px;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  grid-template-rows: minmax(200px, 54vw) minmax(200px, 34.5vw) minmax(200px, 34.5vw);
  grid-template-areas:
    "top top"
    "leftone rightone"
    "lefttwo righttwo";
}

.block {
  flex-direction: column;
  // align-items: center;
}

img, video {
  width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  // height: 45vw;
}

h3 {
  text-align: center;
  align-self: center;
}
</style>
