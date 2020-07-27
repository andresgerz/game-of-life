import React, { useState } from 'react';
import Cell from '../../Layout/GridCells/Cell/Cell';


const SmallGridCell = (props) => {

  const [exampleCells, setExampleCells] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.log("props");
  //console.log(props.lifeArr[0]);
  
  return(
    <div>
      <ol className="grid-wrapper">{
        exampleCells.map((cell, i) => 
          <Cell 
            key={i}
            life={props.lifeArr[i]}
          />
          )}
      </ol>    
    </div>
  )
}

export default SmallGridCell; 