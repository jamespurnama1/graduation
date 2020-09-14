<template>
  <div id="notFound" class="center">
    <div class="center sub">
      <lottie-player class="lottie" src="/meds.json" autoplay loop />
      <div class="center" style="transform: translateY(-7vw)">
        <h3>weird, there's no cure here.</h3>
        <p>(404 error not found)</p>

        <a href="/">
          <button>
            <p>take me home</p>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import '@lottiefiles/lottie-player';

export default {
  Name: '404',
};
</script>

<style lang="scss" scoped>
@import './src/styles/fonts.module.scss';

.sub {
  width: 90vw;
  height: 90vh;
}

.lottie {
  height: 80%;
}

.center {
  flex-direction: column;
}

button {
  margin-top: 50px;
  margin-left: 0;
  border-color: white;
  padding: 10px 15px;
}

button:hover p {
  color: $primary;
}

#notFound {
  background-color: $primary;
  width: 100vw;
  height: 100vh;
}

h3,
h1,
p {
  text-align: center;
  color: white;
  margin: 0px;
}
</style>
