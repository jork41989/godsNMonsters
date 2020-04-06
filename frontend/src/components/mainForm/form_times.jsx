import React from 'react';
import './form.css'

class FormTimes extends React.Component {

  constructor(props) {
    super(props);
    this.times = []
    this.state = {
      timesButtons: []
    }
    this.dateDiv = true
    this.timesDiv = false
    this.timesListAction = this.timesListAction.bind(this)
    this.dropDowns = this.dropDowns.bind(this)
    this.dateCheck = this.dateCheck.bind(this)
    this.dayButtons = this.dayButtons.bind(this)
  }

  componentDidMount(){
    this.props.getTimes()
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
          console.log(div)
        }
        console.log(div)
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
      timesText.forEach(time => {
        buttons.push(<button key={i} className="dayButtons">{time}</button> )
        i++
      })
      this.setState({ timesButtons: buttons}) 
    } 
    console.log(this.state)
    
  }

  dayButtons(days){
    let buttons = []
    let i = 1
    days.forEach(day =>{
      buttons.push(<button className="dayButtons" onClick={this.timesListAction} key={i}>{day}</button>)
      i++
    })
    return buttons
  }


  render(){
    let dayList = this.dateCheck()
    let timesList = this.state.timesButtons
    return(
      <div>
        <div className="daysMainDiv">
          <div className="formDivHeaders" id="dates"> 
            <h2>Please Choose a Date</h2> 
            <i className="fas fa-arrow-circle-down hidden dropDownArrows" id="dateDown" onClick={this.dropDowns}></i>
            <i className="fas fa-arrow-circle-up dropDownArrows" onClick={this.dropDowns} id="dateUp"></i>
          </div>
          <div className='dayDiv' id="daysBody">{dayList}</div>
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
    )
  }
  

}

export default FormTimes