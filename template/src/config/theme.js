const app = {
  primary: {
    color: 'blue',
    hue: 600{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  accent: {
    color: 'orange',
    hue: 800{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  warn: {
    color: 'red',
    hue: 400{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  background: 'white'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default (Vue) => {
  Vue.material.registerTheme('default', app){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
