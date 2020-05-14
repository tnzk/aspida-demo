const axios = require('axios').default
require('dotenv').config()

let config = {
    headers: {
        'Accept': 'application/json',
        'Api-Username': process.env.DISCOURSE_API_USERNAME,
        'Api-Key': process.env.DISCOURSE_API_KEY,
    }
}

let url = 'https://community.codevillage.jp/categories'

let f = (url:string) => {
    axios.get(url, config)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
}

f(url)