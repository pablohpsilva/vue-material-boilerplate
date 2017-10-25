import channel from './modules/channel'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// A Vuex instance is created by combining the state, the actions,
// and the mutations. Because the actions and mutations are just
// functions that do not depend on the instance itself, they can
// be easily tested or even hot-reloaded (see counter-hot example).

export default {
  modules: {
    channel{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  strict: true{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
