const mutations = {
  removeChannel{{#if_eq lintConfig "standard"}} {{/if_eq}}(state, channel) {
    state.channels.splice(channel, 1){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  addChannel{{#if_eq lintConfig "standard"}} {{/if_eq}}(state, channel) {
    state.channels.unshift(channel){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const actions = {
  removeChannel{{#if_eq lintConfig "standard"}} {{/if_eq}}({ commit }, channel) {
    if (!isNaN(Number(channel))) {
      commit('removeChannel', channel){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  },
  addChannel{{#if_eq lintConfig "standard"}} {{/if_eq}}({ commit }, channel) {
    if (channel && typeof channel === 'object' && !channel.hasOwnProperty('length')) {
      commit('addChannel', channel){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const getters = {
  getChannels{{#if_eq lintConfig "standard"}} {{/if_eq}}(state) {
    return state.channels{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const state = {
  channels: []{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  namespaced: true,
  actions,
  getters,
  state,
  mutations{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
