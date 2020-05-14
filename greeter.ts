import dotenv from "dotenv"
import axios from "axios"
import aspida from "@aspida/axios"
import api from "./apis/$api"
import type { CategoryList } from "./apis/categories"

dotenv.config()

const axiosConfig = {
    timeout: 3000,
    baseURL: 'https://discourse.joinmastodon.org',
    headers: {
        'Accept': 'application/json',
//        'Api-Username': process.env.DISCOURSE_API_USERNAME,
//        'Api-Key': process.env.DISCOURSE_API_KEY,
    }
}

let client = api(aspida(axios, axiosConfig))

;(async () => {
    client.categories.get()
        .then(response => {
            let category_list = response.data.category_list
            console.log(category_list)
            console.log(category_list.categories)
            category_list.categories.forEach(cat => console.log(cat.name))
        })
        .catch(error => console.log(error))
})()