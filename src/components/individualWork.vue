<template>
  <div class='block'>
    <div class='img'>
      <h3>Stationery Design</h3>
      <img src='@/assets/sample.jpeg'>
    </div>
    <h3>Environment</h3>
    <div class='grid'>
      <img src='@/assets/sample.jpeg'>
      <img src='@/assets/sample.jpeg'>
      <img src='@/assets/sample.jpeg'>
      <img src='@/assets/sample.jpeg'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work',
  props: {
    members: String,
  },
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

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
  text-align: center;
  align-self: center;
}
</style>
