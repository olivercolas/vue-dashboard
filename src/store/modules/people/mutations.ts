import { Person } from '@/models/person';
import Vue from 'vue';
import { MutationTree } from 'vuex';
import { PeopleState } from './types';

export const mutations: MutationTree<PeopleState> = {
  SET_LIST(state, payload: Person[]) {
    state.list = payload;
  },
  ADD_PERSON(state, payload: Person) {
    const list = [
      ...state.list,
    ];
    const found = list.findIndex((person) => person._id === payload._id);
    if (found === -1) {
      list.push(payload);
      state.list = list;
    }
  },
  UPDATE_PERSON(state, payload: { person: Person; index: number }) {
    Vue.set(state.list, payload.index, payload.person);
  },
  DELETE_PERSON(state, payload: number) {
    const list = [
      ...state.list,
    ];
    list.splice(payload, 1);
    state.list = list;
  },
};

export default mutations;
