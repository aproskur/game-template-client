import data from '../data/game.json'
import StatusButton from '../components/StatusButton'
import { useState } from 'react';

const StatusBar = (props) => {

  

  const className = props.data.cssClass;

  // название переменных в статус баре и их значение
  const initialVariables = props.variables
  
  const [variables, setVariables] = useState(initialVariables)

  console.log("Переменные передаю в каждый статус баттон")
  console.log(variables)
 
  return (
    
    <div className = { className }>
        <ul>
     
        { variables.status.map((variables) => {       
          return (
            <StatusButton key={ variables.id } status = { variables }/>        
          );
        })}

        </ul>
    </div>
    ) 
  } 

export default StatusBar