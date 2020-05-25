import axios from 'axios';

export const baseUrl = 'https://updates.suade.org/files/';

export default {
  getPeople: async () => {
    try {
      const results = axios.get(`${baseUrl}/people.json`);
      return results;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
