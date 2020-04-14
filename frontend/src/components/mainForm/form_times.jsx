import React from 'react';
import './form.css'
import { withRouter } from 'react-router-dom';
import ReactTooltip from 'react-tooltip'


class FormTimes extends React.Component {

  constructor(props) {
    super(props);
    this.times = []
    this.state = {
      timesButtons: [],
      selectedTime: {},
      name: "",
      email: "",
      phone: "",
      interests: {},
      notes: "",
      errors: {}
    }
    this.dateDiv = true
    this.timesDiv = false
    this.formDiv = false
    this.timesListAction = this.timesListAction.bind(this)
    this.dropDowns = this.dropDowns.bind(this)
    this.dateCheck = this.dateCheck.bind(this)
    this.dayButtons = this.dayButtons.bind(this)
    this.dayButtonAction = this.dayButtonAction.bind(this)
    this.interestButton = this.interestButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errorCheck = this.errorCheck.bind(this)
  }

  componentDidMount(){
    this.props.getTimes()
  }

  errorCheck() {
    if (Object.keys(this.props.tourErrors).length === 0) {

    }
    this.setState({ errors: this.props.tourErrors })
  }

  renderErrors() {

    if (Object.keys(this.state.errors).includes('name')) {
      let textField = document.getElementById('name')
      textField.style.border = '3px solid red'
    }
    if (Object.keys(this.state.errors).includes('email')) {
      let ratingField = document.getElementById('email')
      ratingField.style.border = '3px solid red'
    }
    if (Object.keys(this.state.errors).includes('phone')) {
      let ratingField = document.getElementById('phone')
      ratingField.style.border = '3px solid red'
    }
    if (Object.keys(this.state.errors).includes('interest')) {
      let ratingField = document.getElementById('interest')
      ratingField.style.border = '3px solid red'
    }
    if (Object.keys(this.state.errors).includes('notes')) {
      let ratingField = document.getElementById('notes')
      ratingField.style.border = '3px solid red'
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


  handleSubmit(e) {
    e.preventDefault();
    let tour = {
      name: this.state.name,
      email: this.state.email,
      phone:  this.state.phone,
      interest: JSON.stringify(Object.values(this.state.interests)),
      notes: this.state.notes,
      time: this.state.selectedTime.time,
      date: this.state.selectedTime.date
    }
    let time = {...this.state.selectedTime}
    let timeId
    time.taken = true
    this.props.newTourAdd(tour)
      .then(booked => {
        if (booked.tour){
        timeId = booked.tour.data.id
        time.appointment_id = timeId
        this.props.bookATime(time)
          .then(this.props.history.push("tourBooked"))
        } else {
          this.errorCheck()
        }
      })
      
  }

  dropDowns(e){
    e.preventDefault();
    let type = e.target.parentNode.id
    let div
    let up
    let down
    switch(type){
      case 'dates':
        up = document.getElementById("dateUp")
        down  = document.getElementById("dateDown")
        div = document.getElementById("daysBody")
        if (this.dateDiv){
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
      case 'times':
        up = document.getElementById("timeUp")
        down = document.getElementById("timeDown")
        div = document.getElementById("timesBody")
        if (this.timesDiv) {
          this.timesDiv = false
          up.classList.add('hidden')
          down.classList.remove('hidden')
          div.classList.add('hidden')
        } else{
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

  dateCheck(){
    let fullDate = new Date()
    let dayNow = fullDate.getDate()
    let month = fullDate.getMonth() + 1
    let year = fullDate.getFullYear()
    let dates = Object.keys(this.props.times)
    let organized = []
    if (dates){
      dates.forEach(day =>{
        let localyear = parseInt(day.slice(0, 4))
        let localMonth = parseInt(day.slice(5,7))
        let localDay = parseInt(day.slice(8,10))
        if (localyear >= year){
          if (localMonth >= month){
            if (localDay >= dayNow){
              organized.push(day)
            }
          }
          
        }
      })
    }
    return this.dayButtons(organized)
  }

  timesListAction(e){
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
  
  displayTimes(){
    let timesText = Object.keys(this.times)
    let buttons = []
    let i = 1
    if(timesText){
      timesText.map(time => {
        console.log(time)
        buttons.push(<button key={i} className="dayButtons" onClick={this.dayButtonAction}>{time}</button> )
        i++
      })
      this.setState({ timesButtons: buttons}) 
    } 
    
  }

  dayButtons(days){
    let buttons = []
    let i = 1
    days.map(day =>{
      buttons.push(<button className="dayButtons" onClick={this.timesListAction} key={i}>{day}</button>)
      i++
    })
    return buttons
  }

  update(field) {

    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  dayButtonAction(e){
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
    this.setState({selectedTime: time})
  }

  interestButton(e){
    e.preventDefault();
    let interest  = e.target.innerHTML
    let interests = this.state.interests
    if (interests[interest]){
      e.target.classList.remove("added")
      delete interests[interest]
    } else {
      e.target.classList.add("added")
      interests[interest] = interest
    }
    this.setState({interests: interests})
  }


  render(){
    let dayList = this.dateCheck()
    let timesList = this.state.timesButtons
    let day = ""
    let time = ""
    if (Object.keys(this.state.selectedTime).length > 0){
      day = this.state.selectedTime.date
      time = this.state.selectedTime.time
    }
    return(
      <div>
        <div className="daysMainDiv">
          <div className="formDivHeaders" id="dates"> 
            <h2>Please Choose a Date</h2> 
            <i className="fas fa-arrow-circle-down hidden dropDownArrows" id="dateDown" onClick={this.dropDowns}></i>
            <i className="fas fa-arrow-circle-up dropDownArrows" onClick={this.dropDowns} id="dateUp"></i>
          </div>
          <div className='dayDiv' id="daysBody" >{dayList}</div>
        </div>
        <div className="timesMainDiv">
          <div className="formDivHeaders" id="times"> 
            <h2>Please Choose a Time</h2>
            <i className="fas fa-arrow-circle-down dropDownArrows" id="timeDown" onClick={this.dropDowns}></i>
            <i className="fas fa-arrow-circle-up hidden dropDownArrows" onClick={this.dropDowns} id="timeUp"></i>
          </div>
          <div className='timesDiv hidden' id="timesBody">{timesList}</div>
        </div>
        <div className="formMainDiv">
          <div className="formDivHeaders" id="form">
            <h2>Please enter your information</h2>
            <i className="fas fa-arrow-circle-down dropDownArrows" id="formDown" onClick={this.dropDowns}></i>
            <i className="fas fa-arrow-circle-up hidden dropDownArrows" onClick={this.dropDowns} id="formUp"></i>
          </div>
          <div className="formDiv hidden" id="formBody">
            <form className="formLayout" onSubmit={this.handleSubmit}>
              <div className="formFeilds">
              <div className="formSidebySide">
                <div className="formDateTime">Day: {day}</div>
                <div className="formDateTime">Time: {time}</div>
                  <label htmlFor="name" >Name</label>
                  <input className="formInput" type="text" name="name" id="name" data-tip data-for="name" onChange={this.update('name')}/>
                <label htmlFor="email">Email</label>
                  <input className="formInput" type="email" name="email" id="email" onChange={this.update('email')} />
                <label htmlFor="phone">Phone</label>
                  <input className="formInput" type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.update('phone')}/>

              </div>
              
              <div className="formSidebySide">
                <p>Please Select an Interest:</p>
                  <div className="interestsDiv" id="interest">
                  <button className="interestButton" onClick={this.interestButton}>Comics</button>
                  <button className="interestButton" onClick={this.interestButton}>Collectables</button>
                  <button className="interestButton" onClick={this.interestButton}>Games</button>
                </div>
                <p>Please include some details of what your looking for:</p>
                  <textarea name="notes" id="notes" cols="20" rows="10" className="text" onChange={this.update('notes')}></textarea>
              </div>
              </div>
              {this.renderErrors()}
              <input type="submit" value="Book Appointment" className="button4 bouncy submit"/>
              
            </form> 
          </div> 


        </div>
        
        
      </div>
    )
  }
  

}

export default withRouter(FormTimes)