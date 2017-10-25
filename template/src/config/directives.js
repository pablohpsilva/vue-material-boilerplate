import { vCNPJ } from '../common/directives/masks'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default (Vue) => {
  // Exemplo de como usar uma diretiva em Vue
  Vue.directive('cnpj', vCNPJ){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
