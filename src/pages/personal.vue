<template>
  <div class='page personal' style='grid-area: img'>
    <h2 class='desc red' style='font-weight: bold'>{{ data[0].name }}</h2>
    <div class='line' />
    <div class='data'>
    <img class='margin'
    :src="require(`@/assets/people/${data[0].path}/face.jpg`)">
      <div class='bio'>
        <div class='margin'>
          <h3 class='desc red' style='font-weight: bold'>Email</h3>
          <a class='underline' :href='data[0].email'>
            <p class='desc red'>{{ data[0].email }}</p>
          </a>
        </div>
        <div class='margin'>
          <h3 class='desc red' style='font-weight: bold'>Behance</h3>
          <a class='underline' :href='data[0].behance'>
            <p class='desc red'>{{ data[0].behance }}</p>
          </a>
        </div>
        <div class='margin'>
          <h3 class='desc red' style='font-weight: bold'>LinkedIn</h3>
          <a class='underline'
          :href='data[0].linkedin'>
            <p class='desc red'>{{ data[0].linkedin }}</p>
          </a>
        </div>
        <button>
          <a :href='`@/assets/people/${data[0].path}/resume.pdf`' download>
            <p>
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
      <h3 style='color: black'>{{ data[0].works.one.name }}</h3>
      <h3 class='desc' style='font-style: oblique'>{{ data[0].works.one.type }}</h3>
      <p class='desc'>
      {{ data[0].works.one.desc }}
      </p>
    </div>
    <work
    :works='data[0].works.one'
    :path='data[0].path'
    style='width: 100%' />
    <div class='line' />
    <div class='intro'>
      <h3 style='color: black'>{{ data[0].works.two.name }}</h3>
      <h3 class='desc' style='font-style: oblique'>{{ data[0].works.two.type }}</h3>
      <p class='desc'>
        {{ data[0].works.two.desc }}
      </p>
    </div>
    <work
    :works='data[0].works.two'
    :path='data[0].path'
    style='width: 100%' />
    <div class='line' />
    <div class='intro'>
      <h3 style='color: black'>{{ data[0].works.three.name }}</h3>
      <h3 class='desc' style='font-style: oblique'>{{ data[0].works.three.type }}</h3>
      <p class='desc'>
        {{ data[0].works.three.desc }}
      </p>
    </div>
    <work
    :works='data[0].works.three'
    :path='data[0].path'
    style='width: 100%' />
  </div>
</template>

<script>
import work from '@/components/individualWork.vue';
import usersData from '@/components/users';

export default {
  components: {
    work,
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
  padding: 2% 3%;
  flex-wrap: wrap;
}

.data {
  display: grid;
  grid-template-columns: 20% auto 8% 30%;
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
  grid-template-areas:
    "img data data data"
    "desc desc desc desc";
}

img {
  width: 20vw;
  height: auto;
}

.margin {
  margin: 10% 0;
}

// p, h3 {
//   font-size: 1.4vw;
// }

@media screen and (min-width: 480px){
  p {
    font-size: 0.7em;
  }
}

@media screen and (min-width: 736px){
  p {
    font-size: 1em;
  }
}

@media screen and (min-width: 980px){
  p {
    font-size: 1.3em;
  }
  .data {
      grid-template-areas:
    "img data . desc";
  }
}

@media screen and (min-width: 1280px){
  p {
    font-size: 1.5em;
  }
}
</style>
