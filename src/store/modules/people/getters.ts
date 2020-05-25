import { ChartValue } from '@/models/chart';
import { RootState } from '@/store/types';
import { GetterTree } from 'vuex';
import { GendersCount, EyeColorCount, PeopleState } from './types';

const getters: GetterTree<PeopleState, RootState> = {
  gendersCount({ list }): GendersCount {
    const genderCount = { male: 0, female: 0 };
    // eslint-disable-next-line
    for (let person of list) {
      genderCount[person.gender as 'male' | 'female'] += 1;
    }
    return genderCount;
  },
  eyeColorCount({ list }): EyeColorCount {
    const eyeColorCount = { blue: 0, green: 0, brown: 0 };
    // eslint-disable-next-line
    for (let person of list) {
      eyeColorCount[person.eyeColor as 'brown' | 'blue' | 'green'] += 1;
    }
    return eyeColorCount;
  },
  // eslint-disable-next-line
  numOfGenders(state, getters): ChartValue[] {
    const count = getters.gendersCount as GendersCount;
    const genderCountArray = [];
    // eslint-disable-next-line
    for (const [
      k,
      v,
    ] of Object.entries(count)) {
      genderCountArray.push({ label: k, value: v });
    }

    return genderCountArray;
  },
  // eslint-disable-next-line
  numOfEyeColors(state, getters): ChartValue[] {
    const count = getters.eyeColorCount as EyeColorCount;
    const eyeColorCountArray = [];
    // eslint-disable-next-line
    for (const [
      k,
      v,
    ] of Object.entries(count)) {
      eyeColorCountArray.push({ label: k, value: v });
    }

    return eyeColorCountArray;
  },
};

export default getters;
