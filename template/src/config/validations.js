import { Validator } from 'vee-validate';
import { cnpjNumber } from '../common/validations/social';

// Exemplo de como usar um validator customizado
Validator.extend('cnpj', cnpjNumber);
