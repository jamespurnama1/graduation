<template>
  <div class='page personal' style='grid-area: img'>
    <h2 class='desc red' style='font-weight: bold'>{{ data[0].name }}</h2>
    <div class='line' style='margin-top: 20px' />
    <div class='data'>
    <img
      :src="require(`@/assets/people/${data[0].path}/face.jpg`)"
      style='grid-area: img; margin-bottom: 10px'>

    <div class='bio'>
      <div class='margin'>
        <h3 class='desc red' style='font-weight: bold'>Email</h3>
        <a class='underline' :href='data[0].email'>
          <p class='desc'>{{ data[0].email }}</p>
        </a>
      </div>
      <div class='margin'>
        <h3 class='desc red' style='font-weight: bold'>Behance</h3>
        <a class='underline' :href='data[0].behance'>
          <p class='desc'>{{ data[0].behance }}</p>
        </a>
      </div>
      <div class='margin' style='margin-bottom: 7px'>
        <h3 class='desc red' style='font-weight: bold'>LinkedIn</h3>
        <a class='underline'
        :href='data[0].linkedin'>
          <p class='desc'>{{ data[0].linkedin }}</p>
        </a>
      </div>
      <button>
        <a :href='`@/assets/people/${data[0].path}/resume.pdf`' download>
          <p style='margin: 1vw 0'>
            Download resume
          </p>
        </a>
      </button>
    </div>

    <p style='grid-area: desc'
    class='desc red'>
      {{ data[0].bio }}
    </p>
    </div>
    <div class='line' />
    <div class='intro'>
      <h4 class='desc' style='font-weight: bold;color: black'>{{ data[0].works.one.name }}</h4>
      <h4 class='desc'
      style='font-style: oblique; margin-bottom: 20px'>
      {{ data[0].works.one.type }}
    </h4>
      <p class='desc' style='max-width: 900px'>
      {{ data[0].works.one.desc }}
      </p>
    </div>

    <component
      :is='data[0].works.one.layout'
      :works='data[0].works.one'
      :path='data[0].path'
      style='width: 100%' />
    <div class='line' />
    <div class='intro'>
    <h4 class='desc' style='font-weight: bold;color: black'>{{ data[0].works.two.name }}</h4>
    <h4 class='desc'
    style='font-style: oblique; margin-bottom: 20px'>
      {{ data[0].works.two.type }}
    </h4>
    <p class='desc' style='max-width: 900px'>
      {{ data[0].works.two.desc }}
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
    style='font-style: oblique; margin-bottom: 20px'>
      {{ data[0].works.three.type }}
    </h4>
    <p class='desc' style='max-width: 900px'>
      {{ data[0].works.three.desc }}
    </p>
    </div>

    <component
      :is='data[0].works.three.layout'
      :works='data[0].works.three'
      :path='data[0].path'
      style='width: 100%' />
  </div>
</template>

<script>
import layoutA from '@/components/layoutA.vue';
import layoutB from '@/components/layoutB.vue';
import carouselA from '@/components/carouselA.vue';
import carouselB from '@/components/carouselB.vue';
import usersData from '@/components/users';

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
  mixins: [usersData],
  data() {
    return {
      data: '',
    };
  },
  computed: {
  },
  created() {
    const who = this.allUsers.filter((filter) => filter.path === this.user);
    this.data = who;
  },
};
</script>

<style lang="scss" scoped>
@import './src/styles/fonts.module.scss';

.bio {
  max-width: 70%;
  grid-area: data;
}

.underline:hover {
  text-decoration: underline;
  color: black;
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
  padding: 2% 8%;
  flex-wrap: wrap;
}

.data {
  display: grid;
  grid-template-columns: 20% auto auto 40%;
  grid-gap: 5px;
  align-items: center;
  justify-items: center;
  grid-template-areas:
    "img img data data"
    "desc desc desc desc";
}

img {
  min-width: 170px;
  width: 20vw;
  height: auto;
}

.margin {
  margin: 2vw 0;
}

h4 {
  font-size: calc(10px + 1vw);
}

h3 {
  font-size: calc(10px + 1vw);
}

@media screen and (max-width: 480px){
  .data {
      grid-template-areas:
    "img img img img"
    "data data data data"
    "desc desc desc desc";
  }
  .bio{
    max-width: initial;
    width: 100%;
  }
  img {
    width: 100%;
  }
}

@media screen and (min-width: 980px){
  .data {
      grid-template-areas:
    "img data . desc";
  }
}
</style>
