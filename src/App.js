import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super();

    this.state = {
      firstname: '',
      lastname: ''

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

  render() {
    return (
      <div>
        <form>
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
          </div>
        </form>
      </div>
    )
  }
}

export default App

