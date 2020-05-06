import React from 'react';
import { connect } from 'react-redux';
import { restart } from '../../../actions/index';

import './NavbarCells.css'

const NavbarWeb = ({ onRestart }) => {

  return(
    <ul className='navbar-wrapper'>
      <li><button>Iniciar</button></li>
      <li><button>Detener</button></li>
      <li><button onClick={() => onRestart()}>Reiniciar</button></li>
    </ul>
  )
}


const mapDispatchToProps = (dispatch) => {
  return { 
    onRestart: () => {
      dispatch(restart());
    }
  }
}


export default connect(null, mapDispatchToProps)(NavbarWeb);