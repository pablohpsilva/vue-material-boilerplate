// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { Validator } from 'vee-validate';
import { sync } from 'vuex-router-sync';

// Importação de código de configuração/criação criados.
import plugins from './config/plugins';
import directives from './config/directives';
import validations from './config/validations';
import theme from './config/theme';
import configRouter from './config/router';
import vuexStore from './vuex/store';

plugins(Vue, Vuex, VueRouter);
directives(Vue);
theme(Vue);
validations(Validator);

const store = new Vuex.Store(vuexStore);
const router = configRouter(VueRouter);

// Sincronização entre rotas e vuex.
// Garante o estado da store em todas as páginas SPA.
sync(store, router);

// Importando o componente raíz onde a app será renderizada.
import App from './App'; // eslint-disable-line

new Vue({ // eslint-disable-line no-new
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App },
});
