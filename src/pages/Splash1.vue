<template>
  <div>
    <block class='page'>
      <img src='@/assets/logo.svg' />
      <div>
        <h1>WARNING!</h1>
        <h3>You Are About To Enter a High Risk Zone!
          <br>
          You might be infected with creative virus.
        </h3>
        <div class='center'>
        <router-link tag='button' to='/home'>I UNDERSTAND</router-link>
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
}

button {
  font: 'AXIS';
  font-weight: 800;
  font-size: 2em;
  padding: 0.5em 1em;
  color: white;
  background-color: #ed1c24;
  border: none;
}

button:hover {
  background-color: white;
  border: 3px solid #ed1c24;
  color: #ed1c24;
}

h3, img {
  margin: 5%;
  text-align: center;
}
</style>
