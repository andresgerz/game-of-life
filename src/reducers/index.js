import { combineReducers } from 'redux';
import todos from './data_reducer';

const rootReducer = combineReducers({
  todos
})

export default rootReducer; 
