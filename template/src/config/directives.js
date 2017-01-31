import { vCNPJ } from '../common/directives/masks';

export default (Vue) => {
  // Exemplo de como usar uma diretiva em Vue
  Vue.directive('cnpj', vCNPJ);
};
