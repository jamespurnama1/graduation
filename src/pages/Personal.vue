<template>
  <div class='page personal'>
    <h2>Ho Nguyen Phuong Anh</h2>
    <div class='line' />
    <!-- <img :src="require(`../assets/faces/${routes.name}.jpg`)"> -->
    <div class='data'>
    <img class='margin' src='../assets/faces/anh.jpg'>
      <div class='margin' style='width: 70%'>
        <h3>email</h3>
        <p>name@gmail.com</p>
        <h3>behance</h3>
        <p>name@gmail.com</p>
        <h3>LinkedIn</h3>
        <p>name@gmail.com</p>
        <button>
          <p>
            Download resume
          </p>
        </button>
      </div>
    <p class='margin desc'>
      Lorem ipsum dolor sit amet,
      consectetuer adipiscing elit,
      sed diam nonummy nibh euismod
      tincidunt ut laoreet dolore
      magna aliquam erat volutpat.
      Ut wisi enim ad minim veniam,
      quis nostrud exerci tation
      ullamcorper suscipit lobor dolor sit amet.
      Lorem ipsum dolor sit amet,
      consectetuer adipiscing elit,
      sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
    </p>
    </div>
    <div class='line' />
    <div class='intro'>
      <h3 style='color: black'>Jack The Clipper</h3>
      <h3 class='desc' style='font-style: oblique'>Corporate Identity</h3>
      <p class='desc'>
      Favicons are the little icons you see in your browser tab.
      They help you understand which site is which
      when you’re scanning through your browser’s bookmarks and open tabs.
      They’re a neat part of internet history
      that are capable of performing some cool tricks.
      </p>
    </div>
    <work style='width: 100%' />
    <div class='line' />
    <div class='intro'>
      <h3 style='color: black'>Rempah Nusantara</h3>
      <h3 class='desc' style='font-style: oblique'>Packaging</h3>
      <p class='desc'>
      Favicons are the little icons you see in your browser tab.
      They help you understand which site is which
      when you’re scanning through your browser’s bookmarks and open tabs.
      They’re a neat part of internet history
      that are capable of performing some cool tricks.
      </p>
    </div>
    <work style='width: 100%' />
  </div>
</template>

<script>
import work from '@/components/individualWork.vue';

export default {
  components: {
    work,
  },
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
    };
  },
};
</script>

<style lang="scss" scoped>
@import './src/styles/fonts.module.scss';

button p {
  color: white;
}

button:hover p {
  color: $primary;
}

.desc {
  font-family: sans-serif;
  font-weight: normal;
  color: black;
}

.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
}
.personal {
  padding: 2% 5%;
  flex-wrap: wrap;
}

.data {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
}

img {
  width: 20%;
  height: auto;
}

.margin {
  margin: 0 5%;
}
</style>
