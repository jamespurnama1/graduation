<template>
  <div>
    <div class='block page'>
      <img src='@/assets/logo.svg' />
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
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  Name: 'About',
  data() {
    const now = new Date();
    const grad = new Date('September 12, 2020 18:30:00 GMT+0800');
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
  margin: 5%;
  text-align: center;
}

img {
  width: 30%;
  margin-left: 0;
}

h1, h3 {
  color: white;
  white-space: nowrap;
}

h1 {
  font-size:10em;
  line-height: 0.9em;
}

html, body {
  background-color: #ed1c24;
  overflow: hidden;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

html::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 480px) {
  h1{
    font-size: 4em;
  }
  h3{
    font-size: 1em;
  }
}
</style>
