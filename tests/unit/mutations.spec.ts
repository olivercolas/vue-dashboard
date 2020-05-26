import { Person } from '@/models/person';
import { mutations } from '@/store/modules/people/mutations';
import { PeopleState } from '@/store/modules/people/types';

const { SET_LIST, ADD_PERSON, UPDATE_PERSON, DELETE_PERSON } = mutations;

describe('People mutations', () => {
  let state: PeopleState;
  let me: Person;
  let otherPerson: Person;
  let people: Person[];
  const initialState = () => {
    state = { list: [] };
    me = {
      _id: '1340923590235',
      age: 28,
      eyeColor: 'blue',
      name: 'Olivier Colas',
      gender: 'male',
      location: {
        latitude: 0,
        longitude: 0,
      },
      preferences: {
        pet: 'dog',
        fruit: 'mango',
      },
    };
    otherPerson = {
      _id: '90842002424',
      age: 28,
      eyeColor: 'green',
      name: 'Alexis Gnakabi',
      gender: 'male',
      location: {
        latitude: 0,
        longitude: 0,
      },
      preferences: {
        pet: 'bird',
        fruit: 'mango',
      },
    };
    people = [
      { ...me },
    ];
  };
  beforeEach(() => {
    initialState();
  });

  it('Updates the list with what was provided', () => {
    SET_LIST(state, people);

    expect(state.list).toEqual(people);
  });

  it(`Shouldn't update the list if the same id is used to add a person`, () => {
    ADD_PERSON(state, me);

    expect(state.list).toEqual(people);
  });

  it(`Should update the list with the new person`, () => {
    state.list = people;
    ADD_PERSON(state, otherPerson);

    expect(state.list.length).toEqual(2);
  });

  it(`Should update the person's obj`, () => {
    const updatedPerson = { ...me };
    updatedPerson.preferences.pet = 'bird';

    UPDATE_PERSON(state, { person: updatedPerson, index: 0 });

    expect(state.list[0]).toEqual(updatedPerson);
  });

  it(`Should delete the person`, () => {
    DELETE_PERSON(state, 0);

    expect(state.list.length).toEqual(0);
  });
});
