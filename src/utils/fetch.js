import axios from 'axios'
const server= axios.create({
  baseURL:'http://www.easy-mock.com/mock/59f817f8ffe61f7a1d98b659/api/',
  timeout:5000
})
export default server
