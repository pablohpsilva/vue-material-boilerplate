import { cnpjNumber } from '../common/validations/social';

const messages = {
  required: () => 'Este campo é obrigatório',
  email: () => 'Este email é inválido',
};

const dictionary = {
  en: {
    messages,
  },
  pt: {
    messages,
  },
  ptbr: {
    messages,
  },
};

export default (Validator) => {
  // Exemplo de como usar um validator customizado
  Validator.extend('cnpj', cnpjNumber);
  Validator.updateDictionary(dictionary);
};
