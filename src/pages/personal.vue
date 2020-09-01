<template>
  <div class='page personal'>
    <h2>Ho Nguyen Phuong Anh</h2>
    <div class='line' />
    <!-- <img :src="require(`../assets/faces/${routes.name}.jpg`)"> -->
    <div class='data'>
    <img class='margin' src='../assets/faces/anh.jpg'>
      <div class='margin'>
        <h3>email</h3>
        <p>name@gmail.com</p>
        <h3>behance</h3>
        <p>name@gmail.com</p>
        <h3>LinkedIn</h3>
        <p>name@gmail.com</p>
        <button>
          Download resume
        </button>
      </div>
    <p class='margin'>Favicons are the little icons you see in your browser tab.
      They help you understand which site is which
      when you’re scanning through your browser’s bookmarks and open tabs.
      They’re a neat part of internet history
      that are capable of performing some cool tricks.
    </p>
    </div>
    <div class='line' />
    <h3>Jack The Clipper</h3>
    <p>corporate identity</p>
    <p>
      Favicons are the little icons you see in your browser tab.
      They help you understand which site is which
      when you’re scanning through your browser’s bookmarks and open tabs.
      They’re a neat part of internet history
      that are capable of performing some cool tricks.
    </p>
    <work style='width: 100%' />
  </div>
</template>

<script>
import work from '@/components/work.vue';

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
.personal {
  padding: 2% 5%;
  flex-wrap: wrap;
}

.data {
  display: flex;
  flex-direction: row;
  align-items: center;
}

img {
  width: 35%;
  height: auto;
}

.margin {
  margin: 0 10px;
}
</style>
