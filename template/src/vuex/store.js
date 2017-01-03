import example from './modules/example';

import * as actions from './actions';
import * as getters from './getters';

// A Vuex instance is created by combining the state, the actions,
// and the mutations. Because the actions and mutations are just
// functions that do not depend on the instance itself, they can
// be easily tested or even hot-reloaded (see counter-hot example).

export default {
  actions,
  getters,
  modules: {
    example,
  },
  strict: true,
};
