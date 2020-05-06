let initialState = [];  
let nro = 0;
for (let row = 0; row < 30; row++) {
  for (let col = 0; col < 50; col++) {
    initialState.push({
      id: nro,
      row: row,
      col: col,
      life: false
    })
    nro++;
  }  
}


const todos = (state = initialState, action) => {
  
  switch (action.type) {
    case 'TOGGLE_TODO':
      
      return state.map( iState => {
        
        if (iState.id !== action.id) {
          return iState; 
        }
        return {
          ...iState,
          life: !iState.life,
        };
      })
      
    case 'RESTART_TODO':
      console.log('RESTART_TODO');
      return initialState;   
    
    default:  
      return state;
  }

}


export default todos;