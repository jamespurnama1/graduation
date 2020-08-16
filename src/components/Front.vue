<template>
  <div class="hello">
    <h1>Virus Evolution</h1>
    <h3>Group Works</h3>
    <ul>
      <li><a href="#1" rel="noopener"><p>{{ title.one }}</p></a></li>
      <li><a href="#2" rel="noopener"><p>{{ title.two }}</p></a></li>
      <li><a href="#3" rel="noopener"><p>{{ title.three }}</p></a></li>
      <li><a href="#4" rel="noopener"><p>{{ title.four }}</p></a></li>
      <li><a href="#5" rel="noopener"><p>{{ title.five }}</p></a></li>
      <li><a href="#6" rel="noopener"><p>{{ title.six }}</p></a></li>
      <li><a href="#7" rel="noopener"><p>{{ title.seven }}</p></a></li>
      <li><a href="#8" rel="noopener"><p>{{ title.eight }}</p></a></li>
      <li><a href="#9" rel="noopener"><p>{{ title.nine }}</p></a></li>
      <li><a href="#10" rel="noopener"><p>{{ title.ten }}</p></a></li>
    </ul>
    <div class='center'>
      <p>
        Scroll down to view group projects
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Front',
  props: {
    title: Object,
  },
};
</script>

<style scoped lang="scss">
.center {
  position: relative;
  top: 35vh;
}

p {
  width: auto;
}
</style>
