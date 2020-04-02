import * as TimesApiUtil from '../util/times_api_util';

export const RECEIVE_TIMES = 'RECEIVE_TIMES';
export const RECEIVE_TIMES_ERRORS = 'RECEIVE_TIMES_ERRORS'


const receiveTimes = times => ({
  type: RECEIVE_TIMES,
  times
})

export const receiveErrors = errors => ({
  type: RECEIVE_TIMES_ERRORS,
  errors
})

export const getTimes = (date) => dispatch => (
  TimesApiUtil.getTimes(date)
    .then(times => dispatch(receiveTimes(times)))
)

export const newTimesAdd = (data) => dispatch => (
  TimesApiUtil.addTimes(data)
    .then(date => dispatch(receiveTimes(date)),
        err => (
          dispatch(receiveErrors(err.response.data))
        )
    )
)