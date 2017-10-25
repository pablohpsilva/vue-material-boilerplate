// A variável abaixo contem a raíz da API em questão. Os endpoints serão criados depois.
const basePath = 'https://api.github.com/repositories/11730342/commits?per_page=5&sha=';

// Actions são ações que o resource terá.
// No exemplo abaixo, criamos uma ação 'list', que é um GET
// na url que aponta para a raíz da API
const gitActions = {
  list: { method: 'GET', url: `${basePath}` }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
};

// Exportamos então o recurso, que não passa de uma função que recebe um
// Vue.$resource como parâmetro e retorna um resource customizado.
// Vue.$resource tem a seguinte assinatura:
// function Resource(url, params, actions, options)
export default resource => resource(`${basePath}`, {}, gitActions){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// Podemos extender este arquivo para módulos de recursos.
// Suponha que temos recursos do github dentro de um diretório `common/resources/github`
// Poderíamos refatorar este arquivo para algo do gênero:
// import git from './github/main';
//
// const basePath = 'https://api.github.com/repositories/11730342/commits?per_page=5&sha=';
// export const gitResource = resource => git(basePath, resource);
//
// Obviamente, o import `git` seria uma função que trataria as actions e retornaria
// um resource, como é esperado;
//
// Outra forma seria criar uma factory para criar estes recursos.
