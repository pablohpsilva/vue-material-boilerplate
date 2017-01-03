<template lang="html">
  <div class="Login__Wrapper">
    <md-card class="Login__CardWrappper">
      <md-card-media class="Login__CardImage">
        <img src="../../assets/logo.png" alt="People">
      </md-card-media>

      <md-card-content>
        <md-input-container :class="{'md-input-invalid': errors.has('email')}">
          <label>Usuário</label>
          <md-input v-model="user" data-vv-name="email" type="email" v-validate name="email" data-vv-rules="required|email"></md-input>
          <span class="md-error">{{emailError}}</span>
        </md-input-container>

        <md-input-container :class="{'md-input-invalid': errors.has('cnpj')}">
          <label>CNPJ (exemplo de diretiva e validadores)</label>
          <md-input v-model="cnpj" data-vv-name="cnpj" type="text" v-validate name="cnpj" data-vv-rules="required|cnpj" v-cnpj></md-input>
          <span class="md-error">{{cnpjError}}</span>
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
        cnpj: '',
        password: '',
      };
    },
    computed: {
      cnpjError() {
        // Exemplo de computed properties
        return (this.errors) ? this.errors.first('cnpj') : '';
      },
      emailError() {
        // Exemplo de computed properties
        return (this.errors) ? this.errors.first('cnpj') : '';
      },
    },
    methods: {
      login() {
        this.$router.push({ path: '/products' });
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
