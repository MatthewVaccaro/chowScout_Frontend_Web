const axios = require('axios')

const url = "http://localhost:4000/"

export async function POST_earlyEmail(post){
    var checkCity = post.city ? post.city : "null"
    console.log({ email: post.email, city: checkCity })
    const request = await axios.post(`${url}early_email/signup`, { email: post.email, city: checkCity })
    return request
}