import React, { useState } from 'react';
import Cell from '../../Layout/GridCells/Cell/Cell';


const SmallGridCell = (lifeArr) => {

  const [exampleCells, setExampleCells] = useState([true,true,true,true,true,true,true,true,true]);
  console.log("SmallGridCell");
  console.log(exampleCells);

  /* return(
    <div>
      <ol className="grid-wrapper">{
        exampleCells.map((cell, i) => 
          <Cell 
            key={i}
            life={lifeArr[i]}
          />
          )}
      </ol>    
    </div>
  ) */
}

export default SmallGridCell;