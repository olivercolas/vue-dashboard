import { Person } from '@/models/person';
import { MutationTree } from 'vuex';
import { PeopleState } from './types';

const mutations: MutationTree<PeopleState> = {
  SET_LIST(state, payload: Person[]) {
    state.list = payload;
  },
};

export default mutations;
