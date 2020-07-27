import React from 'react';
import SmallGridCell from './SmallGridCell/SmallGridCell';

import './Home.css';


const Home = () => (

    <div className="home-wrapper">
      <h1>El juego de la vida</h1>
      <br/>
      <p>El juego de la vida es un autómata celular diseñado por el matemático británico John      Horton Conway en 1970.
         Se trata de un juego de cero jugadores, lo que quiere decir que su 
         evolución está determinada por el estado inicial y no necesita 
         ninguna entrada de datos posterior. El "tablero de juego" es una 
         malla plana formada por cuadrados (las "células") que se extiende por
          el infinito en todas las direcciones. Por tanto, cada célula tiene 8
           células "vecinas", que son las que están próximas a ella, incluidas
            las diagonales. Las células tienen dos estados: están "vivas" o 
            "muertas" (o "encendidas" y "apagadas"). El estado de las células 
            evoluciona a lo largo de unidades de tiempo discretas (se podría 
            decir que por turnos). El estado de todas las células se tiene en 
            cuenta para calcular el estado de las mismas al turno siguiente. 
            Todas las células se actualizan simultáneamente en cada turno, 
            siguiendo estas reglas:
      </p>
      <ul className="points-container">
        <li className="item">Una célula muerta con exactamente 3 células vivas vecinas "nace" 
        (es decir, al turno siguiente estará viva).</li>
        <li className="item">Una célula viva con 2 o 3 células vecinas vivas se mantiene viva.</li>
        <li className="item">Una célula viva con menos de 2 células vecinas vivas muede de 
        "soledad".</li>
        <li className="item">Una célula viva con más de 3 células vecinas vivas muere por 
        "superpoblación".</li>
      </ul>
      <br />
      <p>Ejemplos de estos cambios de estado por turno serían:</p>
      <br />
      <div className="examples-wrapper">
        <div className="example-1">
          <div className="item">
            <h1>T<sub>0</sub></h1>
            <SmallGridCell lifeArr={[false,false,false,false,true,false,false,false,false]} />
          </div>           
          <div className="item">
            <h1>T<sub>1</sub></h1>
            <SmallGridCell lifeArr={[false,false,false,false,false,false,false,false,false]} />
          </div>
          <div className="item"><p>Una célula viva sin ningún vecino vivo, muere.</p></div>          
        </div>
          
        <div className="example-2">
          <div className="item">
            <SmallGridCell lifeArr={[false,false,false,true,true,true,false,false,false]} />
            <div className="letters">
              <p>A</p>
              <p>B</p>
              <p>C</p>
            </div>
          </div>         
          <div className="item">
            <SmallGridCell lifeArr={[false,true,false,false,true,false,false,true,false]} />
            <div className="letters">
              <p>D</p>
              <p>E</p>
            </div>
          </div>       
          <div className="item"><p>Las células A y C mueren por tener un solo vecino vivo. La célula B sobrevive por tener 2 vecinos vivos.</p>
          <p>Las células D y E nacen por tener 3 vecinos vivos.</p>
          </div>         
        </div>
          
        <div className="example-3">
          <div className="item">
            <SmallGridCell lifeArr={[true,true,false,true,true,true,false,false,false]} />
          </div>       
          <div className="item">
            <SmallGridCell lifeArr={[true,false,true,true,false,true,false,true,false]} />
            <div className="letters-container">
              <div className="item">A</div>
              <div className="item">B</div>
              <div className="item">C</div>
              
              <div className="item">D</div>
              <div className="item">E</div>
              <div className="item">F</div>
              
              <div className="item">G</div>
              <div className="item">H</div>
              <div className="item">I</div>
            </div>    
          </div>
          <div className="item">
            <p>A y D sobrevive por tener 3 vecinos vivos.</p>
            <p>B y E mueren por sobrepoblación.</p>
            <p>C y H nacen por tener 3 vecinos vivos.</p>
            <p>F sobrevive por tener 2 vecinos vivos.</p>
            <p>G e I no cambian de estado.</p>
          </div>         
        </div>
      </div>
      
      <p>El usuario puede activar o desactivar celulas. Cuando el usuario 
      presiona <strong>Iniciar/Reiniciar</strong> la simulación comienza. Cuando presiona <strong> Detener</strong> la simulación se pone en pausa, pudiendo volver a 
      reiniciar desde donde inició con el botón <strong>Iniciar/Reiniciar</strong>.
      Cuando presiona <strong>Borrar todo</strong> el tablero se limpia y las generaciones
      vuelven a cero. El indicador de Generación muestra el turno actual. Cada turno de la 
      simulación se genera en un intervalo de 300 ms.
      </p>
       
    </div>
)

export default Home;