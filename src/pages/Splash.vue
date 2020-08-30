<template>
  <div id='red' class='center'>
    <transition name='scale'>
      <div v-show='showHint' id='hint'>
        <feather
        @click='showHint=false'
        class='clickable'
        style='margin-left:auto'
        type='x'
        stroke='white'
        stroke-width='3' />
        <p>
          Try clicking the
          <br>
          “let me in” button
        </p>
      </div>
    </transition>
    <transition name='scale'>
    <div v-show='delay' id='window'>
      <div id='titleBar'>
        <button @click='showHint=true' class='clickable' id='x'>
          <feather type='x' stroke='white' stroke-width='3' />
        </button>
      </div>
      <div id='warningText'>
        <feather type='alert-triangle' stroke='white' stroke-width='2' size='3em' />
        <h2>Warning:</h2>
        <p>
          There is a high chance of creativity being transmitted by going through our website.
        </p>
        <button
        style='margin-left:auto'
        class='clickable'
        @click='letMeIn()'>
          <p>Let me in</p>
        </button>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  Name: 'About',
  data() {
    return {
      showHint: false,
      delay: false,
    };
  },
  mounted() {
    this.delay = true;
  },
  methods: {
    letMeIn() {
      this.showHint = false;
      this.delay = false;
      this.$store.commit('removeSplash');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './src/styles/fonts.module.scss';

h1, h2, h3, p {
  color: white;
}

h2 {
  font-size: 3em;
}

#hint {
  position: absolute;
  top: 26%;
  right: 15%;
  z-index: 2;
  border: solid 3px white;
  background-color: $primary;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
}

#red {
  position: fixed;
  overflow: hidden;
  background-color: $primary;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

#window {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 30%;
  border: solid 3px white;
}

#titleBar {
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 96%;
  border-width: 3px;
  border-bottom-style: solid;
  border-color: white;
  padding: 2%;
}

#warningText {
  display: flex;
  flex-wrap: wrap;
  padding: 0 3%;
}

#x {
  display: inline-block;
  padding: 1px;
  border: solid 3px white;
}

button {
  font-family: 'AXIS';
  padding: 0 10px;
  color: white;
  background-color: $primary;
  border: solid 3px white;
}

button:hover {
  background-color: white;
  border: 3px solid $primary;
}

button:hover p {
  color: $primary;
}

button:hover .feather {
  stroke: $primary;
}

.feather {
  margin-top: 3%;
}
</style>
