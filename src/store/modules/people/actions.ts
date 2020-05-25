import api from '@/api/people';
import { RootState } from '@/store/types';
import { ActionTree } from 'vuex';
import { PeopleState } from './types';

const actions: ActionTree<PeopleState, RootState> = {
  async getPeople({ commit }) {
    const results = await api.getPeople();
    if (results) {
      commit('SET_LIST', results.data);
    }
  },
};

export default actions;
