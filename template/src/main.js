// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { Validator } from 'vee-validate'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { sync } from 'vuex-router-sync'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// Importação de código de configuração/criação criados.
import plugins from './config/plugins'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import directives from './config/directives'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import validations from './config/validations'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import theme from './config/theme'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import configRouter from './config/router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import vuexStore from './vuex/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

plugins(Vue, Vuex, VueRouter){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
directives(Vue){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
theme(Vue){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
validations(Validator){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const store = new Vuex.Store(vuexStore){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const router = configRouter(VueRouter){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// Sincronização entre rotas e vuex.
// Garante o estado da store em todas as páginas SPA.
sync(store, router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// Importando o componente raíz onde a app será renderizada.
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}} // eslint-disable-line

new Vue({ // eslint-disable-line no-new
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
