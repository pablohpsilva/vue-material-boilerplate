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
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
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
    "lint": {
      "type": "confirm",
      "message": "Confirmar o uso de ESLint no projeto."
    },
    "lintConfig": {
      "when": "lint",
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
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "test/e2e/**/*": "e2e"
  },
  "completeMessage": "Para rodar o projeto:\n\n  cd {{destDirName}}\n  yarn install\n  yarn run dev\n\nA documentação oficial pode ser lida em https://vuejs-templates.github.io/webpack"
};
