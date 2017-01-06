import Vue from 'vue';
import { vCNPJ } from '../common/directives/masks';

// Exemplo de como usar uma diretiva em Vue
Vue.directive('cnpj', vCNPJ);
