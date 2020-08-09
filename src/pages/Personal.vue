<template>
  <div class='page personal'>
    <h1>Ho Nguyen Phuong Anh</h1>
    <!-- <img :src="require(`../assets/faces/${routes.name}.jpg`)"> -->
    <img src='../assets/faces/anh.jpg'>
    <p>Favicons are the little icons you see in your browser tab.
      They help you understand which site is which
      when you’re scanning through your browser’s bookmarks and open tabs.
      They’re a neat part of internet history
      that are capable of performing some cool tricks.
    </p>
  </div>
</template>

<script>
export default {
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
  display: flex;
  justify-content: flex-start;
  padding: 2% 10%;
  flex-wrap: wrap;
}

img, p{
  margin: 5%;
}
</style>
