<template>
  <div class="container grid-lg">
    <div id="app" v-cloak>
      <div class="toast toast-primary text-center" v-show="!inProgress">
        Wciśnij <strong>Start</strong>, aby rozpocząć odliczanie.
      </div>

      <br />

      <div class="text-center">
        <h1>{{ counter }}</h1>
        <button class="btn btn-primary" @click="start" :disabled="inProgress">
          Start
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 10,
      inProgress: false
    };
  },
  methods: {
    start() {
      this.inProgress = true;
      this.countDown();
    },
    countDown() {
      this.counter--;
      if (this.counter > 0) {
        setTimeout(this.countDown, 1000);
      } else {
        setTimeout(() => {
          this.counter = 10;
          this.inProgress = false;
        }, 1000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
  margin-bottom: 50px;
}

[v-cloak] {
  display: none;
}
</style>
