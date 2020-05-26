export type PetTypes = 'cat' | 'dog' | 'none' | 'bird';
export type FruitTypes = 'banana' | 'strawberry' | 'mango' | 'apple';
export type EyeColorTypes = 'brown' | 'blue' | 'green';

export interface PersonLocation {
  latitude: number;
  longitude: number;
}
export interface PersonPreferences {
  pet: PetTypes;
  fruit: FruitTypes;
}
export interface Person {
  _id: string;
  age: number;
  eyeColor: EyeColorTypes;
  name: string;
  gender: string;
  location: PersonLocation;
  preferences: PersonPreferences;
}
