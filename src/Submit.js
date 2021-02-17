import React, { Component } from 'react'

export default class Submit extends Component {


    Log = () => {
        console.log(this.props.location.state);
    }

    render() {
        return (
            <div>
                <button onClick={this.Log.bind(this)}>Test</button>
                
            </div>
        )
    }
}
