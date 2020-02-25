import React, { Component } from 'react'

import GridCells from './GridCells'
import NavbarWeb from './NavbarWeb'


export default class Layout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      encender: false
    }
  }

  onStart = () =>{
    console.log("onStart");
    this.setState({
      encender: true
    })
  }
  

  onStop = () => {
    console.log('onStop');
    this.setState({
      encender: false
    })
  }

    
  render() {

    return(
      <div>
        <NavbarWeb 
          onStart={this.onStart} 
          onStop={this.onStop}
        />
        <GridCells 
          encender={this.state.encender} 
        />
      </div>
    )
  }
}