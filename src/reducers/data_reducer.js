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
        
        // inner cells
        if ( i >= 51 && i <= 1448 ) {
          
          let environmentState = [
            state[i-51].life, state[i-50].life, state[i-49].life,
            state[i-1].life, state[i+1].life, 
            state[i+51].life, state[i+50].life, state[i+49].life
          ]
          
          let countLife = 0;
          environmentState.map(elem => elem === true ? countLife++ : countLife)

          if(cell.life === true && (countLife === 0 || countLife === 1 || countLife > 3)) {
            return {
              ...cell,
              life: !cell.life,
            };
          } 

          if(cell.life === false && (countLife === 3 )) {
            return {
              ...cell,
              life: !cell.life,
            };
          } 
        } 

        // top and bottom borders cells
        if ( i > 0 && i < 49 ) {
          let environmentState = [
            state[i+1449].life, state[i+1450].life, state[i+1451].life,
            state[i-1].life, state[i+1].life, 
            state[i+51].life, state[i+50].life, state[i+49].life
          ]

          let countLife = 0;
          environmentState.map(elem => elem === true ? countLife++ : countLife)

          if(cell.life === true && (countLife === 0 || countLife === 1 || countLife > 3)) {
            return {
              ...cell,
              life: !cell.life,
            };
          } 

          if(cell.life === false && (countLife === 3 )) {
            return {
              ...cell,
              life: !cell.life,
            };
          } 

        }

        // left and right borders cells
        if ( i > 1450 && i < 1499 ) {
          let environmentState = [
            state[i-51].life, state[i-50].life, state[i-49].life,
            state[i-1].life, state[i+1].life, 
            state[i-1451].life, state[i-1450].life, state[i-1449].life
          ]

          let countLife = 0;
          environmentState.map(elem => elem === true ? countLife++ : countLife)

          if(cell.life === true && (countLife === 0 || countLife === 1 || countLife > 3)) {
            return {
              ...cell,
              life: !cell.life,
            };
          } 

          if(cell.life === false && (countLife === 3 )) {
            return {
              ...cell,
              life: !cell.life,
            };
          } 

        }

        // It lack 4 cells on the corner

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