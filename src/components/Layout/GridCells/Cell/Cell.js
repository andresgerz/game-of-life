import React, { PropTypes } from 'react'

import './Cell.css'


const Cell = ({ onClick, life}) => {

  // Llena o no el circulo de azul
  return (
    <li className="cell-wrapper" onClick={onClick}>
      <svg>
        <circle
          style={{fill: life? '#00F' : 'none'}}
          cx={15} cy={15} r={12}
        />
      </svg>
    </li>  
  )
}


export default Cell;