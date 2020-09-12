<template>
  <div class='page personal' style='grid-area: img' v-images-loaded:on.progress="imageProgress">
    <h2 class='desc red' style='font-weight: bold'>{{ data[0].name }}</h2>
    <div class='line' />
    <div class='data'>
    <div class='mask'>
    <img
      :src="`../faces/${data[0].path}.jpg`"
      class='photo'>
    </div>

    <div class='bio'>
      <div class='margin' style='margin-top: 0'>
        <h3 class='desc red' style='font-weight: bold'>Email</h3>
        <a class='underline' :href='`mailto:${data[0].email}`'>
          <p class='desc'>{{ data[0].email }}</p>
        </a>
      </div>
      <div class='margin'>
        <h3 class='desc red' style='font-weight: bold'>Behance</h3>
        <a class='underline' :href='`http://www.${data[0].behance}`'>
          <p class='desc'>{{ data[0].behance }}</p>
        </a>
      </div>
      <div class='margin'>
        <h3 class='desc red' style='font-weight: bold'>LinkedIn</h3>
        <a class='underline'
        :href='`http://www.${data[0].linkedin}`'>
          <p class='desc'>{{ data[0].linkedin }}</p>
        </a>
      </div>
      <button>
        <a :href='`/resume/${data[0].path}_resume.pdf`' download>
          <p style='font-size: calc(10px+5vw);margin: 1vw 0'>
            Download resume
          </p>
        </a>
      </button>
    </div>

    <p style='grid-area: desc'
    v-html='data[0].bio'
    class='desc'>
    </p>
    </div>
    <div class='line' />
    <div class='intro'>
      <h4 class='desc' style='font-weight: bold;color: black'>{{ data[0].works.one.name }}</h4>
      <h4 class='desc'
      style='font-style: oblique'>
      {{ data[0].works.one.type }}
    </h4>
      <p
      v-html='data[0].works.one.desc'
      class='desc' style='max-width: 900px; text-align: center'>
      </p>
    </div>
    <div>
      <component
        :is='data[0].works.one.layout'
        :works='data[0].works.one'
        :path='data[0].path'
        style='width: 100%' />
      <div class='line' />
      <div class='intro'>
      <h4 class='desc' style='font-weight: bold;color: black'>{{ data[0].works.two.name }}</h4>
      <h4 class='desc'
      style='font-style: oblique'>
        {{ data[0].works.two.type }}
      </h4>
      <p
      v-html='data[0].works.two.desc'
      class='desc' style='max-width: 900px; text-align: center'>
      </p>
      </div>

      <component
        :is='data[0].works.two.layout'
        :works='data[0].works.two'
        :path='data[0].path'
        style='width: 100%' />
      <div class='line' />
      <div class='intro'>
      <h4 class='desc' style='font-weight: bold;color: black'>{{ data[0].works.three.name }}</h4>
      <h4 class='desc'
      style='font-style: oblique'>
        {{ data[0].works.three.type }}
      </h4>
      <p
      v-html='data[0].works.three.desc'
      class='desc' style='max-width: 900px; text-align: center'>
      </p>
      </div>

      <component
        :is='data[0].works.three.layout'
        :works='data[0].works.three'
        :path='data[0].path'
        style='width: 100%' />

      <router-link :to='`/aid/${allUsers[next].path}`'>
      <p class='desc underline' style='text-align: right; margin-top: 50px'>
        Next - {{ allUsers[next].name }} >
      </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import imagesLoaded from 'vue-images-loaded';
import layoutA from '@/components/layoutA.vue';
import layoutB from '@/components/layoutB.vue';
import carouselA from '@/components/carouselA.vue';
import carouselB from '@/components/carouselB.vue';
import usersData from '@/components/users';
import loading from '@/components/loading';

export default {
  components: {
    layoutA,
    layoutB,
    carouselA,
    carouselB,
  },
  props: {
    user: String,
  },
  directives: {
    imagesLoaded,
  },
  mixins: [usersData, loading],
  data() {
    return {
      data: '',
      next: '',
    };
  },
  created() {
    const who = this.allUsers.filter((filter) => filter.path === this.user);
    this.data = who;
    if (this.data === undefined || this.data.length === 0) {
      this.$router.push('/404');
      console.log('404');
    }
    const pathArray = this.allUsers.map((person) => person.path);
    this.next = pathArray.indexOf(this.user) + 1;
    if (this.next === 12) {
      this.next = 0;
    }
  },
};
</script>

<style lang="scss" scoped>
@import './src/styles/fonts.module.scss';

.photo {
  grid-area: img;
  position: relative;
  width: 100%;
  height: initial;
  min-height: 100%;
  object-fit: cover;
  top: 40%;
}

.page {
  margin-bottom: 50px;
}

.bio {
  max-width: 70%;
  grid-area: data;
}

.underline:hover {
  text-decoration: underline;
  color: $primary;
}

button{
  margin: 0;
}

button p {
  color: white;
}

button:hover p {
  color: $primary;
}

.red {
  color: $primary !important;
}

.desc {
  font-family: sans-serif;
  font-weight: normal;
  color: black;
  margin: 0;
}

.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
}

.personal {
  padding: 30px 8%;
  flex-wrap: wrap;
}

.data {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: minmax(200px, 25vw) auto;
  grid-gap: 50px;
  // margin-left: 20px;
  align-items: start;
  grid-template-areas:
    "img data"
    "desc desc";
}

img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.mask {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.margin {
  margin: 2vw 0;
}

h4 {
  font-size: calc(10px + 1vw);
}

h3 {
  font-size: calc(10px + 1vw);
  margin: 0;
}

p {
  margin: 0;
}

a:hover p {
  color: $primary;
}

@media (max-width: 480px){
  .data {
    grid-template-columns: 100%;
    grid-template-rows: 126vw auto auto;
    grid-template-areas:
    "img"
    "data"
    "desc";
    grid-gap: 10px;
  }
  .bio{
    max-width: initial;
    width: 100%;
  }
  img {
    width: 100%;
  }
  h2 {
    text-align: center;
  }
  h4.desc:nth-child(2) {
    margin-bottom: 10px;
  }
  .line {
    margin: 4% 0;
  }
  .photo {
    top: 0;
  }
}

@media (min-width: 980px){
  .data {
    width: 85%;
    grid-template-columns: 22% 30% 35%;
    grid-template-rows: minmax(300px, 25vw);
    grid-template-areas:
    "img data desc";
  }
  .photo {
    top: 0;
  }
}
</style>
