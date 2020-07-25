import React from 'react';

import './Home.css';


const Home = () => (

    <div className="home-wrapper">
      <h1>El juego de la vida</h1>
      <br/>
      <p>Se trata de un juego de cero jugadores, lo que quiere decir que su 
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
    {/*   <SmallGridCell lifeArr={[false,true,true,false,false,false,true,true,false]} />
      <SmallGridCell />
      <SmallGridCell />
      <SmallGridCell />
      <SmallGridCell />
      <SmallGridCell />
            */}  
      
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