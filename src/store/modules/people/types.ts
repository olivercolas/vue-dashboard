import { Person } from '@/models/person';

export interface PeopleState {
    list: Person[] | [];
}

export interface GendersCount {
    male: number;
    female: number;
}

export interface EyeColorCount {
    blue: number;
    green: number;
    brown: number;
}