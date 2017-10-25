// import Vue from 'vue';
import VueMaterial from 'vue-material'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueResource from 'vue-resource'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VeeValidate from 'vee-validate'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default (Vue, ...params) => {
  params.filter(el => typeof el === 'object')
    .map(le => Vue.use(le)){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  Vue.use(VueMaterial){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  Vue.use(VueRouter){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  Vue.use(VeeValidate){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  Vue.use(VueResource){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
