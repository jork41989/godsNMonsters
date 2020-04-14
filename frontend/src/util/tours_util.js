import axios from 'axios';
import Cookies from 'js-cookie'

const cookie = Cookies.get().csrftoken
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = cookie

export const getTours = () => {
  return axios.get('/api/tours')
}

export const getTour = (id) => {
  return axios.get(`/api/tours/${id}`)
}


export const addTour = (data) => {
  return axios({
    method: 'post',
    url: '/api/tours/',
    data: data,
    headers: {
      "X-CSRFToken": cookie
    }
  })
}