export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};


export const restart = () => {
  return {
    type: 'RESTART_TODO'
  };
};