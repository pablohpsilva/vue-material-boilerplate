// retirado de http://www.geradorcnpj.com/javascript-validar-cnpj.htm
export const cnpjNumber = {
  getMessage{{#if_eq lintConfig "standard"}} {{/if_eq}}() { // will be added to default English messages.
    return 'CNPJ inválido'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  validate{{#if_eq lintConfig "standard"}} {{/if_eq}}(val) {
    /* eslint-disable */
    let cnpj = val.replace(/[^\d]+/g,''){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    if(cnpj == '') return false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    if (cnpj.length != 14)
        return false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    // Valida DVs
    let tamanho = cnpj.length - 2,
      numeros = cnpj.substring(0,tamanho),
      digitos = cnpj.substring(tamanho),
      soma = 0,
      pos = tamanho - 7{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    if (resultado != digitos.charAt(0)) return false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    tamanho = tamanho + 1{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    numeros = cnpj.substring(0,tamanho){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    soma = 0{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    pos = tamanho - 7{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    if (resultado != digitos.charAt(1)) return false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    return true{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    /* eslint-enable */
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default cnpjNumber{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
