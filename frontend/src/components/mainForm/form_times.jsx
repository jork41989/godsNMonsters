import React from 'react';
import './form.css'

class FormTimes extends React.Component {

  constructor(props) {
    super(props);
    this.dateCheck = this.dateCheck.bind(this)
    this.dayButtons = this.dayButtons.bind(this)
  }

  componentDidMount(){
    this.props.getTimes()
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

    console.log(e.target.innerHTML)

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
    console.log(dayList)
    return(
      <div>
        <h1 className="formDate">Please Choose A Date</h1>
        <div className='dayDiv'>{dayList}</div>
        
      </div>
    )
  }
  

}

export default FormTimes