import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000', // Set the base URL of your API server
    timeout: 5000, // Set a timeout (optional)
    headers: {
        'Content-Type': 'application/json' // Set the desired content type (optional)
    }
})

export default ({ app }, inject) => {
    inject('api', api)
}
