module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Nome do projeto"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Descrição",
      "default": "Um projeto em Vue.js"
    },
    "author": {
      "type": "string",
      "message": "Autor(es)"
    },
    "build": {
      "type": "list",
      "message": "Vue build",
      "choices": [
        {
          "name": "Runtime + Compiler: esta é a recomendada",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "Runtime-only: 6KB mais leve min+gzip, porém templates (ou qualquer Vue-specific HTML) é permitido SOMENTE em arquivos .vue - funções de renderização são requiridas em outro lugar",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "lintConfig": {
      "type": "list",
      "message": "Pick an ESLint preset",
      "choices": [
        {
          "name": "AirBNB (https://github.com/airbnb/javascript) + Softbox lint",
          "value": "airbnb",
          "short": "AirBNB"
        }
      ]
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?"
    }
  },
  {
    "skipInterpolation": "src/spa/**/*.vue"
  }
  "filters": {
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "test/e2e/**/*": "e2e"
  },
  "completeMessage": "Para rodar o projeto:\n\n  cd {{destDirName}}\n  yarn install\n  yarn run dev\n\nA documentação oficial pode ser lida em https://vuejs-templates.github.io/webpack"
};
