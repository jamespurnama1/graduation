<template>
  <div class='block'>
    <div class='img'>
      <img src='@/assets/sample.jpeg'>
    </div>
    <h3 style='color: black'>Group Members: Vianka | Aurelius Kevin | Chaterine A.</h3>
    <div class='line' />
    <div style='display: flex'>
    <div>
      <h3>Problem</h3>
      <p>Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit,
        sed diam nonummy nibh euismod
        tincidunt ut laoreet dolore magna
        aliquam erat volutpat.
        Ut wisi enim ad minim veniam,
        quis nostrud exerci tation ullamcorper
        suscipit lobortis nisl ut aliquip ex ea
        commodo consequat. Duis autem vel eum
        iriure dolor in hendrerit in vulputate velit esse
      </p>
    </div>
    <div>
      <h3>Insight</h3>
      <p>Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit,
        sed diam nonummy nibh euismod
        tincidunt ut laoreet dolore magna
        aliquam erat volutpat.
        Ut wisi enim ad minim veniam,
        quis nostrud exerci tation ullamcorper
        suscipit lobortis nisl ut aliquip ex ea
        commodo consequat. Duis autem vel eum
        iriure dolor in hendrerit in vulputate velit esse
      </p>
    </div>
    <div>
      <h3>Idea</h3>
      <p>Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit,
        sed diam nonummy nibh euismod
        tincidunt ut laoreet dolore magna
        aliquam erat volutpat.
        Ut wisi enim ad minim veniam,
        quis nostrud exerci tation ullamcorper
        suscipit lobortis nisl ut aliquip ex ea
        commodo consequat. Duis autem vel eum
        iriure dolor in hendrerit in vulputate velit esse
      </p>
    </div>
    </div>
    <h3>Case Study Video</h3>
    <div class='img' style='margin-bottom: 50px'>
      <img src='@/assets/sample.jpeg'>
    </div>
    <h3>How it Works</h3>
    <div class='img'>
      <img src='@/assets/sample.jpeg'>
    </div>
    <p>1. Lorem ipsum dolor sit amet,
      consectetuer adipiscing elit,
      sed diam nonummy nibh euismod
      tincidunt ut laoreet dolore
      magna aliquam erat volutpat.
      Ut wisi enim ad minim veniam,
      quis nostrud exerci tation
      ullamcorper suscipit lobortis
      nisl ut aliquip ex ea commodo consequat.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Work',
  props: {
    members: String,
  },
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
.block {
  flex-direction: column;
  // align-items: center;
}

.img {
  width: 95%;
  height: 45vw;
  overflow: hidden;
  margin: 0 auto;
}

img {
  width: 100%;
}

h3 {
  text-align: left;
  align-self: flex-start;
}
</style>
