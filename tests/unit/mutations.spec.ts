import {mutations} from '@/store/modules/people/mutations';
import { PeopleState } from '@/store/modules/people/types';
import { Person } from '@/models/person';

const {SET_LIST} = mutations;

describe('People mutations', () => {
    const state: PeopleState = { list: [] }
    const people: Person[] = [
        {
            _id: '1340923590235',
            age: 28,
            eyeColor: 'blue',
            name: 'Olivier Colas',
            gender: 'male',
            location: {
                latitude: 0,
                longitude: 0
            },
            preferences: {
                pet: 'dog',
                fruit: 'mango'
            }
        }
    ]

    it('Updates the list with what was provided', () => {
        SET_LIST(state, people)

        expect(state.list).toEqual(people)
    })
})