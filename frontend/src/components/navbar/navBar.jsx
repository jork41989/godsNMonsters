import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from './G&M1White.png'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.checkUser = this.checkUser.bind(this)
  }

  componentDidMount(){
      this.props.fetchUser()
      this.checkUser()
  }

  checkUser(){
    if (this.props.loggedIn) {
      return (<div>
          <button>
            <Link to="/timesAvailable">View Times</Link>
          </button>
          <button>
            <Link to="/datesForm">Add Times</Link>
          </button>
          <button onClick={this.props.logout}>
            Logout
          </button>
        </div>
      )
    } else{
       return (<div></div>)  
    }

  }


  render (){
    return(
    <div className="NavMain">
      <div className="logo"><Link to='/'><img src={logo} alt="Logo" className="logo"/></Link></div>
        <div>
          {this.checkUser()}
        </div>
    </div>
    )
  }
}

export default NavBar;