import { connect } from 'react-redux';
import { logout, fetchUser } from '../../actions/auth_actions'

import navBar from './navBar'

const mapStateToProps = state => ({
  loggedIn: state.auth.token,
  currentUser: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: () => dispatch(fetchUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navBar);