import api from '@/api/people';
import { Person } from '@/models/person';
import { RootState } from '@/store/types';
import { ActionTree } from 'vuex';
import { PeopleState } from './types';

export const actions: ActionTree<PeopleState, RootState> = {
  async getPeople({ commit }) {
    const results = await api.getPeople();
    if (results) {
      commit('SET_LIST', results);
    }
  },
  addPerson({ commit }, payload: Person) {
    commit('ADD_PERSON', payload);
  },
  editPerson({ commit }, payload: { person: Person; index: number }) {
    commit('UPDATE_PERSON', payload);
  },
  deletePerson({ commit }, payload: number) {
    commit('DELETE_PERSON', payload);
  },
};

export default actions;
