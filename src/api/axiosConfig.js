import axios from 'axios';

export default axios.create({
  // ngrok is used when we are trying to use a server on the internet to a localhost (creates secure tunnel to localhost) without it being deployed 
  // baseUrl: 'https://9c96-103-106-239-104.ap.ngrok.io',
  baseURL: 'http://localhost:8080',
  headers: { "ngrok-skip-browser-warning": "true" }
})