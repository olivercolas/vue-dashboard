import { Module } from 'vuex';
import { RootState } from '../../types';
import { PeopleState } from './types';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = () => ({
  list: [],
});

const namespaced = true;

export const people: Module<PeopleState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};

export default people;
