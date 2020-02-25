import React, { Component } from 'react'

import './Cell.css'


export default class Cell extends Component {
    
  constructor(props) {
    super(props);
        
    this.state = {
    color: 'none',
    life: false
    }
  } 

  // Llena o no el circulo de azul
  onChange = () => {
    
    this.setState({
    life: !this.state.life
    })
    
    if ( this.state.life ) {
      this.setState({
      color: '#00F'
     })
    } else {
      this.setState({
      color: 'none'
    })
  }

}


  componentDidMount() {
    this.onChange();
  }


  render() {
    return (
      <li onClick={() => {this.onChange()}}>
        <svg onClick={() => {this.props.upDateLife(this.props.id)}}>
          <circle
            style={{fill: this.state.color}}
            cx={15} cy={15} r={12}
          />
        </svg>
      </li>  
    )
  }
}