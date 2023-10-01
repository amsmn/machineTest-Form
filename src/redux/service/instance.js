import axios  from "axios";

const url =  "https://restcountries.com"|| '/';

export const instance = axios.create({
    baseURL: url,
    headers: {
        
    }
});
