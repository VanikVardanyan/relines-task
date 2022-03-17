import axios from "axios"


export const API = axios.create({
    baseURL: "https://random-data-api.com/api/users/random_user",
})