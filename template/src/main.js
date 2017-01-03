{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueResource from 'vue-resource'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { sync } from 'vuex-router-sync'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import VuexStore from './vuex/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import RouterConfig from './router-config'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueRouter){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueResource){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const store = new Vuex.Store(VuexStore),
  router = new Router(RouterConfig){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

sync(store, router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
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
