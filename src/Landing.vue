<template>
  <div class="page">
    <block class='center' id='first'>
      <div>
      <h1>What is<br>COVID-12?</h1>
      <img src='@/assets/logo.svg'>
      </div>
      <p>Favicons are the little icons you see in your browser tab.
        They help you understand which site is which
        when you’re scanning through your browser’s bookmarks and open tabs.
        They’re a neat part of internet history
        that are capable of performing some cool tricks.
      </p>
        <div class='center'>
          <video class='bg' loop muted autoplay>
            <source src='@/assets/sagoo6.mp4'>
          </video>
        </div>
    </block>
  </div>
</template>

<script>
export default {
  name: 'JamesHenry',
  components: {
  },
  data() {
    return {
      overlayVideo: false,
    };
  },
  methods: {
    nextBlock(e) {
      const el = this.$el.getElementsByClassName('nextBlock')[e];
      el.scrollIntoView({ behavior: 'smooth' });
    },
  },
  mounted() {
  },
};

</script>

<style lang="scss" scoped>
h1 {
  position: absolute;
    left: 5%;
    top: 27%;
    margin: 0;
    font-size: 6em;
    white-space: nowrap;
}

img, p {
  z-index: 1;
  margin: 1em 0;
}

img {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

video{
  width: 70vw;
  max-height: 70vh;
  z-index: 0;
}

#close {
  position: relative;
  right: 5%;
}

#first {
  flex-flow: column;
}

#description {
  position: relative;
  left: 5%;
  width: 30%;
}
</style>
