import React, { Component } from 'react'
import Education from './components/Education'
import Experience from './components/Experience'


class App extends Component {
  constructor(){
    super();

    this.state = {
      firstname: '',
      lastname: '',
      phonenumber: '',
      email: '',
      education: [],
      experience: []


    }

    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
    this.removeExperience = this.removeExperience.bind(this);

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
      id: newEducation.length + 1
    });
    this.setState({
      education: newEducation
    });
  }

  removeEducation = () => {
    const newEducation = this.state.education;
    newEducation.splice(newEducation.length - 1, 1);

    this.setState({
      education: newEducation

    });
  }

  handleEducationChange = (e, index) => {
    const newData = this.state.education;
    
    newData[index] = [{
      ...newData[index][0],
      [e.target.name]: e.target.value
    }]

    this.setState({
      education: newData
    })


  }

  addExperience = () => {
    const newExperience = this.state.experience;
    newExperience.push({
      id: newExperience.length + 1
    });
    this.setState({
      experience: newExperience
    });
  }

  removeExperience = () => {
    const newExperience = this.state.experience;
    newExperience.splice(newExperience.length - 1, 1);

    this.setState({
      experience: newExperience

    });
  }

  handleExperienceChange = (e, index) => {
    const newData = this.state.experience;
    
    newData[index] = [{
      ...newData[index][0],
      [e.target.name]: e.target.value
    }]

    this.setState({
      experience: newData
    })
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
              <button onClick={this.addEducation}>Add</button>
              <button onClick={this.removeEducation}>Remove</button>
            <div>

            </div>
              {this.state.experience.map((item, index) => 
              <Experience key={index} value={item.value} onChange={e => this.handleExperienceChange(e, index)}/> )}
              <button onClick={this.addExperience}>Add</button>
              <button onClick={this.removeExperience}>Remove</button>
            <div>

          </div>
      </div>
    )
  }
}

export default App

