// import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import Toast from '../common/functions/toast';

export default (Vue, Vuex = null, VueRouter = null) => {
  // Adicionando plugins ao Core do Vue
  if (Vuex) {
    Vue.use(Vuex);
  }
  if (VueRouter) {
    Vue.use(VueRouter);
  }
  Vue.use(VueMaterial);
  Vue.use(VueRouter);
  Vue.use(VeeValidate);
  Vue.use(VueResource);
  Vue.use(Toast);
};
