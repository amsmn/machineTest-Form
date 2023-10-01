import axios from 'axios';

const baseUrl = 'https://restcountries.com';

const instance = axios.create({
  baseURL: baseUrl,
});

const CountryListService = {
  async getCountryList() {
  
      const response = await instance.get('/v2/all?fields=name,region,flag');
      return response.data;
  },
};

export { instance, CountryListService };
