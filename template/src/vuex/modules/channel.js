import { accessObjectViaString } from '../../common/functions/helpers';

const mutations = {
  removerCanal(state, canal) {
    if (!isNaN(Number(canal))) {
      state.canais.splice(canal, 1);
    }
  },
  ordenarCanais(state, ordenacao) {
    if (typeof ordenacao === 'object' && ordenacao) {
      state.canais.sort((a, b) => {
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
    }
  },
  popularCabecalhoCanais(state, cabecalho) {
    if (cabecalho && cabecalho.hasOwnProperty('length') && cabecalho.length) {
      state.cabecalhoCanais = cabecalho;
    }
  },
  popularCanais(state, canais) {
    if (canais && canais.hasOwnProperty('length') && canais.length) {
      state.canais = canais;
    }
  },
  adicionarCanal(state, canal) {
    if (canal && typeof canal === 'object' && !canal.hasOwnProperty('length')) {
      state.canais.unshift(canal);
    }
  },
};

const actions = {
  removerCanal({ commit }, canal) {
    commit('removerCanal', canal);
  },
  ordenarCanais({ commit }, ordenacao) {
    commit('ordenarCanais', ordenacao);
  },
  popularCanais({ commit }, cabecalho) {
    commit('popularCanais', cabecalho);
  },
  popularCabecalhoCanais({ commit }, cabecalho) {
    commit('popularCabecalhoCanais', cabecalho);
  },
  adicionarCanal({ commit }, canal) {
    commit('adicionarCanal', canal);
  },
};

const getters = {
  getCanais(state) {
    return state.canais;
  },
  getCabecalhoCanais(state) {
    return state.cabecalhoCanais;
  },
};

const state = {
  cabecalhoCanais: [],
  canais: [],
};

export default {
  namespaced: true,
  actions,
  getters,
  state,
  mutations,
};
