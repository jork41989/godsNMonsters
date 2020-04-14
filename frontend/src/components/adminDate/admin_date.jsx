import React from 'react'
import './admin_date.css'
import { withRouter } from 'react-router-dom';

class AdminDate extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date: "",
      times: {},
      errors: {}
    }
    this.update = this.update.bind(this);
    this.errorCheck = this.errorCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTimeArr = this.addTimeArr.bind(this)
  }

  componentDidMount(){
    if (!this.props.loggedIn){
      this.props.history.push('/')
    }
  }

  componentDidUpdate(){
    if (!this.props.loggedIn) {
      this.props.history.push('/')
    }
  }



  errorCheck() {
    if (Object.keys(this.props.errors).length === 0) {
      
    }
    this.setState({ errors: this.props.errors })
  }

  update(field) {

    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  addTimeArr(e){
    e.preventDefault()
    let curTimes = this.state.times
    let time = e.target.innerHTML
    let div = document.getElementById(e.target.id)
    if (curTimes[time] && div){
       div.classList.remove("timeSelected")
      delete curTimes[time]
    } else if (div) {
      div.classList.add("timeSelected")
      curTimes[time] = time
    }

    console.log(curTimes)
    return e => this.setState({
      times: curTimes
    })
  }


  handleSubmit(e) {
    e.preventDefault();
    let timesSub = Object.values(this.state.times)
    let dateSub = this.state.date
    timesSub.forEach(time =>{
      let date = {
        date: dateSub,
        time: time,
      }
      this.props.newTimesAdd(date)
        .then(this.errorCheck);
    })
    
  }


  render () {
    let today = new Date().toISOString().substr(0, 10)
    return (
      <div>
        <div className="timesTitle">Add Times</div>
          <form onSubmit={this.handleSubmit}>
          <div className="timesForm">
              <div className="datepickerDiv">
                <input type="date" id="formDate" onChange={this.update('date')} min={today}/>
              </div>
              <div className="timesDiv">
                <div className="timeButton"  id='9AM' onClick={this.addTimeArr}>9AM-10AM</div>
                <div className="timeButton" id='10AM' onClick={this.addTimeArr}>10AM-11AM</div>
                <div className="timeButton" id='11AM' onClick={this.addTimeArr}>11AM-12PM</div>
                <div className="timeButton" id='12PM' onClick={this.addTimeArr}>12PM-1PM</div>
                <div className="timeButton" id='1PM' onClick={this.addTimeArr}>1PM-2PM</div>
                <div className="timeButton" id='2PM' onClick={this.addTimeArr}>2PM-3PM</div>
                <div className="timeButton" id='3PM' onClick={this.addTimeArr}>3PM-4PM</div>
                <div className="timeButton" id='4PM' onClick={this.addTimeArr}>4PM-5PM</div>
              </div>
            </div>
            <input type="submit" value="Add Times" className="submit"/>
          </form>
      </div>
    )
  }

}

export default withRouter(AdminDate)