import React from 'react';
import './adminScheduel.css'

class AdminSchedule extends React.Component {
  constructor(props){
    super(props)
    this.dateCheck = this.dateCheck.bind(this)
    this.dayButtons = this.dayButtons.bind(this)
    this.dropDowns = this.dropDowns.bind(this)
    this.dayButtonAction = this.dayButtonAction.bind(this)
    this.timesListAction = this.timesListAction.bind(this)
    this.completedAction = this.completedAction.bind(this)
    this.oldDates = []
    this.newDates = []
    this.dateDiv = true
    this.timesDiv = false
    this.formDiv = false
    this.newWeekDiv = true
    this.state = {
      timesButtons: [],
      selectedTime: {},
      name: "",
      email: "",
      phone: "",
      interests: {},
      notes: "",
      completed: false
    }
  }

  updateText() {
    return e => {
      this.setState({ notes: e.currentTarget.value })
    };
  }

  dropDowns(e) {
    e.preventDefault();
    let type = e.target.parentNode.id
    let div
    let up
    let down
    switch (type) {
      case 'dates':
        up = document.getElementById("dateUp")
        down = document.getElementById("dateDown")
        div = document.getElementById("daysBody")
        if (this.dateDiv) {
          this.dateDiv = false
          up.classList.add('hidden')
          down.classList.remove('hidden')
          div.classList.add('hidden')
        } else {
          this.dateDiv = true
          up.classList.remove('hidden')
          down.classList.add('hidden')
          div.classList.remove('hidden')
        }
        break
      case 'week':
        let newWeeks = document.getElementById('newWeek')
        let oldWeeks = document.getElementById('oldWeek')
        let oldHead = document.getElementById('oldHead')
        let newHead = document.getElementById('newHead')
        if (this.newWeekDiv){
          newWeeks.classList.add('hidden')
          oldWeeks.classList.remove('hidden')
          newHead.classList.remove('selected')
          oldHead.classList.add('selected')
          this.newWeekDiv = false
        } else {
          oldHead.classList.remove('selected')
          newHead.classList.add('selected')
          newWeeks.classList.remove('hidden')
          oldWeeks.classList.add('hidden')
          this.newWeekDiv = true
        }
        break
      case 'times':
        up = document.getElementById("timeUp")
        down = document.getElementById("timeDown")
        div = document.getElementById("timesBody")
        if (this.timesDiv) {
          this.timesDiv = false
          up.classList.add('hidden')
          down.classList.remove('hidden')
          div.classList.add('hidden')
        } else {
          this.timesDiv = true
          up.classList.remove('hidden')
          down.classList.add('hidden')
          div.classList.remove('hidden')
        }
        break
      case 'form':
        up = document.getElementById("formUp")
        down = document.getElementById("formDown")
        div = document.getElementById("formBody")
        if (this.formDiv) {
          this.formDiv = false
          up.classList.add('hidden')
          down.classList.remove('hidden')
          div.classList.add('hidden')
        } else {
          this.formDiv = true
          up.classList.remove('hidden')
          down.classList.add('hidden')
          div.classList.remove('hidden')
        }
        break
      default:
        return null
    }



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

  dayButtonAction(e) {
    let timeup = document.getElementById("timeUp")
    let timedown = document.getElementById("timeDown")
    let timediv = document.getElementById("timesBody")
    let formup = document.getElementById("formUp")
    let formdown = document.getElementById("formDown")
    let formdiv = document.getElementById("formBody")
    timeup.classList.add('hidden')
    timediv.classList.add('hidden')
    timedown.classList.remove('hidden')
    formup.classList.remove('hidden')
    formdown.classList.add('hidden')
    formdiv.classList.remove('hidden')

    e.preventDefault()
    let time = this.times[e.target.innerHTML]
    this.setState({ selectedTime: time })
    if (time.appointment_id){
      this.props.getTour(time.appointment_id)
       .then(tour => {
         let tourInfo = tour.tour.data
         this.setState({
           name: tourInfo.name,
           email: tourInfo.email,
           phone: tourInfo.phone,
           interests: JSON.parse(tourInfo.interest),
           notes: tourInfo.notes,
           completed: tourInfo.completed})
       })
       
    } else {
      this.setState({
        name: "",
        email: "",
        phone: "",
        interests: {},
        notes: "",
        completed: false
      })
    }
  }

  timesListAction(e) {
    e.preventDefault();

    let dayup = document.getElementById("dateUp")
    let daydown = document.getElementById("dateDown")
    let daydiv = document.getElementById("daysBody")
    let timeup = document.getElementById("timeUp")
    let timedown = document.getElementById("timeDown")
    let timediv = document.getElementById("timesBody")
    this.timesDiv = true
    this.dateDiv = false
    dayup.classList.add('hidden')
    daydiv.classList.add('hidden')
    daydown.classList.remove('hidden')
    timeup.classList.remove('hidden')
    timedown.classList.add('hidden')
    timediv.classList.remove('hidden')

    this.times = this.props.times[e.target.innerHTML]
    this.displayTimes()
  }

  displayTimes() {
    let timesText = Object.keys(this.times)
    let buttons = []
    let i = 1
    if (timesText) {
      timesText.map(time => {
        console.log(time)
        buttons.push(<button key={i} className="dayButtons" onClick={this.dayButtonAction}>{time}</button>)
        i++
      })
      this.setState({ timesButtons: buttons })
    }

  }
  
  completedAction(e){
    e.preventDefault()
    if(this.state.completed) {
      this.setState({completed: false})
    } else {
      this.setState({completed: true})
    }
    console.log(this.state)
  }

  completedButtons(){
    if(this.state.completed){
      return <div onClick={this.completedAction} id="completed">Yes</div>
    } else {
      return <div onClick={this.completedAction} id="notcompleted">No</div>
    }
  }



  render(){
    let timesList = this.state.timesButtons
    let interestList = []
    let notesLocal = this.state.notes
    let num = `tel:${this.state.phone}`
    let mail = `mailto:${this.state.email}?subject=Your Appointment with Gods&Monsters`
    if (this.state.interests.length > 0) {
      this.state.interests.forEach((el, i) => {
          interestList.push(<div key={i}>{el}</div>)
      })
    }

    return(
    <div>
      <div>
        <div className="formDivHeaders" id="dates"> 
          <div className="weekHeader" id="week">
              <div className="weekSelector selected" onClick={this.dropDowns} id="newHead">This Week</div>
              <div className="weekSelector"  onClick={this.dropDowns} id="oldHead">Previous times</div>
          </div>
            
            <i className="fas fa-arrow-circle-down hidden dropDownArrows" id="dateDown" onClick={this.dropDowns}></i>
            <i className="fas fa-arrow-circle-up dropDownArrows" onClick={this.dropDowns} id="dateUp"></i>
        </div>
        <div className='dayDiv' id="daysBody">
            <div id="currentTimes" id="newWeek">
            {this.newDates}
          </div>
            <div id="prevTimes" className="hidden" id="oldWeek">
            {this.oldDates}
          </div>
        </div>
        <div className="timesMainDiv">
            <div className="formDivHeaders" id="times">
              <h2>Please Choose a Time</h2>
              <i className="fas fa-arrow-circle-down dropDownArrows" id="timeDown" onClick={this.dropDowns}></i>
              <i className="fas fa-arrow-circle-up hidden dropDownArrows" onClick={this.dropDowns} id="timeUp"></i>
            </div>
            <div className='timesDiv hidden' id="timesBody">{timesList}</div>
        </div>
      </div>
        <div className="formMainDiv">
          <div className="formDivHeaders" id="form">
            <h2>View Appointment</h2>
            <i className="fas fa-arrow-circle-down dropDownArrows" id="formDown" onClick={this.dropDowns}></i>
            <i className="fas fa-arrow-circle-up hidden dropDownArrows" onClick={this.dropDowns} id="formUp"></i>
          </div>
          <div className="formDiv hidden" id="formBody">
            <p className="displayInfo">Name: {this.state.name}</p>
            <p className="displayInfo">Email: <a href={mail} target="_blank"> {this.state.email}</a></p>
            <p className="displayInfo">Phone Number: <a href={num} >{this.state.phone}</a></p>
            <p className="displayInfo">Interests:  </p>
            <div className="displayInfo">{interestList}</div>
            <textarea value={notesLocal} onChange={this.updateText()}></textarea>
            <p className="displayInfo">Completed?</p>
            {this.completedButtons()}
          </div>
        </div>
      
      
    </div>
    )
  }
}

export default AdminSchedule