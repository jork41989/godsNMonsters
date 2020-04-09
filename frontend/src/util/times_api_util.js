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
  return axios({
        method: 'post',
        url: '/api/times/',
        data: data,
        headers: {"X-CSRFToken": cookie}
})
}

export const bookTime = (data) => {
    return axios({
      method: 'put',
      url: `/api/times/${data.id}/`,
      data: data,
      headers: {
        "X-CSRFToken": cookie
      }
    })

}

