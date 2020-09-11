<template>
  <div class='page'>
    <div class='title'>
      <img class='smallLogo' src='@/assets/logo_red.svg'>
      <div>
      <h2>The Aid</h2>
      <p>
        The 12 cures that are ready to help the creative industry.
        <br>
         [Click to view our individual works]
      </p>
      </div>
    </div>
    <div>
      <ul class="card-list grid">
        <li v-for="(user, i) in allUsers" class="card-item" :key='`user${i}`'>
         <router-link :to="'aid/' + user.path">
         <div class='videoMask'>
            <img
            :ref='`photo${i++}`'
            class='photo'
            :id='`photo${i++}`'
            :src="require(`@/assets/people/${user.path}/face.jpg`)">
         </div>
            <p class='name'>{{i-1}}. {{ user.name }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import users from '@/components/users';

export default {
  Name: 'Individual',
  mixins: [users],
  data() {
    return {
      face: 'face',
    };
  },
};
</script>

<style lang="scss" scoped>
@import './src/styles/fonts.module.scss';

.name:hover, a:hover .name {
  color: $primary;
}

.smallLogo {
  min-width: 100px;
  min-height: 100px;
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
  padding-top: 10px;
}

.videoMask {
    height: 70vw;
    width: 70vw;
}

.grid {
  padding: 0;
}

.page {
  padding: 0 8vw;
  margin-bottom: 100px;
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
}

@media screen and (min-width: 980px){
  .grid {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
  .videoMask {
    height: 23vw;
    width: 23vw;
  }
}

@media screen and (min-width: 1280px){
  .grid {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
}
</style>
