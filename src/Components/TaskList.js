import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
 
import { useSelector } from 'react-redux'
//import { checkTask, deleteTask, modifTask } from '../Redux1/action';


import Task from './Task';
 
const TaskList = () => {

    const tasks=useSelector((state)=>state.reducer.tasks)
     
    //const dispatch=useDispatch()

  return (

    <div>
         <ListGroup as="ol" >
       {tasks.map((t, index)=>{
        return (
            
           <ListGroup.Item    as="li" variant="success" >
             
            <Task t={t} key={index} />  
            
           </ListGroup.Item>
           
        )
        }) 
    }
    </ListGroup>
        
    </div> 
  )
}

export default TaskList