import {RECEIVE_TIMES} from '../actions/times_actions'

const timesReducer = (state = {}, action) => {
    Object.freeze(state);
  let times;
  let finObj;
  
  switch(action.type){
    case RECEIVE_TIMES:
      times = action.times.data;
      finObj = {...state}
      times.forEach(el => {
        if (finObj[el.date]){
          finObj[el.date][el.time] = el
        } else {
           let k = `${el.time}`
           let temp = {}
           temp[el.time] = el
          finObj[el.date] = temp
        }
      });
      return Object.assign({}, state, finObj)
    default:
      return state;
  }


}

export default timesReducer