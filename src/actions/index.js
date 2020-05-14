export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};


export const start = (id) => {
  console.log('start action');
  
  return {
    type: 'START_TODO',
    id
  }
}


export const restart = () => {
  return {
    type: 'RESTART_TODO'
  };
};