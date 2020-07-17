import React, { useState } from 'react';
import { connect } from 'react-redux';
import { restart, start } from '../../../actions/index';
import { Button } from 'react-bootstrap';

import './GameOptions.css'

const GameOptions = ({ todos, onRestart, onStart }) => {

  const [intervalID, setIntervalID] = useState(0);
  

  const setIntervalNroTimes = (callback, delay, times) => {
    let count = 0;
    
    let interID = window.setInterval(() => {
      callback();

      if (++count === times) {
        window.clearInterval(intervalID);
      }

    }, delay);

    setIntervalID(interID);
  }


  const onStop = () => {
    console.log('top');
    clearInterval(intervalID);
  }


  return(
    <ul className='navbar-wrapper'>
      <li><Button 
        onClick={() => setIntervalNroTimes(() => {onStart(todos)}, 250, 100)}
      >Iniciar/Reiniciar</Button></li>
      <li><Button onClick={() => onStop()}>Detener</Button></li>
      <li><Button onClick={() => onRestart()}>Borrar todo</Button></li>
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


export default connect(mapStateToProps, mapDispatchToProps)(GameOptions);