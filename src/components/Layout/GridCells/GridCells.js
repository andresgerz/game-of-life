import React, { PropTypes } from 'react';
import { toggleTodo } from '../../../actions/index';
import { connect } from 'react-redux';


import Cell from './Cell/Cell'
import './GridCells.css';

const GridCells = ({ todos, onTodoClick }) => {
  console.log('todos');
  console.log(todos);
  return(          
    <ul className='container-grid'>
      {todos.map(cell =>  
        <Cell
          key={cell.id}
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