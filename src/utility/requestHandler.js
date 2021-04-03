const axios = require('axios')
require('dotenv').config();

const prod = process.env.REACT_APP_PROD_URL
const test = process.env.REACT_APP_TEST_URL
const local = "http://localhost:4000/"

const url = prod ? prod : test ? test : local

export async function POST_earlyEmail(post){
    var checkCity = post.city ? post.city : "null"
    const request = await axios.post(`${url}early_email/signup`, { email: post.email, city: checkCity })
    return request
}