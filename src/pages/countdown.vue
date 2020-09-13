<template>
  <div>
    <div class='block page'>
      <img src='@/assets/logo.svg' />
      <div style='margin: 0 100px'>
        <br>
        <countdown :time='time'>
          <template slot-scope="props">
            <h1 style='display: flex; justify-content: center'>
            {{ props.hours }} hours
            </h1>
            <div style='display: flex; justify-content: center'>
            <!-- <h3>
            {{ props.hours }}&nbsp;hours
            </h3> -->
            <h3>
            {{ props.minutes }}&nbsp;minutes
            </h3>
            <h3>
            {{ props.seconds }}&nbsp;seconds
            </h3>
            </div>
          </template>
        </countdown>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  Name: 'About',
  data() {
    const now = new Date();
    const grad = new Date('September 14, 2020 10:00:00 GMT+0800');
    return {
      time: grad - now,
    };
  },
  mounted() {
    gsap.to('img', {
      rotate: '360deg',
      repeat: -1,
      duration: 10,
      ease: 'none',
    });
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding-top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ed1c24;
  margin: 0;
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
  margin: 0;
  color: white;
}

h3 {
  margin: 0 2%;
  text-align: left;
  white-space: nowrap;
}

img {
  width: 30%;
  min-width: 200px;
  margin-left: 0;
}

h1 {
  color: white;
  white-space: nowrap;
}

h1 {
  // font-size:10em;
  line-height: 0.9em;
}

html, body {
  background-color: #ed1c24;
  // overflow: hidden;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

html::-webkit-scrollbar {
  display: none;
}
</style>
