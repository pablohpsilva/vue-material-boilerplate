<template lang="html">
  <div class="Login__Wrapper">
    <md-card class="Login__CardWrappper">
      <md-card-media class="Login__CardImage">
        <img src="../../assets/logo.png" alt="People">
      </md-card-media>

      <md-card-content>
        <md-input-container>
          <label>Usuário</label>
          <md-input type="text" v-model="user"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Senha</label>
          <md-input type="password" v-model="password"></md-input>
        </md-input-container>
      </md-card-content>

      <md-card-actions>
        <md-button>Esqueci minha senha</md-button>
        <md-button class="md-raised md-primary" @click.stop="login">Logar</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        user: '',
        password: '',
      };
    },
    methods: {
      login() {
        this.$router.push({ path: '/' });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .Login__Wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Login__CardWrappper {
    margin-top: 20vh;
    min-width: 300px;
    width: 22%;
  }

  .Login__CardImage {
    display: flex;
    justify-content: center;
    img {
      max-width: 200px;
    }
  }
</style>
