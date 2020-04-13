import React from 'react';

class AdminSchedule extends React.Component {
  constructor(props){
    super(props)
    this.dateCheck = this.dateCheck.bind(this)
    this.dayButtons = this.dayButtons.bind(this)
    this.oldDates = []
    this.newDates = []
  }

  dayButtons(days) {
    let buttons = []
    let i = 1
    days.map(day => {
      buttons.push(<button className="dayButtons" onClick={this.timesListAction} key={i}>{day}</button>)
      i++
    })
    return buttons
  }

  dateCheck() {
    let fullDate = new Date()
    let dayNow = fullDate.getDate()
    let month = fullDate.getMonth() + 1
    let year = fullDate.getFullYear()
    let dates = Object.keys(this.props.times)
    let old = []
    let future = []
    if (dates) {
      dates.forEach(day => {
        let localyear = parseInt(day.slice(0, 4))
        let localMonth = parseInt(day.slice(5, 7))
        let localDay = parseInt(day.slice(8, 10))
        if (localyear >= year) {
          if (localMonth >= month) {
            if (localDay >= dayNow) {
              future.push(day)
            } else {
              old.push(day)
            }
          } else {
            old.push(day)
          }

        } else {
          old.push(day)
        }
      })
    }
    this.newDates = this.dayButtons(future)
    this.oldDates = this.dayButtons(old)
  }
  

  componentDidMount(){
    if (!this.props.loggedIn) {
      this.props.history.push('/')
    }
    this.props.getTimes()
    this.dateCheck()
  }

  componentDidUpdate() {
    if (!this.props.loggedIn) {
      this.props.history.push('/')
    }
  }




  render(){
    return(
    <div>
      <div>
        <div>This Week</div>
          {this.newDates}
      </div>
      
      
    </div>
    )
  }
}

export default AdminSchedule