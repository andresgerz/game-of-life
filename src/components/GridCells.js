import React, { Component } from 'react'

import './GridCells.css'

import Cell from './Cell'

export default class GridCells extends Component {
    
  constructor(props) {
    super(props);

    let cells = [];  
    let nro = 0;
    for (let row = 0; row < 30; row++) {
      for (let col = 0; col < 50; col++) {
        cells.push({
          id: nro,
          row: row,
          col: col,
          life: false,
          color: 'none'  
        })
        nro++;
      }  
    }

    this.state = {
      cellsArray: cells
    }

    }

  
    upDateLife = (id) => {
      const newList = this.state.cellsArray.slice();

      const upDatedList = newList.map((cell) => {
        const newCell = {
          id: cell.id,
          row: cell.row,
          col: cell.col,
          life: !cell.life
        }
      
        return cell.id === id ? newCell : cell;
      })
      
      this.setState({
        cellsArray: upDatedList
      })
  
    }
    
    
    startGame = () => {
      
      /* Si se inicia el juego, empieza a correr el juego y los condicionales 
         van analizando las celulas vecinas para ver si hay que cambiar el estado 
         'life' de cada una.
      */
      if (this.props.encender) {
        const newList = this.state.cellsArray.slice();
        const upDateLife = newList.map((cell, index) => {
          
          // Celulas internas
          if (cell.row != 0 && cell.row != 29 && cell.col != 0 && cell.col != 49) {
            
            let count = 0;
            let neighbours = [index-51, index-50, index-49, index-1, index+1, index+49, index+50, index+51];

            neighbours.map((neighbour) => {
              
              if (newList[neighbour].life) {
                count++;
              } 
            })


            if (count < 2 || count > 3 ) {
              
              const newCell = {
                id: cell.id,
                row: cell.row,
                col: cell.col,
                life: false
              }
              return newCell;
            } else if (cell.life === false && count === 3) {

              const newCell = {
                id: cell.id,
                row: cell.row,
                col: cell.col,
                life: true
              }
              return newCell;
              
            } else {
              return cell;
            }

            count = 0;
          } 

            // Celulas del borde superio
          if (cell.row === 0 && cell.col > 0 && cell.col < 49) {
          
            let count = 0;
            let neighbours = [index+1450-1, index+1450, index+1450+1, index-1, index+1, index+49, index+50, index+51];

            neighbours.map((neighbour) => {
              
              if (newList[neighbour].life) {
                count++;
              } 
            })


            if (count < 2 || count > 3 ) {
              
              const newCell = {
                id: cell.id,
                row: cell.row,
                col: cell.col,
                life: false
              }
              return newCell;
            } else if (cell.life === false && count === 3) {

              const newCell = {
                id: cell.id,
                row: cell.row,
                col: cell.col,
                life: true
              }
              return newCell;
              
            } else {
              return cell;
            }

            count = 0;
          } 


          // Celulas del borde inferior
          if (cell.row === 29 && cell.col > 0 && cell.col < 49) {
        
            let count = 0;
            let neighbours = [index-51, index-50, index-49, index-1, index+1, index-1450-1, index-1450, index-1450+1];

            neighbours.map((neighbour) => {
              
              if (newList[neighbour].life) {
                count++;
              } 
            })


            if (count < 2 || count > 3 ) {
              
              const newCell = {
                id: cell.id,
                row: cell.row,
                col: cell.col,
                life: false
              }
              return newCell;
            } else if (cell.life === false && count === 3) {

              const newCell = {
                id: cell.id,
                row: cell.row,
                col: cell.col,
                life: true
              }
              return newCell;
              
            } else {
              return cell;
            }

            count = 0;
            } 

            // Celulas del borde izquierdo
            if (cell.row > 0 && cell.row < 29 && cell.col === 0) {
        
              let count = 0;
              let neighbours = [index-1, index-50, index-49, index+49, index+1, index+99, index+50, index+51];
  
              neighbours.map((neighbour) => {
                
                if (newList[neighbour].life) {
                  count++;
                } 
              })

  
              if (count < 2 || count > 3 ) {
                
                const newCell = {
                  id: cell.id,
                  row: cell.row,
                  col: cell.col,
                  life: false
                }
                return newCell;
              } else if (cell.life === false && count === 3) {
  
                const newCell = {
                  id: cell.id,
                  row: cell.row,
                  col: cell.col,
                  life: true
                }
                return newCell;
                
              } else {
                return cell;
              }
  
              count = 0;
              
            } 
  
            
            // Celulas del borde derecho
            if (cell.row > 0 && cell.row < 29 && cell.col === 49) {
              
              let count = 0;
              let neighbours = [index-51, index-50, index-99, index-1, index-49, index+49, index+50, index+1];

              neighbours.map((neighbour) => {
                
                if (newList[neighbour].life) {
                  count++;
                } 
              })


              if (count < 2 || count > 3 ) {
                
                const newCell = {
                  id: cell.id,
                  row: cell.row,
                  col: cell.col,
                  life: false
                }
                return newCell;
              } else if (cell.life === false && count === 3) {

                const newCell = {
                  id: cell.id,
                  row: cell.row,
                  col: cell.col,
                  life: true
                }
                return newCell;
                
              } else {
                return cell;
              }

              count = 0;
            } 


            // Celulas de las esquinas
            if (cell.id === 0 || cell.id === 49 || cell.id === 1450 || cell.id === 1499) {
              
                
              const newCell = {
                id: cell.id,
                row: cell.row,
                col: cell.col,
                life: false
              }
              return newCell;
              
            } 

            
          }) 
          
       
          console.log("Result:", upDateLife);
        }
      
    }


    componentDidUpdate() {
      this.startGame(); 
    } 


    render() {
    return(          
      <ul className='container-grid'>
        {this.state.cellsArray.map((cell) => { 
          return(           
            <Cell 
              key={cell.id}
              id={cell.id}
              upDateLife={this.upDateLife}
            />
            )}
          )}
      </ul>      
    );        
    }
}