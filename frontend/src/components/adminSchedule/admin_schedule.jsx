import React from 'react';

class AdminSchedule extends React.Component {

  componentDidMount(){
    this.props.getTimes()
  }

  render(){
    return(
      <div>Times go here!</div>
    )
  }
}

export default AdminSchedule