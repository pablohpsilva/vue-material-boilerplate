<template lang="html">
  <div class="Profile__Wrapper">
    <div class="Profile__Content">
      <div class="">
        Exemplo de chamada ajax:
        <ul v-if="items">
          <li v-for="item in items">
            <span class="message">{{item.commit.message}}</span><br>
            by <span class="author">{{item.commit.author.name}}</span>
            at <span class="date">{{item.commit.author.date}}</span>
          </li>
        </ul>
      </div>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non,
            voluptas eius illo quas, saepe voluptate pariatur in deleniti minus
            sint. Excepturi.
          </p>
          <span>Exemplo de mascara e diretiva em vue</span>
          <input type="text" v-phone>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script type="text/babel">
  import { gitResource } from '../../common/resources/resources';

  export default {
    name: 'ProductsList',
    data() {
      return {
        githubResources: gitResource(this.$resource),
        items: [],
      };
    },
    methods: {
      callProductPage(num) {
        this.$router.push({ path: `products/${num}` });
      },
      fetchGithubData() {
        this.githubResources.list()
          .then((docs) => {
            this.items = docs.data;
          });
      },
    },
    mounted() {
      this.fetchGithubData();
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
