import * as TimesApiUtil from '../util/times_api_util';

export const RECEIVE_TIMES = 'RECEIVE_TIMES';
export const RECEIVE_A_TIME = 'RECEIVE_A_TIME';
export const RECEIVE_TIMES_ERRORS = 'RECEIVE_TIMES_ERRORS'


const receiveTimes = times => ({
  type: RECEIVE_TIMES,
  times
})

const receiveATime = time => ({
  type: RECEIVE_A_TIME,
  time
})

export const receiveErrors = errors => ({
  type: RECEIVE_TIMES_ERRORS,
  errors
})

export const getTimes = () => dispatch => (
  TimesApiUtil.getTimes()
    .then(times => dispatch(receiveTimes(times)))
)

export const getCustomerTimes = () => dispatch => (
  TimesApiUtil.getCustomerTimes()
    .then(times => dispatch(receiveTimes(times)))
)

export const newTimesAdd = (data) => dispatch => (
  TimesApiUtil.addTimes(data)
    .then(date => dispatch(receiveATime(date)),
        err => (
          dispatch(receiveErrors(err.response.data))
        )
    )
)

export const bookATime = (data) => dispatch => (
  TimesApiUtil.bookTime(data)
    .then(date => dispatch(receiveATime(date)),
      err => (
        dispatch(receiveErrors(err.response.data))
      )
    )
)