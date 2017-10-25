<template lang="html">
  <div class="Login__Wrapper">
    <md-card class="Login__CardWrappper">
      <md-card-media class="Login__CardImage">
        <img src="../../assets/img/logo.png" alt="People">
      </md-card-media>

      <md-card-content>
        <md-input-container :class="{'md-input-invalid': errors.has('email')}">
          <label>Usuário</label>
          <md-input type="email"
            name="email"
            v-model="user"
            v-validate
            data-vv-name="email"
            data-vv-rules="required|email"></md-input>
          <span class="md-error"></span>
        </md-input-container>

        <md-input-container :class="{'md-input-invalid': errors.has('cnpj')}">
          <label>CNPJ (exemplo de diretiva e validadores)</label>
          <md-input type="text"
            name="cnpj"
            v-model="cnpj"
            v-cnpj
            v-validate
            data-vv-name="cnpj"
            data-vv-rules="required|cnpj"></md-input>
          <span class="md-error"></span>
        </md-input-container>

        <md-input-container>
          <label>Senha</label>
          <md-input type="password"
            v-model="password"></md-input>
        </md-input-container>

      </md-card-content>

      <md-card-actions>
        <md-button>Esqueci minha senha</md-button>
        <md-button class="md-raised md-primary"
          @click.stop="login">
          Logar
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script type="text/javascript">
  export default {
    data{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
      return {
        user: '',
        cnpj: '',
        password: ''{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    components: {
    },
    computed: {
      cnpjError{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
        // Exemplo de computed properties
        return (this.errors) ? this.errors.first('cnpj') : ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      },
      emailError{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
        // Exemplo de computed properties
        return (this.errors) ? this.errors.first('email') : ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },
    methods: {
      login{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
        this.$router.push({ path: '/produtos' }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
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
