# Frontend Seed
Neste documento encontra-se as diretivas para a criação e desenvolvimento. Use o Index abaixo para navegar nesta breve documentação.

---

# Sumário
1. [tl;dr;](#tldr)
* [Como iniciar este projeto](#como-iniciar-este-projeto)
* [Editor de texto](#editor-de-texto)
  * [Qual usar?](#qual-usar)
  * [Lista de plugins](#lista-de-plugins)
  * [Tema e sintaxe recomendada](#tema-e-sintaxe-recomendada)
  * [.editorconfig](#editorconfig)
* [Guia para HTML](#guia-para-html)
  * [Exemplo](#guia-para-html-exemplo)
* [Guia para CSS](#guia-para-css)
* [Guia para JavaScript](#guia-para-javascript)
* [Node.js e Gerenciador de pacotes](#nodejs-e-gerenciador-de-pacotes)
  * [Node.js](#nodejs)
  * [Gerenciador de pacotes](#gerenciador-de-pacotes)
  * [Como instalar o yarn](#como-instalar-o-yarn)
  * [Algumas das vantagens em usar o yarn](#vantagens-em-usar-o-yarn)
* [Seed](#seed)
  * [Arquitetura](#arquitetura)
  * [Vue.js](#vuejs)
  * [Criação de componentes](#criacao-de-componentes)

---

# <a id="tldr"></a>tl;dr;

```shell

$ npm install -g yarn phantomjs

# Depois instale as dependencias
$ yarn install

# Depois rode a aplicação
$ yarn run dev

```

--- 


# <a id="como-iniciar-este-projeto"></a>Como iniciar este projeto

Para iniciar este projeto, tenha o yarn instalado. Se você não o tem, leia [Como instalar o yarn](#como-instalar-o-yarn).

Com o yarn instalado, execute os comandos abaixo:

```bash
$ yarn install && yarn run dev
```

Após o término de download das dependências, a aplicação subirá automaticamente, abrindo uma janela do browser.

Comandos comuns:
```bash
# Inicia servidor com hot reload em localhost:8080
$ yarn run dev

# Gera build para produção com minificação
$ yarn run build

# roda testes unitários
$ yarn run unit

# roda testes e2e
$ yarn run e2e

# roda todos os testes
$ yarn test

# Adicionar depenências no projeto
$ yarn add packageName[@versionNumber]

# Remover depenências no projeto
$ yarn remove packageName
```

# <a id="editor-de-texto"></a>Editor de texto

## <a id="qual-usar"></a>Qual usar?
O editor de texto recomendado é o **[Atom](https://atom.io)**. Este software é livre e hackable. Possui vários plugins e é bem parecido com o [SublimeText](www.sublimetext.com).

## <a id="lista-de-plugins"></a>Lista de plugins
Os plugins necessários para o melhorar a experiência do desenvolvedor são ([OP] são opcionais):
1. **atom-beautify**: colore o código dos arquivos em desenvolvimento;
* **emmet**: permite escrever HTML mais rapidamente usando a tecla Tab;
* **linter**: verifica arquivos variados que possuam regras de validação;
* **linter-eslint**: faz uso de ESLint para validar arquivos que contenham JavaScript;
* **autocomplete-modules**: autocomplete para imports;
* **turbo-javascript**: autocomplete para javascript;
* **language-vue**: adiciona highlight de sintaxe e snippets;
* **vue-format**: atom-beautify para arquivos .vue;
* [OP]**pigments**: rgb, rgba e hex ficam com uma preview da cor;
* [OP]**color-picker**: color picker para atom;
* [OP]**linter-write-good**: autocomplete para escrever em inglês;
* [OP]**file-icons**: coloca ícones ao lado do nome dos arquivos;
* [OP]**markdown-preview-plus**: bom para escrever arquivos *.md* .

## <a id="tema-e-sintaxe-recomendada"></a>Tema e sintaxe recomendada
* atom-material-ui
* atom-material-[dark|light]

## <a id="editorconfig"></a>.editorconfig
Arquivos .editorconfig são arquivos que devem ser colocados na raíz do projeto. Esses arquivos são lidos pelo editor de texto e define como os arquivos serão criados como, por exemplo, se tab ou espaços serão usados para separar informações; Um exemplo deste aquivo é:
```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

---

# <a id="guia-para-html"></a>Guia para HTML
Um arquivo HTML exemplo pode ser visto abaixo:
<a id="guia-para-html-exemplo"></a>
```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="keywords" content="palavras,chaves,separadas,por,vírgula,sem,espaço">
    <meta name="author" content="best site"/>
    <meta name="description" content="A page's description, usually one or two sentences."/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Social Media Meta Card Tags -->
    <!-- Open Graph -->
    <meta property="og:site_name" content="The best site">
    <meta property="og:url" content="https://bestsite.com">
    <meta property="og:title" content="The best site"/>
    <meta property="og:description" content="description goes here"/>
    <!-- Multiplas imagens com multiplas resoluções/tipos podem ser usadas -->
    <meta property="og:image" content="https://bestsite.com/logo.png"/>
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="1200">
    <!-- Twitter cards -->
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="bestsite"/>
    <meta property="twitter:site:id" content="7812312"/>
    <meta property="twitter:title" content="The best site"/>
    <meta property="twitter:description" content="description goes here"/>
    <meta property="twitter:image" content="link_to_image"/>
    <meta property="twitter:image:src" content="https://bestsite.com/logo.png">
    <meta property="twitter:image:width" content="1200">
    <meta property="twitter:image:height" content="1200">
    <!-- Google+ -->
    <meta itemprop="name" content="The best site">
    <meta itemprop="description" content="description goes here">
    <meta itemprop="image" content="https://bestsite.com/logo.png">
    <!-- Tags que não são meta -->
    <title>The Best Site</title>
    <!-- CSS -->
    <!-- Arquivos de Reset do CSS devem ser chamados antes de qualquer outro arquivo -->
    <link rel="stylesheet" type="text/css" media="screen" href="/css/reset.min.css">
    <link rel="stylesheet" type="text/css" media="screen" href="/css/bundle.css">
    <!-- Scripts de analytics podem ser colocados no head, sendo eles minified e uglyfied -->
    <script async src="//www.google-analytics.com/analytics.min.js"></script>
  </head>
  <body>

    <!-- Conteúdo do Body -->
    <!-- De preferência, apenas uma tag contendo a raíz da aplicação deverá ser chamada -->
    <app id="app"></app>
    <!-- Outro exemplo: -->
    <!-- <div id="app"></div> -->

    <!-- JavaScript -->
    <!-- Coloca-se o bundle.js abaixo para que a página seja carregada independente do JavaScript -->
    <!-- Podem existir cenários onde o bundle.js deva ser importado na tag head. -->
    <script async charset="utf-8" src="/js/bundle.js"></script>
  </body>
</html>
```

## Considerações sobre o [`index.html`](#guia-para-html-exemplo) proposto
Perceba que o `reset.min.css` só deverá ser importado caso o `bundle.css` já não o possua no início do arquivo. Recomenda-se colocar o `reset.min.css` acoplado ao `bundle.css` para performance.
Ambos imports de CSS possuem um atributo `media`. O browser não bloqueará o carregamento da página com este atributo.
Espera-se que o `bundle.css` seja minificado.

O arquivo raíz com a aplicação deve ter somente um ponto de entrada. Espera-se que a aplicação seja carregada neste ponto. No caso do `index.html` o ponto de entrada é:
```html
  <!-- ... -->

  <app id="app"></app>

  <!-- ... -->
```

Deve-se colocar o `bundle.js` contendo a aplicação no final da tag `<body>`. Em ocasiões especiais, este import poderá ser colocado no final da tag `<head>`.

O uso do atributo `async` em tags `<script>` já [tem suporte](https://developer.mozilla.org/en/docs/Web/HTML/Element/script#Browser_compatibility) pela maioria dos navegadores.

---

# <a id="lista-de-plugins"></a>Guia para CSS
Os projetos terão o [Material Design](https://material.io/guidelines/) da Google como Guideline. Sendo assim, espera-se que espaçamentos, estilos e comportamentos dos componentes criados tenham o Material Design como base.

Projetos devem seguir o seguinte styleguide CSS/Stylus/PostCSS:

#### [CSS / Stylus Styleguide](https://github.com/vilaboim/css)

Todo CSS deverá ser minificado e um `bundle.css` deverá ser criado contendo todo o CSS da aplicação direcionada para um target específico. CSS globais (como o `reset.min.css`) deverão ser inseridos no início do bundle, visto que toda a aplicação será afetada.

---

# <a id="lista-de-plugins"></a>Guia para JavaScript
## Code style
Para que tenhamos efeito nas regras aqui mencionadas, os plugins no atom deverão estar instalados e funcionando. O guia de escrita de código pode ser lido [aqui](https://github.com/airbnb/javascript).

Todo código criado deverá seguir o seguinte `.eslintrc.js`, onde este foi baseado no eslint da empresa [Airbnb](https://github.com/airbnb/javascript):

```javascript
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'one-var': 0,
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
```

Diretórios que não devam ser analisados pelo ESLint deverão ser adicionados no arquivo `.eslintignore`, como o abaixo:
```
build/*.js
config/*.js
```

---

# <a id="nodejs-e-gerenciador-de-pacotes"></a>Node.js e Gerenciador de pacotes

## <a id="nodejs"></a>Node.js
Recomenda-se sempre o uso da versão LTS recomendada pela Node.js foundation. Hoje, `30/12/2016`, a versão recomendada é a 6.9.2.

## <a id="gerenciador-de-pacotes"></a>Gerenciador de pacotes
Qualquer gerenciador de pacotes poderá ser usado, porém, recomenda-se o **[yarn](https://www.npmjs.com/package/yarn)** como padrão onde espera-se que este seja instalado globalmente na máquina/container de desenvolvimento.

Para instalar o yarn, basta:
<a id="como-instalar-o-yarn"></a>
```bash
$ npm install -g yarn
```

#### <a id="vantagens-em-usar-o-yarn"></a>Algumas das vantagens em usar o yarn:
* **Offline Mode**. If you've installed a package before, you can install it again without any internet connection.
* **Deterministic**. The same dependencies will be installed in the same exact way on any machine, regardless of install order.
* **Network Performance**. Yarn efficiently queues up requests and avoids request waterfalls in order to maximize network utilization.
* **Network Resilience**. A single request failing won't cause an install to fail. Requests are retried upon failure.
* **Flat Mode**. Yarn resolves mismatched versions of dependencies to a single version to avoid creating duplicates.

---

# <a id="seed"></a>Seed

## <a id="arquitetura"></a>Arquitetura

```bash
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── common
│   │   ├── directives
│   │   │   └── masks.js
│   │   ├── functions
│   │   │   └── helpers.js
│   │   ├── resources
│   │   │   └── resources.js
│   │   └── validations
│   │       ├── email.js
│   │       └── social.js
│   ├── spa
│   │   ├── Hello.vue
│   │   └── Home.vue
│   └── vuex
│   │   ├── actions.js
│   │   ├── getters.js
│   │   ├── modules
│   │   │   └── example.js
│   │   ├── mutation-types.js
│   │   └── store.js
│   ├── main.js
│   └── router-config.js
├── index.html
└── package.json
```

Com essa arquitetura, temos:

* **common**. Diretório onde arquivos que são compartilhados por toda aplicação;
* **common/directives**. Diretivas Vue que podem ser usadas na aplicação;
* **common/functions**. Funções usadas na aplicação;
* **common/resources**. Resources para consumo de API Rest;
* **common/validations**. Validações customizadas que atendam às necessidades da aplicação;
* **shared-components**. Onde todos os componentes que são frequentemente usados na aplicação deverão ser criados e colocados aqui;
* **spa**. Onde cada uma das páginas da SPA serão criadas;
* **vuex**. Todos os arquivos necessários para que o vuex funcione. Contempla actions, mutations, getters e a store;
* **vuex/modules**. Módulos do vuex que serão usados na aplicação.
* **`router-config.js`**. Arquivo que configura um objeto VueRouter para ser usada na aplicação. Todas as rotas encontram-se aqui. Este arquivo é o arquivo raíz de rotas, sendo assim, arquivos externos poderão ser importados e usados aqui;
* **`App.vue`**. Componente raíz da aplicação já com vue-router inciado, assim como, com transição `slide-fade` adicionada;
* **`main.js`**. Arquivo de confguração raíz da aplicação. Onde tudo inicia.

## <a id="vuejs"></a>Vue.js
Este seed usa as seguinte principais tecnologias:

1. [Vue.js](https://github.com/vuejs/vue/releases/tag/v2.1.8);
* [vuex](https://github.com/vuejs/vuex/releases/tag/v2.1.1);
* [vue-resource](https://github.com/pagekit/vue-resource/releases/tag/1.0.3);
* [vue-router](https://github.com/vuejs/vue-router/releases/tag/v2.1.1);
* [vee-validate](https://github.com/logaretm/vee-validate/releases/tag/2.0.0-beta.18).

## <a id="criacao-de-componentes"></a>Criação de componentes

Usa-se um [guia de estilo para componentes vuejs](https://github.com/pablohpsilva/vuejs-component-style-guide/blob/master/README.md). Um exemplo de componente:

```html
<template lang="html">
  <div class="RangeCustom__Wrapper">
    <input type="range" :max="max" :min="min" v-model="value"/>
    <span>Current value is: {{ value }}</span>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'RangeCustom',
    props: {
      max: {
        type: Number,
        default: 10,
      },
      min: {
        type: Number,
        default: 0,
      },
      defaultValue: {
        type: Number,
        default: 4,
      },
    },
    data() {
      return {
        value: this.defaultValue + 0,
      };
    },
  };
</script>

<style scoped>
  .RangeCustom__Wrapper { /* nice CSS */ }
</style>
```
