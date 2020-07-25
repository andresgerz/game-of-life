import React from 'react';
import { toggleTodo } from '../../../actions/index';
import { connect } from 'react-redux';


import Cell from './Cell/Cell'
import './GridCells.css';

const GridCells = ({ todos, onTodoClick }) => {

  return(          
    <ul className='container-grid'>
      {todos.map((cell, index) =>  
        <Cell
          key={index}
          {...cell}
          onClick={() => onTodoClick(cell.id)}
        />
        )}
    </ul>      
  );        
    
}


const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(GridCells);