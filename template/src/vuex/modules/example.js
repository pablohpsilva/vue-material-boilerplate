import {
  DATA_OBJECT,
} from '../mutation-types';

const mutations = {
  [DATA_OBJECT](state, data) {
    if (data && typeof data === 'object') {
      state.example = data;
    }
  },
};

const state = {
  example: {
    userId: -1,
    userName: '',
    balance: 0,
    goals: [],
  },
};

export default {
  state,
  mutations,
};
