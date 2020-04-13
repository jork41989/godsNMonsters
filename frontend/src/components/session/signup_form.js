import React from 'react';
import { withRouter } from 'react-router-dom';
import './forms.css'
import ReactTooltip from 'react-tooltip'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.clearedErrors = false;
  }



  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated === true) {
      this.props.closeModal()
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };

    this.props.signup(user, this.props.history); 
    
  }

  renderErrors() {

    if (Object.keys(this.state.errors).includes('email')) {
      let emailFeild = document.getElementById('email')
      emailFeild.style.border = '3px solid red'
    }
    if (Object.keys(this.state.errors).includes('password')) {
      let pwFeild = document.getElementById('password')
      pwFeild.style.border = '3px solid red'
    }
    if (Object.keys(this.state.errors).includes('username')) {
      let pwFeild = document.getElementById('username')
      pwFeild.style.border = '3px solid red'
    }
    if (Object.keys(this.state.errors).includes('password2')) {
      let pwFeild = document.getElementById('password2')
      pwFeild.style.border = '3px solid red'
    }


    return (
      <div>
        {Object.keys(this.state.errors).map((error, i) => (
          <div id={i}>
            <ReactTooltip id={error} place="top" type="error" effect="solid">
              <span>{this.state.errors[error]}</span>
            </ReactTooltip>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="signup-login-bg">
        <form onSubmit={this.handleSubmit}>
          <div className="formCenter">
            <p className={'formHeader'}>Create Account</p>
            <br/>
              <input type="email"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              className={'formInput'}
              id={'email'}
              data-tip data-for={'email'}
              />
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              className={'formInput'}
              id={'username'}
              data-tip data-for={'username'}
              />
            <br/>
             <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                placeholder="First Name"
              className={'formInput'}
              id={'first_name'}
              data-tip data-for={'first_name'}
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              className={'formInput'}
              id={'password'}
              data-tip data-for={'password'}
              />
            <br/>
            
            <input type="submit" value="Sign Up" className={'submit'} />
            
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);