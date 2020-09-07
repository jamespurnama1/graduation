<template>
  <div>
    <block class='page'>
      <img src='@/assets/logo.svg' />
      <div>
        <br>
        <h1>OH<br>NO!</h1>
        <h3>
          You are infected with COVID-12.
        </h3>
        <div class='center'>
        <router-link tag='button' to='/home'>WHAT?</router-link>
        </div>
      </div>
    </block>
  </div>
</template>

<script>
export default {
  Name: 'About',
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

h3, img {
  margin: 1%;
  text-align: center;
}

h1, h3 {
  color: white;
}

h1 {
  font-size:20em;
  line-height: 0.9em;
}

img:hover {
  transform: rotate(360deg);
  transition: 1s ease;
}
</style>
