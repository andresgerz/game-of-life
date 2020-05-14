import React from 'react';
import { connect } from 'react-redux';
import { restart, start } from '../../../actions/index';

import './NavbarCells.css'

const NavbarWeb = ({ todos, onRestart, onStart }) => {
   
  return(
    <ul className='navbar-wrapper'>
      <li><button onClick={() => onStart(todos)}>Iniciar</button></li>
      <li><button>Detener</button></li>
      <li><button onClick={() => onRestart()}>Reiniciar</button></li>
    </ul>
  )
}


const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}


const mapDispatchToProps = (dispatch) => {
  return { 
    onRestart: () => {
      dispatch(restart());
    },
    onStart: () => {
      dispatch(start());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavbarWeb);