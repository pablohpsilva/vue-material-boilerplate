{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueMaterial from 'vue-material'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueResource from 'vue-resource'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { sync } from 'vuex-router-sync'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// Importação de código de configuração/criação criados.
import VuexStore from './vuex/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import RouterConfig from './router-config'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { vPhone } from './common/directives/masks'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// Adicionando plugins ao Core do Vue
Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueMaterial){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueRouter){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueResource){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// Exemplo de como usar uma diretiva em Vue
Vue.directive('phone', vPhone){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
// Cria a store Flux usando vuex.
const store = new Vuex.Store(VuexStore),
// Cria as rotas baseadas em nossa configuração.
  router = new VueRouter(RouterConfig){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// Sincronização entre rotas e vuex. Garante o estado da store em todas as páginas SPA.
sync(store, router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

new Vue({
  router,
  store,
  el: '#app',
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
/* eslint-enable no-new */
