import { connect } from 'react-redux';
import { register } from '../../actions/auth_actions';
import SignupForm from './signup_form';


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.session.isAuthenticated,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: user => dispatch(register(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);