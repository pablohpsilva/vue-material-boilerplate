import vanillaMasker from 'vanilla-masker';

/* eslint-disable no-new */
export const vHourFull = {
  bind(el) {
    vanillaMasker(el).maskPattern('99:99:99');
  },
};

export const vHour = {
  bind(el) {
    vanillaMasker(el).maskPattern('99:99');
  },
};

export const vDateFull = {
  bind(el) {
    vanillaMasker(el).maskPattern('99/99/9999');
  },
};

export const vDate = {
  bind(el) {
    vanillaMasker(el).maskPattern('99/99/99');
  },
};

export const vPhone = {
  bind(el, binding) {
    const pattern = (binding.value) ? binding.value.mask : '(99) 99999-9999';
    vanillaMasker(el).maskPattern(pattern);
  },
};

export const vMoney = {
  bind(el, binding) {
    const params = binding.value || {};

    vanillaMasker(el).maskMoney({
      // Decimal precision -> "90"
      precision: params.precision || 2,

      // Decimal separator -> ",90"
      separator: params.separator || ',',

      // Number delimiter -> "12.345.678"
      delimiter: params.delimiter || '.',

      // Money unit -> "R$ 12.345.678,90"
      unit: params.unit || 'R$',

      // Money unit -> "12.345.678,90 R$"
      suffixUnit: params.suffixUnit || '',
      // Force type only number instead decimal,
      // masking decimals with ",00"
      // Zero cents -> "R$ 1.234.567.890,00"
      zeroCents: !!params.zeroCents,
    });
  },
};
