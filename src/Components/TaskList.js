import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux'
import { checkTask, deleteTask } from '../Redux1/action';
import { Button } from 'react-bootstrap';

const TaskList = () => {


const tasks=useSelector((state)=>state.reducer.tasks)
const dispatch=useDispatch()


  return (

    <div>
         <ListGroup as="ol" numbered>
       {tasks.map((t)=>{
        return (
            
           <ListGroup.Item key={t.id}  as="li" numbered variant="success" >
            
            <p>{t.description}</p>
            <Button style={{marginLeft: "85%"}} onClick={()=>{dispatch(deleteTask(t.id)) }} >Fassa5</Button><br></br>
            <Badge className="float-end" bg="warning" pill>
           <input className='check'  type="checkbox"  onClick={()=>{dispatch(checkTask(t.id))}} /></Badge>
           </ListGroup.Item>
           
        )
        }) 
    }
    </ListGroup>
        
    </div> 
  )
}

export default TaskList