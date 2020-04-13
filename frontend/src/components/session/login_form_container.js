import { connect } from 'react-redux';
import { login } from '../../actions/auth_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    loggedIn: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user))
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);