<template>
  <div class='page'>
    <div class='infected'>
      <h1>List of Infected</h1>
      <p>
        Click to view personal works.
      </p>
    </div>
    <div class='title'>
      <ul :style="gridStyle" class="card-list">
        <li v-for="(user, i) in users" class="card-item" :key='`user${i}`'>
         <router-link :to="'infected/' + user.photo">
            <video
            :ref='`photo${i++}`'
            @mouseover='this.play(i)'
            @mouseleave='this.stop(i)'
            muted
            class='photo'>
            <source :src="require(`@/assets/faces/${user.photo}.mp4`)" >
            </video>
            <p class='name'>{{ user.name }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  Name: 'Individual',
  data() {
    return {
      users: [
        { name: 'Phuong Anh', photo: 'anh' },
        { name: 'Wei Hang', photo: 'weihang' },
        { name: 'Hui San', photo: 'huisan' },
        { name: 'Wai Yee', photo: 'waiyee' },
        { name: 'Kar Mun', photo: 'karmun' },
        { name: 'Sze Chien', photo: 'szechien' },
        { name: 'Samantha', photo: 'sam' },
        { name: 'Zhi Jian', photo: 'zhijian' },
        { name: 'Aurelius Kevin', photo: 'aurel' },
        { name: 'Wei Hang', photo: 'weihang' },
      ],
      cards: [1, 2, 3, 4],
      numberOfColumns: 5,
    };
  },
  computed: {
    gridStyle() {
      return {
        gridTemplateColumns: `repeat(${this.numberOfColumns}, minmax(100px, 1fr))`,
      };
    },
  },
  methods: {
    playVideo(e) {
      this.$refs.photo[e].play();
    },
    stopVideo(e) {
      this.$refs.photo[e].stop();
    },
  },
  mounted() {
    console.log(this.$refs);
  },
  // created() {
  //   document.getElementsByTagName('video').onmouseover = function playVideo() { this.play(); };
  //   document.getElementsByTagName('video').onmouseover = function playVideo() { this.stop(); };
  // },
  // destroyed() {
  //   document.getElementsByTagName('video').removeEventListener('mouseover');
  //   document.getElementsByTagName('video').removeEventListener('mouseout');
  // },
};
</script>

<style lang="scss" scoped>
.title {
  padding: 5%;
  width: 90%;
}

.name {
  position: absolute;
  font-family: sans-serif;
  font-weight: normal;
  font-size: 0.5em;
}

.photo{
  width: 100%;
}

.infected {
  display: flex;
  justify-content: flex-start;
  padding: 2% 10%;
  flex-wrap: wrap;
}

.card-list {
  display: grid;
  grid-gap: 1em;
}

.card-item {
}
</style>
