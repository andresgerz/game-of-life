import React, { Component } from 'react'

import "./GridCells.css"

class Cell extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            
            cell: 'none',
            life: false
        }
    } 

    onChange = () => {
    
        this.setState({
            life: !this.state.life
        })
    
       console.log(this.state.life);
        if ( this.state.life ) {
            this.setState({
                cell: '#00F'
            })
        } else {
            this.setState({
                cell: 'none'
            })
        }

}

    componentDidMount() {
        this.onChange();
    }

    render() {

        return (
        <svg onClick={this.onChange}>
            <circle 
                style={{fill: this.state.cell}} 
                cx={15} cy={15} r={12} 
                />
        </svg>
        )
    }
}




export default class GridCells extends Component {
    
   constructor(props) {
       super(props);

       this.state = {
           encender: this.props.encender
       }
   }


    render() {
        let cells = [];
        
        for (let row = 0; row < 30; row++) {
       
            for (let col = 0; col < 50; col++ ) {
                cells.push(   
                    
                            <li key={row.toString() + " " + col.toString()}>
                                <Cell encender={this.state.encender} />
                                {row + "-" + col}
                            </li>);
            }
        }
        return(
            
            
            <ul className="container-list" >{cells}</ul>
                
                
            );        
        
    }
}