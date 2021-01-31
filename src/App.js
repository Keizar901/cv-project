import React, { Component } from 'react'
import Education from './components/Education'


class App extends Component {
  constructor(){
    super();

    this.state = {
      firstname: '',
      lastname: '',
      phonenumber: '',
      email: '',
      education: [
      ]

    }

  }

  handleFirstnameChange = (event) => {
    this.setState({
      firstname: event.target.value

    })

  }

  handleLastnameChange = (event) => {
    this.setState({
      lastname: event.target.value

    })

  }

  handlePhoneNumberChange = (event) => {
    this.setState({
      phonenumber: event.target.value

    })

  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value

    })

  }

  addEducation = () => {
    const newEducation = this.state.education;
    newEducation.push({
      id: newEducation.length + 1,
      value: ''
    });
    this.setState({
      education: newEducation
    }, console.log(this.state.education));
  }

  handleEducationChange = (e, index) => {
    const newData = this.state.education;
    newData[index].value = e.target.value;
    this.setState({
      education: newData
    }, console.log(this.state.education))


  }

  render() {
    return (
      <div>
          <div>
            <label>First Name</label>
            <input
              type="text"
              value={this.state.firstname}
              onChange={this.handleFirstnameChange}

            />

            <label>Last Name</label>
            <input
              type="text"
              value={this.state.lastname}
              onChange={this.handleLastnameChange}

            />

            <label>Phone Number</label>
            <input
              type="text"
              value={this.state.phonenumber}
              onChange={this.handlePhoneNumberChange}

            />

            <label>Email Address</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}

            />
            
          </div>
            {this.state.education.map((item, index) => 
            <Education key={index} value={item.value} onChange={e => this.handleEducationChange(e, index)}/> )}
            <button onClick={this.addEducation.bind(this)}>Add</button>
          <div>


          </div>
      </div>
    )
  }
}

export default App

