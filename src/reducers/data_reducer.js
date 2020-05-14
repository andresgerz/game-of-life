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
    

    case 'START_TODO':
      console.log('start todo');
      
      return state.map((cell, i) => {
        
        if ( i > 51 && i < 180 ) {
          
          let environmentState = [
            state[i-51].life, state[i-50].life, state[i-49].life,
            state[i-1].life, state[i+1].life, 
            state[i+51].life, state[i+50].life, state[i+49].life
          ]

          let countLife = 0;
          environmentState.map(elem => elem === true ? countLife++ : null)

          if(cell.life === true && (countLife === 0 || countLife === 1 || countLife > 3)) {
            return {
              ...cell,
              life: !cell.life,
            };
          } 

          if(cell.life === false && (countLife === 2 || countLife === 3 )) {
            return {
              ...cell,
              life: !cell.life,
            };
          } 
        } 
        return cell;  

      })
      


    case 'RESTART_TODO':
      console.log('RESTART_TODO');
      return initialState;   
    
    default:  
      return state;
  }

}


export default todos;