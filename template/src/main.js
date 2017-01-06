// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { sync } from 'vuex-router-sync';

// Importação de código de configuração/criação criados.
import './config/plugins';
import './config/directives';
import './config/validations';
import './config/theme';
import store from './config/flux';
import { router } from './config/router';

// Importando o componente raíz onde a app será renderizada.
import App from './App';

// Sincronização entre rotas e vuex.
// Garante o estado da store em todas as páginas SPA.
sync(store, router);

new Vue({ // eslint-disable-line no-new
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App },
});
