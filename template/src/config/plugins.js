import Vue from 'vue';
import Vuex from 'vuex';
import VueMaterial from 'vue-material';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import Toast from '../common/functions/toast';

// Adicionando plugins ao Core do Vue
Vue.use(Vuex);
Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.use(VueResource);
Vue.use(Toast);
