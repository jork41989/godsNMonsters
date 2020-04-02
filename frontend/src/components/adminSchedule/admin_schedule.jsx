import React from 'react';

class AdminSchedule extends React.Component {

  componentDidMount(){
    this.props.getTimes()
  }

  render(){
    console.log(this.props.times)
    return(
      <div>Times go here!</div>
    )
  }
}

export default AdminSchedule