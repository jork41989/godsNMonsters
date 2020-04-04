import React from 'react';

class FormTimes extends React.Component {

  constructor(props) {
    super(props);
    this.dateCheck = this.dateCheck.bind(this)
  }

  componentDidMount(){
    this.props.getTimes()
  }

  dateCheck(){
    let fullDate = new Date()
    let day = fullDate.getDate()
    let month = fullDate.getMonth() + 1
    let year = fullDate.getFullYear()
    let dates = Object.keys(this.props.times)
    let organized = []
    if (dates){
      dates.forEach(day =>{
        let localyear = parseInt(day.slice(0, 4))
        let localMonth = parseInt(day.slice(5,6))
        if (localyear >= year){
          console.log(localMonth)
        }
      })
    }

  }


  render(){
    this.dateCheck()
    return(
      <div>Form Times</div>
    )
  }
  

}

export default FormTimes