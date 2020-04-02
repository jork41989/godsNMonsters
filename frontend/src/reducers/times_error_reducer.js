

const _nullErrors = [];

const TimesErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type){
    default:
      return state
  }

}

export default TimesErrorsReducer;