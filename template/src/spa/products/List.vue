<template lang="html">
  <div class="Profile__Wrapper">
    <div class="Profile__Content">
      <md-card
        v-for="n in 3">
        <md-card-media>
          <img src="assets/card-image-1.jpg"
            alt="People">
        </md-card-media>

        <md-card-header>
          <div class="md-title">
            Title goes here
          </div>
          <div class="md-subhead">
            Subtitle here
          </div>
        </md-card-header>

        <md-card-actions>
          <md-button class="md-raised md-primary"
            @click="callProductPage(n)">
            Abrir página deste produto
          </md-button>
        </md-card-actions>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non,
          voluptas eius illo quas, saepe voluptate pariatur in deleniti minus
          sint. Excepturi.
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      callProductPage(num) {
        this.$router.push({ path: `products/${num}` });
      },
    },
  };
</script>

<style lang="scss">
  .Profile__Wrapper {
    display: flex;
    justify-content: center;
  }

  .Profile__Content {
    width: 60%;
    min-width: 320px;
  }
</style>
