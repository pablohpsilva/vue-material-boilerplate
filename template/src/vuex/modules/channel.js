const mutations = {
  removeChannel(state, channel) {
    state.channels.splice(channel, 1);
  },
  addChannel(state, channel) {
    state.channels.unshift(channel);
  },
};

const actions = {
  removeChannel({ commit }, channel) {
    if (!isNaN(Number(channel))) {
      commit('removeChannel', channel);
    }
  },
  addChannel({ commit }, channel) {
    if (channel && typeof channel === 'object' && !channel.hasOwnProperty('length')) {
      commit('addChannel', channel);
    }
  },
};

const getters = {
  getChannels(state) {
    return state.channels;
  },
};

const state = {
  channels: [],
};

export default {
  namespaced: true,
  actions,
  getters,
  state,
  mutations,
};
