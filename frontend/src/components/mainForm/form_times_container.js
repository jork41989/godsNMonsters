import { connect } from 'react-redux';
import {getCustomerTimes, bookATime} from '../../actions/times_actions'
import {newTourAdd} from '../../actions/tours_actions'
import FormTimes from './form_times'

const mapStateToProps = (state, ownProps) => {
  return ({
    times: state.entities.times,
    timesErrors: state.errors.times,
    tourErrors: state.errors.tours
  })
}

const mapDispatchToProps = dispatch => ({
  getTimes: () => dispatch(getCustomerTimes()),
  newTourAdd: tour => dispatch(newTourAdd(tour)),
  bookATime: time => dispatch(bookATime(time))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormTimes)