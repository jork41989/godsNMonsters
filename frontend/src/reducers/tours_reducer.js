import {RECEIVE_A_TOUR, RECEIVE_TOURS} from '../actions/tours_actions';

const toursReducer = ( state = {}, action) => {
  Object.freeze(state);
  let tours;
  let finObj;
  let toursN;

  switch (action.type) {
    case RECEIVE_TOURS:
      tours = action.tours.data
      finObj = {...state}
      tours.forEach(el => {
        if (finObj[el.id]) {
          finObj[el.id] = el
        } else { 
          finObj[el.id] = el
        }
      })
     return Object.assign({}, state, finObj)
    case RECEIVE_A_TOUR:
      toursN = action.tour.data;
      finObj = {...state}
       if (finObj[toursN.id]) {
         finObj[toursN.id] = toursN
       } else {
         finObj[toursN.id] = toursN
       }
       return Object.assign({}, state, finObj)
    default:
      return state;
  }


}

export default toursReducer