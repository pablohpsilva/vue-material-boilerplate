import vanillaMasker from 'vanilla-masker'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
export const vHourFull = {
  bind (el) {
    vanillaMasker(el).maskPattern('99:99:99'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const vHour = {
  bind{{#if_eq lintConfig "standard"}} {{/if_eq}}(el) {
    vanillaMasker(el).maskPattern('99:99'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const vDateFull = {
  bind{{#if_eq lintConfig "standard"}} {{/if_eq}}(el) {
    vanillaMasker(el).maskPattern('99/99/9999'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const vDate = {
  bind{{#if_eq lintConfig "standard"}} {{/if_eq}}(el) {
    vanillaMasker(el).maskPattern('99/99/99'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const vPhone = {
  bind{{#if_eq lintConfig "standard"}} {{/if_eq}}(el, binding) {
    const pattern = (binding.value) ? binding.value.mask : '(99) 99999-9999'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    vanillaMasker(el).maskPattern(pattern){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const vCNPJ = {
  bind{{#if_eq lintConfig "standard"}} {{/if_eq}}(el) {
    vanillaMasker(el).maskPattern('99.999.999/9999-99'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const vMoney = {
  bind{{#if_eq lintConfig "standard"}} {{/if_eq}}(el, binding) {
    const params = binding.value || {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

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
      zeroCents: !!params.zeroCents{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
