<template>
  <div class='page' style='margin-bottom: 5%'>
    <div class='title'>
      <img class='smallLogo' src='@/assets/logo_red.svg'>
      <div>
      <h2>The Outbreak</h2>
      <p>
        The sudden spread of designs and the increase in creativity.
      </p>
      </div>
    </div>
    <div style='padding: 0 10vw'>
      <ul class="card-list grid">
        <li v-for="(user, i) in users" class="card-item" :key='`user${i}`'>
         <router-link :to="'outbreak/' + user.photo">
         <div class='videoMask'>
            <video
            :ref='`photo${i++}`'
            @mouseover='playVideo(i)'
            @mouseleave='stopVideo(i)'
            muted
            preload="auto"
            autobuffer
            class='photo'
            :id='`photo${i++}`'>
            <source :src="require(`@/assets/people/${user.photo}.mp4`)" >
            </video>
         </div>
            <p class='name'>{{i-1}}. {{ user.name }}</p>
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
        { name: 'James Henry', photo: 'james' },
        { name: 'Chaterine A.', photo: 'huisan' },
        { name: 'Vianka', photo: 'vianka' },
      ],
      cards: [1, 2, 3, 4],
    };
  },
  computed: {
  },
  methods: {
    playVideo(e) {
      const p = document.getElementById(`photo${e - 1}`);
      p.play();
    },
    stopVideo(e) {
      const p = document.getElementById(`photo${e - 1}`);
      p.pause();
      p.currentTime = 0;
    },
  },
  mounted() {
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
@import './src/styles/fonts.module.scss';

.name:hover, a:hover .name {
  color: $primary;
}

.smallLogo {
  width: 10vw;
  height: 10vw;
  margin: 0 30px;
}

h1, h2 {
  margin: 0;
}

h3, p {
  color: black;
  margin: 0;
}

.videoMask {
    height: 70vw;
    width: 70vw;
  }

@media screen and (min-width: 480px){
  .grid {
    grid-template-columns: repeat(1, minmax(100px, 2fr));
  }
}

@media screen and (min-width: 736px){
  .grid {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
  .videoMask {
    height: 35vw;
    width: 35vw;
  }
  .photo {
    // transform: translateY(0);
  }
}

@media screen and (min-width: 980px){
  .grid {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
  .videoMask {
    height: 23vw;
    width: 23vw;
  }
    .photo {
    transform: translateY(-20%);
  }
}

@media screen and (min-width: 1280px){
  .grid {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
}
</style>
