import axios from 'axios';
import Cookies from 'js-cookie'

const cookie = Cookies.get().csrftoken
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = cookie


export const addTour = (data) => {
  console.log(cookie)
  return axios({
    method: 'post',
    url: '/api/tours/',
    data: data,
    headers: {
      "X-CSRFToken": cookie
    }
  })
}