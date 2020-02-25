import React, { Component } from 'react'

import './NavbarCells.css'

export default class NavbarWeb extends Component {

  constructor(props) {
    super(props);
  }
     
  switchStart = () => {

    this.props.onStart();
  }

  switchStop = () => {
    this.props.onStop();
  }


  render() {

    return(
      <ul className='navbar-wrapper'>
        <li><button onClick={this.switchStart}>Iniciar</button></li>
        <li><button onClick={this.switchStop}>Detener</button></li>
        <li><button>Reiniciar</button></li>
      </ul>
    )
  }
}