import {RECEIVE_TIMES, RECEIVE_A_TIME} from '../actions/times_actions'

const timesReducer = (state = {}, action) => {
    Object.freeze(state);
  let times;
  let finObj;
  let timeN;
  
  switch(action.type){
    case RECEIVE_TIMES:
      times = action.times.data;
      finObj = {...state}
      times.forEach(el => {
        if (finObj[el.date]){
          finObj[el.date][el.time] = el
        } else {
           let temp = {}
           temp[el.time] = el
          finObj[el.date] = temp
        }
      });
      return Object.assign({}, state, finObj)
    case RECEIVE_A_TIME:
        timeN = action.time.data;
        finObj = {...state}
        if (finObj[timeN.date]){
          finObj[timeN.date][timeN.time] = timeN
        } else {
          let temp = {}
          temp[timeN.time] = timeN
        }
      return Object.assign({}, state, finObj)
    default:
      return state;
  }


}

export default timesReducer