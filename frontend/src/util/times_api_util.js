import axios from 'axios';
import Cookies from 'js-cookie'

const cookie = Cookies.get().csrftoken
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = cookie

export const getTimes = () => {
  return axios.get('/api/timesBack/')
}

export const getCustomerTimes = () => {
  return axios.get('/api/times')
}

export const addTimes = (data) => {
  console.log(cookie)
  return axios({
        method: 'post',
        url: '/api/times/',
        data: data,
        headers: {"X-CSRFToken": cookie}
})
}