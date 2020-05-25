import Vue from 'vue';
import Vuex from 'vuex';
import { people } from './modules/people';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = {
  modules: {
    people,
  },
  strict: debug,
};
export default new Vuex.Store(store);
