import * as ToursApiUtil from '../util/tours_util';

export const RECEIVE_TOURS = 'RECEIVE_TOURS'
export const RECEIVE_A_TOUR = 'RECEIVE_A_TOUR'
export const RECEIVE_TOURS_ERRORS = 'RECEIVE_TOURS_ERRORS'

const receiveTours = tours => ({
  type: RECEIVE_TOURS,
  tours
})

const receiveATour = tour => ({
  type: RECEIVE_A_TOUR,
  tour
})

export const receiveErrors = errors => ({
  type: RECEIVE_TOURS_ERRORS,
  errors
})

export const getTours = () => dispatch => (
  ToursApiUtil.getTours()
    .then(tours => dispatch(receiveTours(tours)))
)

export const getTour = (time) => dispatch => (
  ToursApiUtil.getTour(time)
    .then(tour => dispatch(receiveATour(tour)))
)

export const newTourAdd = (data) => dispatch => (
  ToursApiUtil.addTour(data)
    .then(tour => dispatch(receiveATour(tour)),
      err => (
        dispatch(receiveErrors(err.response.data))
      )
    )

)