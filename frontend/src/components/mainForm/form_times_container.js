import { connect } from 'react-redux';
import {getCustomerTimes} from '../../actions/times_actions'
import FormTimes from './form_times'

const mapStateToProps = (state, ownProps) => {
  return ({
    times: state.entities.times,
    errors: state.errors.times
  })
}

const mapDispatchToProps = dispatch => ({
  getTimes: () => dispatch(getCustomerTimes())
})

export default connect(mapStateToProps, mapDispatchToProps)(FormTimes)