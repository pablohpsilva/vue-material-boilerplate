import { cnpjNumber } from '../common/validations/social'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const messages = {
  required: () => 'Este campo é obrigatório',
  email: () => 'Este email é inválido'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const dictionary = {
  en: {
    messages{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  pt: {
    messages{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  ptbr: {
    messages{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default (Validator) => {
  // Exemplo de como usar um validator customizado
  Validator.extend('cnpj', cnpjNumber){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  Validator.updateDictionary(dictionary){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
