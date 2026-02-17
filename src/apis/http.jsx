import axios from 'axios'

const http = axios.create({
  baseURL: 'https://api.owenouyang.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default http
