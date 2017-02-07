import { accessObjectViaString } from '../../common/functions/helpers';

const mutations = {
  removeChannel(state, channel) {
    state.channels.splice(channel, 1);
  },
  sortChannel(state, ordenacao) {
    state.channels.sort((a, b) => {
      const index = ordenacao.name;
      const firstData = accessObjectViaString(a, index);
      const secondData = accessObjectViaString(b, index);
      const first = isNaN(Number(firstData)) ? firstData : Number(firstData);
      const second = isNaN(Number(secondData)) ? secondData : Number(secondData);

      if (first < second) {
        return (ordenacao.type === 'desc') ? -1 : 1;
      }
      if (first > second) {
        return (ordenacao.type === 'desc') ? 1 : -1;
      }
      return 0;
    });
  },
  populateChannelHeaders(state, headers) {
    state.channelHeaders = headers;
  },
  populateChannels(state, channels) {
    state.channels = channels;
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
  sortChannel({ commit }, ordenacao) {
    if (typeof ordenacao === 'object' && ordenacao) {
      commit('sortChannel', ordenacao);
    }
  },
  populateChannels({ commit }, channels) {
    if (channels && channels.hasOwnProperty('length') && channels.length) {
      commit('populateChannels', channels);
    }
  },
  populateChannelHeaders({ commit }, headers) {
    if (headers && headers.hasOwnProperty('length') && headers.length) {
      commit('populateChannelHeaders', headers);
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
  getChannelHeaders(state) {
    return state.channelHeaders;
  },
};

const state = {
  channelHeaders: [],
  channels: [],
};

export default {
  namespaced: true,
  actions,
  getters,
  state,
  mutations,
};
