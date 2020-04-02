import axios from 'axios';


export const getTimes = (date) => {
  return axios.get('/api/times/')
}

export const addTimes = (data) => {
  return axios.post('/api/times/', data)
}