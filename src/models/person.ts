export interface PersonLocation {
    latitude: number;
    longitude: number;
}
export interface PersonPreferences {
    pet: string;
    fruit: string;
}
export interface Person {
    _id: string;
    age: number;
    eyeColor: string;
    name: string;
    gender: string;
    location: Location;
    preferences: PersonPreferences;
}