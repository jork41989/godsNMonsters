import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from './G&M1White.png'

class NavBar extends React.Component {

  home


  render (){
    return(
    <div className="NavMain">
      <div className="logo"><Link to='/'><img src={logo} alt="Logo" className="logo"/></Link></div>
        <div>
          <button>
            <Link to="/timesAvailable">View Times</Link>
          </button>
          <button>
            <Link to="/datesForm">Add Times</Link>
          </button>
         
        </div>
    </div>
    )
  }
}

export default NavBar;