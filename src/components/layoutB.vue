<template>
  <div class='block'>
    <h3 style='margin: 5% 0 1% 0'>{{ works.sections.two.name }}</h3>
    <div class='grid'>
      <img v-for='(secondImg, i) in works.sections.two.img'
      :key='i'
      :id='`grid-item-${i}`'
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

#grid-item-0 {
  grid-area: top;
}

#grid-item-1 {
  grid-area: left;
}

#grid-item-2 {
  grid-area: rightone;
}

#grid-item-3 {
  grid-area: righttwo;
}

.grid {
  display: grid;
  grid-gap: 10px;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: minmax(0, 54vw) minmax(0, 34.5vw) minmax(0, 34.5vw);
  grid-template-areas:
    "top top"
    "left rightone"
    "left righttwo";
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
  font-size: calc(5px + 2vw);
}
</style>
