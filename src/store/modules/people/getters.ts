import { GetterTree } from 'vuex';
import { PeopleState } from './types';
import { RootState } from '@/store/types';
import { ChartValue } from '@/models/chart';
import { Person } from '@/models/person';

const getters: GetterTree<PeopleState, RootState> = {
  gender({ list }): ChartValue[] {
    return list.map((item: Person) => ({ label: item.eyeColor, value: item.gender }));
  },
};

export default getters;
