import { connect } from 'react-redux';
import { newTimesAdd } from '../../actions/times_actions'
import AdminDate from './admin_date'

const mapStateToProps = (state, ownProps) => {
  return ({
    times: state.entities.times,
    errors: state.errors.times,
    loggedIn: state.auth.token,
    currentUser: state.auth.user
  })
}


const mapDispatchToProps = dispatch => ({
  newTimesAdd: times => dispatch(newTimesAdd(times))
})


export default connect(mapStateToProps, mapDispatchToProps)(AdminDate)