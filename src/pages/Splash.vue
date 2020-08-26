<template>
  <div>
    <block class='page'>
      <img src='@/assets/logo1.svg' />
      <div>
        <br>
        <countdown :time='time'>
          <template slot-scope="props">
            <h1>
            {{ props.days }} days
            </h1>
            <h3>
            {{ props.hours }} hours,
            {{ props.minutes }} minutes,
            {{ props.seconds }} seconds.
            </h3>
          </template>
        </countdown>
      </div>
    </block>
  </div>
</template>

<script>
export default {
  Name: 'About',
  data() {
    const now = new Date();
    const grad = new Date(2020, 8, 12);
    return {
      time: grad - now,
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding-top: 0;
  width: 100vw;
  max-height: 100vh;
  background-color: #ed1c24;
}

button {
  font: 'AXIS';
  font-weight: 800;
  font-size: 2em;
  padding: 0.5em 1em;
  color: #ed1c24;
  background-color: white;
  border: 3px solid #ed1c24;
  cursor: pointer;
}

button:hover {
  background-color: #ed1c24;
  border: 3px solid white;
  color: white;
}

h1, h3, img {
  margin: 3%;
  text-align: center;
}

h1, h3 {
  color: white;
  white-space: nowrap;
}

h1 {
  font-size:10em;
  line-height: 0.9em;
}

img:hover {
  transform: rotate(360deg);
  transition: 1s ease;
}
</style>
