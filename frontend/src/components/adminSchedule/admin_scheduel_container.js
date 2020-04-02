import { connect } from 'react-redux';
import {getTimes} from '../../actions/times_actions'
import AdminSchedule from './admin_schedule'

const mapStateToProps = (state, ownProps) => {
  return ({
    times: state.entities.times,
    errors: state.errors.times
  })
}

const mapDispatchToProps = dispatch => ({
  getTimes: () => dispatch(getTimes())
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminSchedule)